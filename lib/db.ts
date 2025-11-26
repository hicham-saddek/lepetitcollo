import Database from 'better-sqlite3';
import { join } from 'path';
import { existsSync, mkdirSync } from 'fs';

const dbDir = join(process.cwd(), 'data');
const dbPath = join(dbDir, 'admin.db');

// Ensure data directory exists (creates it if it doesn't)
if (!existsSync(dbDir)) {
  mkdirSync(dbDir, { recursive: true });
}

let db: Database.Database | null = null;

export function getDb(): Database.Database {
  if (db) {
    return db;
  }

  try {
    // better-sqlite3 automatically creates the database file if it doesn't exist
    // The file will be created in the 'data' directory
    db = new Database(dbPath);
    
    // Enable foreign keys
    db.pragma('foreign_keys = ON');

    // Create users table if it doesn't exist
    db.exec(`
      CREATE TABLE IF NOT EXISTS users (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        username TEXT UNIQUE NOT NULL,
        password_hash TEXT NOT NULL,
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP
      )
    `);
  } catch (error) {
    console.error('Error initializing database:', error);
    throw new Error('Failed to initialize database');
  }

  return db;
}

export function closeDb() {
  if (db) {
    db.close();
    db = null;
  }
}

