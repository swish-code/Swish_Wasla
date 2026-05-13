import express, { type Request, type Response, type NextFunction } from "express";
import { createServer as createViteServer } from "vite";
import { createServer as createHttpServer } from "http";
import { Server } from "socket.io";
import path from "path";
import { fileURLToPath } from "url";
import cookieParser from "cookie-parser";
import bcrypt from "bcryptjs";
import { SignJWT, jwtVerify } from "jose";
import { db, setupDb } from "./src/db/index.ts";
import { users, branches, tasks, contentOverrides, logs, requests, branchColumns, customCards, notifications, userNotifications, offers } from "./src/db/schema.ts";
import { BRANCH_DATA, TASK_DATA } from "./src/data.ts";
import { eq, desc, ilike, or, asc, and } from "drizzle-orm";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const JWT_SECRET = new TextEncoder().encode(process.env.JWT_SECRET || "default_secret_key_change_me");
const PORT = 3000;

async function startServer() {
  const app = express();
  const httpServer = createHttpServer(app);
  const io = new Server(httpServer, {
    cors: {
      origin: "*",
      methods: ["GET", "POST"]
    }
  });

  app.use(express.json({ limit: '10mb' }));
  app.use(cookieParser());

  // Background Database Setup
  const initializeDatabase = async () => {
    try {
      await setupDb();
      console.log("Database schema initialized.");
      
      // Bootstrap branches: Only if empty
      const branchCount = await db.select({ count: branches.id }).from(branches).limit(1);
      if (branchCount.length === 0) {
        console.log(`Seeding ${BRANCH_DATA.length} branches...`);
        for (let i = 0; i < BRANCH_DATA.length; i++) {
          const bd = BRANCH_DATA[i];
          const { id: _, ...data } = bd as any;
          await db.insert(branches).values({
            ...data,
            sortOrder: i + 1
          });
        }
        console.log("Branch seeding complete.");
      }

      // Bootstrap tasks: Only if empty
      const taskCount = await db.select({ count: tasks.id }).from(tasks).limit(1);
      if (taskCount.length === 0) {
        console.log(`Seeding ${TASK_DATA.length} tasks...`);
        for (const t of TASK_DATA) {
          await db.insert(tasks).values({
            status: t.status,
            brand: t.brand,
            branch: t.branch,
            location: t.location
          });
        }
        console.log("Task seeding complete.");
      }
    } catch (err) {
      console.error("Database initialization failed:", err);
    }
  };

  initializeDatabase();

  // --- Socket.IO Connection ---
  io.on("connection", (socket) => {
    console.log("A user connected:", socket.id);
    socket.on("disconnect", () => {
      console.log("User disconnected:", socket.id);
    });
  });

  // --- Auth Middleware ---
  const authenticateToken = async (req: any, res: Response, next: NextFunction) => {
    const token = req.cookies.token;
    if (!token) return res.status(401).json({ error: "Unauthorized" });

    try {
      const { payload } = await jwtVerify(token, JWT_SECRET);
      
      // Verify user still exists in DB (to handle DB resets)
      if (payload && payload.id) {
        const userExists = await db.select().from(users).where(eq(users.id, payload.id as any)).limit(1);
        if (userExists.length === 0) {
          res.clearCookie("token");
          return res.status(401).json({ error: "User session invalid" });
        }
      }

      req.user = payload;
      next();
    } catch (err) {
      return res.status(403).json({ error: "Forbidden" });
    }
  };

  // Broadcast Notification Helper
  const broadcastNotification = async (req: any, section: string, actionType: string, details: string) => {
    try {
      const senderName = req.user?.name || "نظام";
      const [notification] = await db.insert(notifications).values({
        senderName,
        section,
        actionType,
        details
      }).returning();

      io.emit("notification", notification);
      console.log(`Notification broadcasted: ${actionType} in ${section}`);
    } catch (err) {
      console.error("Failed to broadcast notification:", err);
    }
  };

  const authorizeManager = (req: any, res: Response, next: NextFunction) => {
    if (req.user?.role !== "admin" && req.user?.role !== "leader" && req.user?.role !== "manager") {
      return res.status(403).json({ error: "Manager access required" });
    }
    next();
  };

  const authorizeAdmin = (req: any, res: Response, next: NextFunction) => {
    if (req.user?.role !== "admin") {
      return res.status(403).json({ error: "Admin access required" });
    }
    next();
  };

  const createLog = async (req: any, action: string, details?: string) => {
    try {
      const { id, name } = req.user || {};
      await db.insert(logs).values({
        userId: id,
        userName: name || "System",
        action,
        details
      });
    } catch (err) {
      console.error("Failed to create log:", err);
    }
  };

  // --- Auth Routes ---
  app.post("/api/auth/login", async (req, res) => {
    const { email, password } = req.body;
    try {
      const existingUser = await db.select().from(users).where(eq(users.email, email)).limit(1);
      
      if (existingUser.length === 0) {
        return res.status(401).json({ error: "Invalid credentials" });
      }

      const user = existingUser[0];
      const validPassword = await bcrypt.compare(password, user.password);
      if (!validPassword) return res.status(401).json({ error: "Invalid credentials" });

      const token = await new SignJWT({ id: user.id, email: user.email, role: user.role, name: user.name })
        .setProtectedHeader({ alg: "HS256" })
        .setIssuedAt()
        .setExpirationTime("24h")
        .sign(JWT_SECRET);

      res.cookie("token", token, { 
        httpOnly: true, 
        secure: true, 
        sameSite: 'none',
        maxAge: 24 * 60 * 60 * 1000 
      });
      
      const userToLog = { user: { id: user.id, email: user.email, role: user.role, name: user.name } };
      await createLog({ user: userToLog.user }, "Login", `User ${user.name} logged in`);
      res.json(userToLog);
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: "Internal server error" });
    }
  });

  app.post("/api/auth/logout", authenticateToken, async (req, res) => {
    await createLog(req, "Logout", "User logged out");
    res.clearCookie("token");
    res.json({ message: "Logged out" });
  });

  app.get("/api/users", authenticateToken, authorizeAdmin, async (req, res) => {
    try {
      const allUsers = await db.select({
        id: users.id,
        email: users.email,
        name: users.name,
        role: users.role,
        createdAt: users.createdAt
      }).from(users);
      res.json(allUsers);
    } catch (err) {
      res.status(500).json({ error: "Failed to fetch users" });
    }
  });

  app.post("/api/users", authenticateToken, authorizeAdmin, async (req, res) => {
    const { email, password, name, role } = req.body;
    try {
      const hashedPassword = await bcrypt.hash(password, 10);
      const [newUser] = await db.insert(users).values({
        email,
        password: hashedPassword,
        name,
        role
      }).returning({
        id: users.id,
        email: users.email,
        name: users.name,
        role: users.role
      });
      await createLog(req, "Create User", `Created user ${newUser.email} with role ${newUser.role}`);
      await broadcastNotification(req, "المستخدمين", "إضافة", `تم إضافة مستخدم جديد: ${newUser.name} (${newUser.role})`);
      res.json(newUser);
    } catch (err) {
      res.status(500).json({ error: "Failed to create user" });
    }
  });

  app.delete("/api/users/:id", authenticateToken, authorizeAdmin, async (req, res) => {
    try {
      const userToDelete = await db.select().from(users).where(eq(users.id, parseInt(req.params.id))).limit(1);
      await db.delete(users).where(eq(users.id, parseInt(req.params.id)));
      if (userToDelete.length > 0) {
        await createLog(req, "Delete User", `Deleted user ${userToDelete[0].email}`);
        await broadcastNotification(req, "المستخدمين", "حذف", `تم حذف المستخدم: ${userToDelete[0].name}`);
      }
      res.json({ message: "User deleted" });
    } catch (err) {
      res.status(500).json({ error: "Failed to delete user" });
    }
  });

  app.put("/api/users/:id", authenticateToken, authorizeAdmin, async (req, res) => {
    const { id } = req.params;
    const { email, password, name, role } = req.body;
    try {
      const updateData: any = { email, name, role, updatedAt: new Date() };
      
      if (password && password.trim() !== "") {
        updateData.password = await bcrypt.hash(password, 10);
      }

      const [updatedUser] = await db.update(users)
        .set(updateData)
        .where(eq(users.id, parseInt(id)))
        .returning({
          id: users.id,
          email: users.email,
          name: users.name,
          role: users.role
        });

      if (!updatedUser) {
        return res.status(404).json({ error: "User not found" });
      }

      await createLog(req, "Update User", `Updated user ${updatedUser.email}`);
      await broadcastNotification(req, "المستخدمين", "تعديل", `تم تعديل بيانات المستخدم: ${updatedUser.name}`);
      res.json(updatedUser);
    } catch (err) {
      res.status(500).json({ error: "Failed to update user" });
    }
  });

  app.get("/api/auth/me", authenticateToken, (req: any, res) => {
    res.json({ user: req.user });
  });

  // --- Branch Column Routes ---
  app.get("/api/branch-columns", async (req, res) => {
    try {
      const data = await db.select().from(branchColumns).orderBy(asc(branchColumns.createdAt));
      res.json(data);
    } catch (err) {
      res.status(500).json({ error: "Failed to fetch branch columns" });
    }
  });

  app.post("/api/branch-columns", authenticateToken, authorizeAdmin, async (req, res) => {
    const { name, label } = req.body;
    try {
      const [newCol] = await db.insert(branchColumns).values({ name, label }).returning();
      await createLog(req, "Create Column", `Added dynamic column: ${label} (${name})`);
      await broadcastNotification(req, "إعدادات الفروع", "إضافة", `تم إضافة عمود جديد: ${label}`);
      res.json(newCol);
    } catch (err) {
      console.error("Failed to add column:", err);
      res.status(500).json({ error: "Failed to add column" });
    }
  });

  app.delete("/api/branch-columns/:id", authenticateToken, authorizeAdmin, async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      const colToDelete = await db.select().from(branchColumns).where(eq(branchColumns.id, id)).limit(1);
      await db.delete(branchColumns).where(eq(branchColumns.id, id));
      if (colToDelete.length > 0) {
        await createLog(req, "Delete Column", `Removed dynamic column: ${colToDelete[0].label}`);
        await broadcastNotification(req, "إعدادات الفروع", "حذف", `تم حذف العمود: ${colToDelete[0].label}`);
      }
      res.json({ message: "Column deleted" });
    } catch (err) {
      res.status(500).json({ error: "Failed to delete column" });
    }
  });

  // --- Branch Routes ---
  app.get("/api/branches", async (req, res) => {
    try {
      const data = await db.select().from(branches).orderBy(branches.sortOrder);
      res.json(data);
    } catch (err) {
      res.status(500).json({ error: "Failed to fetch branches" });
    }
  });

  app.put("/api/branches/reorder", authenticateToken, authorizeManager, async (req, res) => {
    const { orders } = req.body; 
    if (!Array.isArray(orders)) {
      return res.status(400).json({ error: "Orders array required" });
    }

    try {
      await db.transaction(async (tx) => {
        for (const { id, sortOrder } of orders) {
          await tx.update(branches)
            .set({ sortOrder })
            .where(eq(branches.id, id));
        }
      });
      res.json({ message: "Reordered successfully" });
    } catch (err) {
      console.error("Failed to reorder branches:", err);
      res.status(500).json({ error: "Failed to reorder branches" });
    }
  });

  app.post("/api/branches", authenticateToken, authorizeManager, async (req, res) => {
    try {
      const { id, createdAt, ...data } = req.body;
      if (data.customData && typeof data.customData === 'object') {
        data.customData = JSON.stringify(data.customData);
      }
      const [newBranch] = await db.insert(branches).values(data).returning();
      await createLog(req, "Create Branch", `Created branch ${newBranch.branchName} for brand ${newBranch.brand}`);
      await broadcastNotification(req, "الفروع", "إضافة", `تم إضافة فرع جديد: ${newBranch.branchName} (${newBranch.brand})`);
      res.json(newBranch);
    } catch (err) {
      console.error("Failed to create branch:", err);
      res.status(500).json({ error: "Failed to create branch" });
    }
  });

  app.put("/api/branches/:id", authenticateToken, authorizeManager, async (req, res) => {
    try {
      const { id, createdAt, ...data } = req.body;
      if (data.customData && typeof data.customData === 'object') {
        data.customData = JSON.stringify(data.customData);
      }
      const [updated] = await db.update(branches)
        .set(data)
        .where(eq(branches.id, parseInt(req.params.id)))
        .returning();
      
      if (!updated) {
        return res.status(404).json({ error: "Branch not found in database" });
      }
      await createLog(req, "Update Branch", `Updated branch ${updated.branchName} (${updated.brand})`);
      await broadcastNotification(req, "الفروع", "تعديل", `تم تحديث بيانات الفرع: ${updated.branchName} (${updated.brand})`);
      res.json(updated);
    } catch (err) {
      console.error("Failed to update branch:", err);
      res.status(500).json({ error: "Failed to update branch" });
    }
  });

  app.delete("/api/branches/:id", authenticateToken, authorizeManager, async (req, res) => {
    try {
      const branchToDelete = await db.select().from(branches).where(eq(branches.id, parseInt(req.params.id))).limit(1);
      await db.delete(branches).where(eq(branches.id, parseInt(req.params.id)));
      if (branchToDelete.length > 0) {
        await createLog(req, "Delete Branch", `Deleted branch ${branchToDelete[0].branchName} of brand ${branchToDelete[0].brand}`);
        await broadcastNotification(req, "الفروع", "حذف", `تم حذف الفرع: ${branchToDelete[0].branchName} (${branchToDelete[0].brand})`);
      }
      res.json({ message: "Branch deleted" });
    } catch (err) {
      res.status(500).json({ error: "Failed to delete branch" });
    }
  });

  // --- Task Routes ---
  app.get("/api/tasks", async (req, res) => {
    try {
      const data = await db.select().from(tasks).orderBy(desc(tasks.createdAt));
      res.json(data);
    } catch (err) {
      res.status(500).json({ error: "Failed to fetch tasks" });
    }
  });

  app.post("/api/tasks", authenticateToken, authorizeManager, async (req, res) => {
    try {
      const [newTask] = await db.insert(tasks).values(req.body).returning();
      await createLog(req, "Create Task", `Created task: ${newTask.branch} (${newTask.brand})`);
      await broadcastNotification(req, "إدارة المهام", "إضافة", `تم إضافة مهمة جديدة: ${newTask.branch} (${newTask.brand})`);
      res.json(newTask);
    } catch (err) {
      res.status(500).json({ error: "Failed to create task" });
    }
  });

  app.put("/api/tasks/:id", authenticateToken, authorizeManager, async (req, res) => {
    try {
      const { id, createdAt, ...data } = req.body;
      const [updated] = await db.update(tasks)
        .set(data)
        .where(eq(tasks.id, parseInt(req.params.id)))
        .returning();
      if (!updated) return res.status(404).json({ error: "Task not found" });
      await createLog(req, "Update Task", `Updated task: ${updated.branch} (${updated.brand})`);
      await broadcastNotification(req, "إدارة المهام", "تعديل", `تم تحديث حالة المهمة: ${updated.branch} (${updated.brand})`);
      res.json(updated);
    } catch (err) {
      res.status(500).json({ error: "Failed to update task" });
    }
  });

  app.delete("/api/tasks/:id", authenticateToken, authorizeManager, async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      const taskToDelete = await db.select().from(tasks).where(eq(tasks.id, id)).limit(1);
      await db.delete(tasks).where(eq(tasks.id, id));
      if (taskToDelete.length > 0) {
        await createLog(req, "Delete Task", `Deleted task: ${taskToDelete[0].branch} (${taskToDelete[0].brand})`);
        await broadcastNotification(req, "إدارة المهام", "حذف", `تم حذف المهمة: ${taskToDelete[0].branch} (${taskToDelete[0].brand})`);
      }
      res.json({ message: "Task deleted" });
    } catch (err) {
      res.status(500).json({ error: "Failed to delete task" });
    }
  });

  // --- Content Overrides Routes ---
  app.get("/api/content-overrides", async (req, res) => {
    try {
      const data = await db.select().from(contentOverrides);
      res.json(data);
    } catch (err) {
      res.status(500).json({ error: "Failed to fetch content overrides" });
    }
  });

  app.post("/api/content-overrides", authenticateToken, authorizeManager, async (req, res) => {
    const { contentKey, content } = req.body;
    console.log(`Attempting to save override for key: ${contentKey}`);
    try {
      const [result] = await db.insert(contentOverrides)
        .values({ contentKey, content })
        .onConflictDoUpdate({
          target: contentOverrides.contentKey,
          set: { content, updatedAt: new Date() }
        })
        .returning();
      console.log(`Successfully saved override for key: ${contentKey}`);
      await createLog(req, "Update Content", `Updated text for key: ${contentKey}`);
      await broadcastNotification(req, "نصوص الموقع", "تعديل", `تم تحديث نص الموقع: ${contentKey}`);
      res.json(result);
    } catch (err: any) {
      console.error("Error saving content override:", err);
      res.status(500).json({ error: `Failed to save content override: ${err.message}` });
    }
  });

  app.delete("/api/content-overrides/:key", authenticateToken, authorizeManager, async (req, res) => {
    try {
      await db.delete(contentOverrides).where(eq(contentOverrides.contentKey, req.params.key));
      await createLog(req, "Delete Content", `Deleted custom text for key: ${req.params.key}`);
      res.json({ message: "Content override deleted" });
    } catch (err: any) {
      console.error("Error deleting content override:", err);
      res.status(500).json({ error: `Failed to delete content override: ${err.message}` });
    }
  });

  // --- Log Routes ---
  app.get("/api/logs", authenticateToken, authorizeAdmin, async (req: any, res: any) => {
    try {
      const { search, limit = "100" } = req.query;
      let query = db.select().from(logs);
      
      const filterConditions = [];
      if (search) {
        const s = `%${search}%`;
        filterConditions.push(
          or(
            ilike(logs.userName, s),
            ilike(logs.action, s),
            ilike(logs.details, s)
          )
        );
      }

      const results = await db.select()
        .from(logs)
        .where(filterConditions.length > 0 ? or(...filterConditions) : undefined)
        .orderBy(desc(logs.createdAt))
        .limit(parseInt(limit as string));
        
      res.json(results);
    } catch (err) {
      console.error("Failed to fetch logs:", err);
      res.status(500).json({ error: "Failed to fetch logs" });
    }
  });

  // --- Request Routes ---
  app.post("/api/requests", authenticateToken, async (req: any, res: any) => {
    try {
      const { title, details } = req.body;
      if (!title || !details) {
        return res.status(400).json({ error: "Title and details are required" });
      }

      const [newRequest] = await db.insert(requests).values({
        userId: req.user.id,
        userName: req.user.name || req.user.email || "Unknown User",
        title,
        details,
        status: 'pending'
      }).returning();

      await createLog(req, "Create Request", `User created a new request: ${title}`);
      res.json(newRequest);
    } catch (err) {
      console.error("Failed to create request:", err);
      res.status(500).json({ error: "Failed to create request" });
    }
  });

  app.get("/api/requests", authenticateToken, async (req: any, res: any) => {
    try {
      // Only leaders and admins can see all requests
      // Employees can only see their own (optional, but requested for leader dashboard)
      const userRole = req.user.role;
      let query = db.select().from(requests);

      if (userRole !== 'admin' && userRole !== 'leader') {
        // Normally employees wouldn't fetch all, but let's keep it secure
        // Based on req: "يتم توجيهه تلقائيًا إلى صفحة General Dashboard الخاصة بالمستخدم من نوع Leader"
        // So leaders definitely need it.
        return res.status(403).json({ error: "Access denied" });
      }

      const results = await db.select()
        .from(requests)
        .orderBy(desc(requests.createdAt));
        
      res.json(results);
    } catch (err) {
      console.error("Failed to fetch requests:", err);
      res.status(500).json({ error: "Failed to fetch requests" });
    }
  });

  app.patch("/api/requests/:id", authenticateToken, async (req: any, res: any) => {
    try {
      const { status } = req.body;
      const userRole = req.user.role;

      if (userRole !== 'admin' && userRole !== 'leader') {
        return res.status(403).json({ error: "Access denied" });
      }

      const [updated] = await db.update(requests)
        .set({ status })
        .where(eq(requests.id, parseInt(req.params.id)))
        .returning();

      await createLog(req, "Update Request Status", `Request ${updated.id} status updated to ${status}`);
      await broadcastNotification(req, "طلبات القائد", "تعديل", `تم ${status === 'approved' ? 'قبول' : 'رفض'} الطلب: ${updated.title}`);
      res.json(updated);
    } catch (err) {
      console.error("Failed to update request:", err);
      res.status(500).json({ error: "Failed to update request" });
    }
  });

  // --- Custom Cards Routes ---
  app.get("/api/custom-cards", authenticateToken, async (req, res) => {
    try {
      const data = await db.select().from(customCards).orderBy(desc(customCards.createdAt));
      // Parse points if it exists
      const parsedData = data.map(card => ({
        ...card,
        points: card.points ? JSON.parse(card.points) : []
      }));
      res.json(parsedData);
    } catch (err) {
      res.status(500).json({ error: "Failed to fetch custom cards" });
    }
  });

  app.post("/api/custom-cards", authenticateToken, authorizeAdmin, async (req, res) => {
    try {
      const { title, content, points, page, color, isVisible } = req.body;
      const [newCard] = await db.insert(customCards).values({
        title,
        content,
        points: points ? JSON.stringify(points) : null,
        page,
        color: color || 'blue',
        isVisible: isVisible !== undefined ? isVisible : true
      }).returning();
      await createLog(req, "Create Custom Card", `Created card "${title}" for page ${page}`);
      await broadcastNotification(req, "البطاقات المخصصة", "إضافة", `تم إضافة بطاقة جديدة: "${title}"`);
      res.json({
        ...newCard,
        points: newCard.points ? JSON.parse(newCard.points) : []
      });
    } catch (err) {
      res.status(500).json({ error: "Failed to create custom card" });
    }
  });

  app.put("/api/custom-cards/:id", authenticateToken, authorizeAdmin, async (req, res) => {
    try {
      const { title, content, points, page, color, isVisible } = req.body;
      const [updated] = await db.update(customCards)
        .set({ 
          title, 
          content, 
          points: points ? JSON.stringify(points) : null,
          page, 
          color, 
          isVisible 
        })
        .where(eq(customCards.id, parseInt(req.params.id)))
        .returning();
      await createLog(req, "Update Custom Card", `Updated card "${title}"`);
      await broadcastNotification(req, "البطاقات المخصصة", "تعديل", `تم تحديث البطاقة: "${title}"`);
      res.json({
        ...updated,
        points: updated.points ? JSON.parse(updated.points) : []
      });
    } catch (err) {
      res.status(500).json({ error: "Failed to update custom card" });
    }
  });

  app.delete("/api/custom-cards/:id", authenticateToken, authorizeAdmin, async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      if (isNaN(id)) {
        return res.status(400).json({ error: "Invalid card ID" });
      }
      const cardToDelete = await db.select().from(customCards).where(eq(customCards.id, id)).limit(1);
      if (cardToDelete.length === 0) {
        return res.status(404).json({ error: "Card not found" });
      }
      await db.delete(customCards).where(eq(customCards.id, id));
      await createLog(req, "Delete Custom Card", `Deleted card "${cardToDelete[0].title}"`);
      await broadcastNotification(req, "البطاقات المخصصة", "حذف", `تم حذف البطاقة "${cardToDelete[0].title}"`);
      res.json({ message: "Custom card deleted" });
    } catch (err: any) {
      console.error("Delete Card Error:", err);
      res.status(500).json({ error: "Failed to delete custom card: " + err.message });
    }
  });

  // --- Notification Routes ---
  app.get("/api/notifications", authenticateToken, async (req: any, res) => {
    try {
      const allNotifs = await db.select().from(notifications).orderBy(desc(notifications.createdAt)).limit(50);
      
      // Get read status for this user
      const userRead = await db.select().from(userNotifications).where(and(eq(userNotifications.userId, req.user.id), eq(userNotifications.isRead, true)));
      const readIds = new Set(userRead.map(un => un.notificationId));

      const results = allNotifs.map(n => ({
        ...n,
        isRead: readIds.has(n.id)
      }));

      res.json(results);
    } catch (err) {
      console.error("Failed to fetch notifications:", err);
      res.status(500).json({ error: "Failed to fetch notifications" });
    }
  });

  app.post("/api/notifications/mark-read", authenticateToken, async (req: any, res) => {
    const { notificationId } = req.body;
    try {
      if (notificationId) {
        await db.insert(userNotifications).values({
          userId: req.user.id,
          notificationId,
          isRead: true
        }).onConflictDoUpdate({
          target: [userNotifications.userId, userNotifications.notificationId],
          set: { isRead: true }
        });
      } else {
        // Mark all as read for this user
        const allNotifs = await db.select({ id: notifications.id }).from(notifications);
        for (const n of allNotifs) {
          await db.insert(userNotifications).values({
            userId: req.user.id,
            notificationId: n.id,
            isRead: true
          }).onConflictDoUpdate({
            target: [userNotifications.userId, userNotifications.notificationId],
            set: { isRead: true }
          });
        }
      }
      res.json({ message: "Marked as read successfully" });
    } catch (err) {
      console.error("Failed to mark notifications as read:", err);
      res.status(500).json({ error: "Failed to mark notifications as read" });
    }
  });

  // --- Offer Routes ---
  app.get("/api/offers", authenticateToken, async (req, res) => {
    try {
      const allOffers = await db.select().from(offers).orderBy(desc(offers.createdAt));
      res.json(allOffers);
    } catch (err) {
      res.status(500).json({ error: "Failed to fetch offers" });
    }
  });

  app.post("/api/offers", authenticateToken, authorizeManager, async (req, res) => {
    try {
      const { brand, title, description, price, startDate, endDate, imageUrl, aggregators } = req.body;
      const [newOffer] = await db.insert(offers).values({
        brand,
        title,
        description,
        price,
        imageUrl,
        aggregators,
        startDate: startDate ? new Date(startDate) : null,
        endDate: endDate ? new Date(endDate) : null
      }).returning();

      await createLog(req, "Create Offer", `Created offer "${title}" for brand ${brand}`);
      await broadcastNotification(req, "العروض", "إضافة", `تم إضافة عرض جديد: "${title}" ماركة ${brand}`);
      res.json(newOffer);
    } catch (err) {
      console.error("Failed to create offer:", err);
      res.status(500).json({ error: "Failed to create offer" });
    }
  });

  app.put("/api/offers/:id", authenticateToken, authorizeManager, async (req, res) => {
    try {
      const { brand, title, description, price, startDate, endDate, imageUrl, aggregators } = req.body;
      const [updated] = await db.update(offers)
        .set({
          brand,
          title,
          description,
          price,
          imageUrl,
          aggregators,
          startDate: startDate ? new Date(startDate) : null,
          endDate: endDate ? new Date(endDate) : null
        })
        .where(eq(offers.id, parseInt(req.params.id)))
        .returning();

      if (!updated) return res.status(404).json({ error: "Offer not found" });

      await createLog(req, "Update Offer", `Updated offer "${title}"`);
      await broadcastNotification(req, "العروض", "تعديل", `تم تحديث العرض: "${title}"`);
      res.json(updated);
    } catch (err) {
      res.status(500).json({ error: "Failed to update offer" });
    }
  });

  app.delete("/api/offers/:id", authenticateToken, authorizeManager, async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      const offerToDelete = await db.select().from(offers).where(eq(offers.id, id)).limit(1);
      if (offerToDelete.length === 0) return res.status(404).json({ error: "Offer not found" });

      await db.delete(offers).where(eq(offers.id, id));
      await createLog(req, "Delete Offer", `Deleted offer "${offerToDelete[0].title}"`);
      await broadcastNotification(req, "العروض", "حذف", `تم حذف العرض: "${offerToDelete[0].title}"`);
      res.json({ message: "Offer deleted" });
    } catch (err) {
      res.status(500).json({ error: "Failed to delete offer" });
    }
  });

  // API 404 handler
  app.all("/api/*", (req, res) => {
    res.status(404).json({ error: `Route not found: ${req.method} ${req.path}` });
  });

  // Vite middleware for production/dev
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  // Global error handler
  app.use((err: any, req: Request, res: Response, next: NextFunction) => {
    console.error("Unhandled Server Error:", err);
    res.status(500).json({ error: "Internal Server Error", message: err.message });
  });

  httpServer.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
