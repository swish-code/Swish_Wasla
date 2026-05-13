import { drizzle as drizzlePglite } from 'drizzle-orm/pglite';
import { drizzle as drizzleNode } from 'drizzle-orm/node-postgres';
import { PGlite } from '@electric-sql/pglite';
import pg from 'pg';
import * as schema from './schema.ts';

const DATABASE_URL = process.env.DATABASE_URL;

let dbInstance: any;
let client: any;

if (DATABASE_URL) {
  const maskedUrl = DATABASE_URL.replace(/:[^:]+@/, ':****@');
  console.log(`Connecting to external Postgres via DATABASE_URL: ${maskedUrl}`);
  client = new pg.Pool({
    connectionString: DATABASE_URL,
    ssl: DATABASE_URL.includes("localhost") || DATABASE_URL.includes("127.0.0.1") ? false : { rejectUnauthorized: false }
  });
  dbInstance = drizzleNode(client, { schema });
} else {
  console.log("Using local PGlite (Note: Data will be lost on deployment)...");
  client = new PGlite('./pgdata');
  dbInstance = drizzlePglite(client, { schema });
}

export const db = dbInstance;

// Initial tables setup
let setupStarted = false;
export const setupDb = async () => {
  if (setupStarted) return;
  setupStarted = true;
  
  console.log("Starting database setup...");
  try {
    const exec = async (sql: string) => {
      try {
        if (DATABASE_URL) {
          return await client.query(sql);
        } else {
          return await client.exec(sql);
        }
      } catch (err: any) {
        // Ignore "already exists" errors during concurrent setups
        if (err.message && (err.message.includes("already exists") || err.message.includes("duplicate"))) {
          return;
        }
        throw err;
      }
    };

    const query = async (sql: string) => {
      if (DATABASE_URL) {
        return await client.query(sql);
      } else {
        return await client.query(sql);
      }
    };

    // Simple migrations
    await exec(`
      DO $$ 
      BEGIN 
        IF NOT EXISTS (SELECT 1 FROM pg_type WHERE typname = 'user_role') THEN 
          CREATE TYPE user_role AS ENUM ('admin', 'manager', 'leader', 'employee');
        END IF;

        IF EXISTS (SELECT 1 FROM pg_type WHERE typname = 'user_role') THEN
          IF NOT EXISTS (SELECT 1 FROM pg_enum e JOIN pg_type t ON e.enumtypid = t.oid WHERE t.typname = 'user_role' AND e.enumlabel = 'manager') THEN
             ALTER TYPE user_role ADD VALUE 'manager';
          END IF;
          IF NOT EXISTS (SELECT 1 FROM pg_enum e JOIN pg_type t ON e.enumtypid = t.oid WHERE t.typname = 'user_role' AND e.enumlabel = 'leader') THEN
             ALTER TYPE user_role ADD VALUE 'leader';
          END IF;
        END IF;
      EXCEPTION
        WHEN duplicate_object THEN null;
      END $$;
      
      CREATE TABLE IF NOT EXISTS users (
        id SERIAL PRIMARY KEY,
        email TEXT NOT NULL UNIQUE,
        password TEXT NOT NULL,
        name TEXT NOT NULL,
        role user_role DEFAULT 'employee' NOT NULL,
        created_at TIMESTAMP DEFAULT NOW() NOT NULL
      );

      CREATE TABLE IF NOT EXISTS branches (
        id SERIAL PRIMARY KEY,
        brand TEXT NOT NULL,
        branch_name TEXT NOT NULL,
        address TEXT NOT NULL,
        delivery TEXT,
        pickup TEXT,
        dine_in TEXT,
        working_hours TEXT,
        weekend_working_hours TEXT,
        tgo TEXT,
        tmp TEXT,
        deliveroo TEXT,
        car TEXT,
        vthru TEXT,
        website TEXT,
        cari TEXT,
        jahez TEXT,
        call_center TEXT,
        keeta TEXT,
        last_order_delivery TEXT,
        last_order_pickup TEXT,
        sort_order INTEGER DEFAULT 0,
        custom_data TEXT,
        created_at TIMESTAMP DEFAULT NOW() NOT NULL
      );

      CREATE TABLE IF NOT EXISTS custom_cards (
        id SERIAL PRIMARY KEY,
        title TEXT NOT NULL,
        content TEXT NOT NULL,
        page TEXT NOT NULL,
        color TEXT DEFAULT 'blue' NOT NULL,
        is_visible BOOLEAN DEFAULT true NOT NULL,
        created_at TIMESTAMP DEFAULT NOW() NOT NULL
      );

      CREATE TABLE IF NOT EXISTS branch_columns (
        id SERIAL PRIMARY KEY,
        name TEXT NOT NULL UNIQUE,
        label TEXT NOT NULL,
        created_at TIMESTAMP DEFAULT NOW() NOT NULL
      );

      CREATE TABLE IF NOT EXISTS tasks (
        id SERIAL PRIMARY KEY,
        status TEXT NOT NULL,
        brand TEXT NOT NULL,
        branch TEXT NOT NULL,
        location TEXT NOT NULL,
        created_at TIMESTAMP DEFAULT NOW() NOT NULL
      );

      CREATE TABLE IF NOT EXISTS content_overrides (
        id SERIAL PRIMARY KEY,
        content_key TEXT NOT NULL UNIQUE,
        content TEXT NOT NULL,
        updated_at TIMESTAMP DEFAULT NOW() NOT NULL
      );

      CREATE TABLE IF NOT EXISTS logs (
        id SERIAL PRIMARY KEY,
        user_id INTEGER REFERENCES users(id),
        user_name TEXT,
        action TEXT NOT NULL,
        details TEXT,
        created_at TIMESTAMP DEFAULT NOW() NOT NULL
      );

      CREATE TABLE IF NOT EXISTS requests (
        id SERIAL PRIMARY KEY,
        user_id INTEGER NOT NULL REFERENCES users(id),
        user_name TEXT NOT NULL,
        title TEXT NOT NULL,
        details TEXT NOT NULL,
        status TEXT NOT NULL DEFAULT 'pending',
        created_at TIMESTAMP DEFAULT NOW() NOT NULL
      );

      CREATE TABLE IF NOT EXISTS notifications (
        id SERIAL PRIMARY KEY,
        sender_name TEXT NOT NULL,
        action_type TEXT NOT NULL,
        section TEXT NOT NULL,
        details TEXT,
        created_at TIMESTAMP DEFAULT NOW() NOT NULL
      );

      CREATE TABLE IF NOT EXISTS user_notifications (
        id SERIAL PRIMARY KEY,
        user_id INTEGER NOT NULL REFERENCES users(id),
        notification_id INTEGER NOT NULL REFERENCES notifications(id),
        is_read BOOLEAN DEFAULT false NOT NULL,
        UNIQUE(user_id, notification_id)
      );

      CREATE TABLE IF NOT EXISTS offers (
        id SERIAL PRIMARY KEY,
        brand TEXT NOT NULL,
        title TEXT NOT NULL,
        description TEXT NOT NULL,
        price TEXT NOT NULL,
        image_url TEXT,
        aggregators TEXT,
        start_date TIMESTAMP,
        end_date TIMESTAMP,
        created_at TIMESTAMP DEFAULT NOW() NOT NULL
      );

      DO $$ 
      BEGIN 
        IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name='offers' AND column_name='image_url') THEN
          ALTER TABLE offers ADD COLUMN image_url TEXT;
        END IF;
        IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name='offers' AND column_name='aggregators') THEN
          ALTER TABLE offers ADD COLUMN aggregators TEXT;
        END IF;
      END $$;
    `);

    // Seed default admin ONLY if no users exist
    const userCountResult = await query(`SELECT COUNT(*) as count FROM users`);
    const count = parseInt(DATABASE_URL ? userCountResult.rows[0].count : userCountResult.rows[0].count);
    
    if (count === 0) {
      console.log("No users found. Creating default admin...");
      const bcrypt = await import('bcryptjs');
      const hashedPassword = await bcrypt.default.hash('admin', 10);
      await exec(`
        INSERT INTO users (email, password, name, role)
        VALUES ('admin@wasla.com', '${hashedPassword}', 'System Admin', 'admin')
      `);
      console.log("Default admin account created: admin@wasla.com / admin");
    } else {
      console.log(`Verified ${count} existing users in database.`);
    }
    console.log("Database setup completed successfully.");
  } catch (error) {
    console.error("Database setup failed:", error);
    throw error; // Re-throw so server knows it failed
  }
};

// setup(); removed - called from server.ts
