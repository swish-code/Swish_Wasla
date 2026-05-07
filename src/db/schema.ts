import { pgTable, serial, text, timestamp, boolean, pgEnum, integer, unique } from 'drizzle-orm/pg-core';

export const userRoleEnum = pgEnum('user_role', ['admin', 'leader', 'manager', 'employee']);

export const users = pgTable('users', {
  id: serial('id').primaryKey(),
  email: text('email').notNull().unique(),
  password: text('password').notNull(),
  name: text('name').notNull(),
  role: userRoleEnum('role').default('employee').notNull(),
  createdAt: timestamp('created_at').defaultNow().notNull(),
});

export const branches = pgTable('branches', {
  id: serial('id').primaryKey(),
  brand: text('brand').notNull(),
  branchName: text('branch_name').notNull(),
  address: text('address').notNull(),
  delivery: text('delivery'),
  pickup: text('pickup'),
  dineIn: text('dine_in'),
  workingHours: text('working_hours'),
  weekendWorkingHours: text('weekend_working_hours'),
  tgo: text('tgo'),
  tmp: text('tmp'),
  deliveroo: text('deliveroo'),
  car: text('car'),
  vthru: text('vthru'),
  website: text('website'),
  cari: text('cari'),
  jahez: text('jahez'),
  callCenter: text('call_center'),
  keeta: text('keeta'),
  lastOrderDelivery: text('last_order_delivery'),
  lastOrderPickup: text('last_order_pickup'),
  customData: text('custom_data'), // Store as JSON string since PGlite JSONB can be tricky with some drivers, or just use text
  sortOrder: integer('sort_order').default(0),
  createdAt: timestamp('created_at').defaultNow().notNull(),
});

export const branchColumns = pgTable('branch_columns', {
  id: serial('id').primaryKey(),
  name: text('name').notNull().unique(), // kebab-case or snake_case key
  label: text('label').notNull(), // Display name
  createdAt: timestamp('created_at').defaultNow().notNull(),
});

// You can add more tables as needed for other data (allergens, tasks, etc.)
export const tasks = pgTable('tasks', {
  id: serial('id').primaryKey(),
  status: text('status').notNull(),
  brand: text('brand').notNull(),
  branch: text('branch').notNull(),
  location: text('location').notNull(),
  createdAt: timestamp('created_at').defaultNow().notNull(),
});

export const contentOverrides = pgTable('content_overrides', {
  id: serial('id').primaryKey(),
  contentKey: text('content_key').notNull().unique(),
  content: text('content').notNull(),
  updatedAt: timestamp('updated_at').defaultNow().notNull(),
});

export const logs = pgTable('logs', {
  id: serial('id').primaryKey(),
  userId: integer('user_id').references(() => users.id),
  userName: text('user_name'),
  action: text('action').notNull(),
  details: text('details'),
  createdAt: timestamp('created_at').defaultNow().notNull(),
});

export const requests = pgTable('requests', {
  id: serial('id').primaryKey(),
  userId: integer('user_id').references(() => users.id).notNull(),
  userName: text('user_name').notNull(),
  title: text('title').notNull(),
  details: text('details').notNull(),
  status: text('status').default('pending').notNull(), // pending, approved, rejected
  createdAt: timestamp('created_at').defaultNow().notNull(),
});

export const customCards = pgTable('custom_cards', {
  id: serial('id').primaryKey(),
  title: text('title').notNull(),
  content: text('content').notNull(),
  page: text('page').notNull(), // The view name where it should appear
  color: text('color').default('blue').notNull(), // blue, green, purple, yellow, red
  isVisible: boolean('is_visible').default(true).notNull(),
  createdAt: timestamp('created_at').defaultNow().notNull(),
});

export const notifications = pgTable('notifications', {
  id: serial('id').primaryKey(),
  senderName: text('sender_name').notNull(),
  actionType: text('action_type').notNull(), // إضافة, تعديل, حذف, تحديث
  section: text('section').notNull(),
  details: text('details'),
  createdAt: timestamp('created_at').defaultNow().notNull(),
});

export const userNotifications = pgTable('user_notifications', {
  id: serial('id').primaryKey(),
  userId: integer('user_id').references(() => users.id).notNull(),
  notificationId: integer('notification_id').references(() => notifications.id).notNull(),
  isRead: boolean('is_read').default(false).notNull(),
}, (t) => ({
  unq: unique().on(t.userId, t.notificationId)
}));

export type Log = typeof logs.$inferSelect;
export type NewLog = typeof logs.$inferInsert;
export type Request = typeof requests.$inferSelect;
export type NewRequest = typeof requests.$inferInsert;
export type CustomCard = typeof customCards.$inferSelect;
export type NewCustomCard = typeof customCards.$inferInsert;
export type Notification = typeof notifications.$inferSelect;
export type NewNotification = typeof notifications.$inferInsert;
export type UserNotification = typeof userNotifications.$inferSelect;
