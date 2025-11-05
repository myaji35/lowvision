import { drizzle as drizzleSQLite } from 'drizzle-orm/better-sqlite3';
import { drizzle as drizzlePostgres } from 'drizzle-orm/postgres-js';
import Database from 'better-sqlite3';
import postgres from 'postgres';
import * as schema from './schema';

// Determine which database to use
const isProduction = process.env.NODE_ENV === 'production';
const usePostgres = process.env.USE_POSTGRES === 'true' || isProduction;

// Export database client based on environment
export const db = usePostgres
  ? (() => {
      // PostgreSQL for production
      const connectionString = process.env.DATABASE_URL;

      if (!connectionString) {
        throw new Error('DATABASE_URL is required for PostgreSQL connection');
      }

      const client = postgres(connectionString);
      return drizzlePostgres(client, { schema });
    })()
  : (() => {
      // SQLite for local development
      const dbPath = process.env.DATABASE_URL || './local.db';
      const sqlite = new Database(dbPath);

      // Enable foreign keys for SQLite
      sqlite.pragma('foreign_keys = ON');

      return drizzleSQLite(sqlite, { schema });
    })();

// Export type for use in API routes
export type Database = typeof db;
