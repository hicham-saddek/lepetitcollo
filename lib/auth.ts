import bcrypt from 'bcryptjs';
import { getDb } from './db';
import { cookies } from 'next/headers';

export interface User {
  id: number;
  username: string;
  password_hash: string;
}

const SESSION_COOKIE_NAME = 'admin_session';
const SESSION_SECRET = process.env.SESSION_SECRET || 'change-this-secret-in-production';

// Hash password
export async function hashPassword(password: string): Promise<string> {
  return bcrypt.hash(password, 10);
}

// Verify password
export async function verifyPassword(password: string, hash: string): Promise<boolean> {
  return bcrypt.compare(password, hash);
}

// Create user
export async function createUser(username: string, password: string): Promise<User> {
  const db = getDb();
  const passwordHash = await hashPassword(password);
  
  const stmt = db.prepare('INSERT INTO users (username, password_hash) VALUES (?, ?)');
  const result = stmt.run(username, passwordHash);
  
  return {
    id: Number(result.lastInsertRowid),
    username,
    password_hash: passwordHash,
  };
}

// Find user by username
export function findUserByUsername(username: string): User | null {
  const db = getDb();
  const stmt = db.prepare('SELECT * FROM users WHERE username = ?');
  const user = stmt.get(username) as User | undefined;
  
  return user || null;
}

// Authenticate user
export async function authenticateUser(username: string, password: string): Promise<User | null> {
  const user = findUserByUsername(username);
  
  if (!user) {
    return null;
  }
  
  const isValid = await verifyPassword(password, user.password_hash);
  
  if (!isValid) {
    return null;
  }
  
  return user;
}

// Create session
export async function createSession(userId: number): Promise<string> {
  // Simple session: userId + timestamp + secret hash
  const timestamp = Date.now();
  const sessionData = `${userId}:${timestamp}`;
  // In production, use a proper session store or JWT
  return Buffer.from(sessionData).toString('base64');
}

// Verify session
export function verifySession(sessionToken: string): number | null {
  try {
    const sessionData = Buffer.from(sessionToken, 'base64').toString();
    const [userId] = sessionData.split(':');
    return parseInt(userId, 10) || null;
  } catch {
    return null;
  }
}

// Get current user from session
export async function getCurrentUser(): Promise<User | null> {
  const cookieStore = await cookies();
  const sessionToken = cookieStore.get(SESSION_COOKIE_NAME)?.value;
  
  if (!sessionToken) {
    return null;
  }
  
  const userId = verifySession(sessionToken);
  
  if (!userId) {
    return null;
  }
  
  const db = getDb();
  const stmt = db.prepare('SELECT * FROM users WHERE id = ?');
  const user = stmt.get(userId) as User | undefined;
  
  return user || null;
}

// Set session cookie
export async function setSessionCookie(sessionToken: string) {
  const cookieStore = await cookies();
  cookieStore.set(SESSION_COOKIE_NAME, sessionToken, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    maxAge: 60 * 60 * 24 * 7, // 7 days
  });
}

// Clear session cookie
export async function clearSessionCookie() {
  const cookieStore = await cookies();
  cookieStore.delete(SESSION_COOKIE_NAME);
}

