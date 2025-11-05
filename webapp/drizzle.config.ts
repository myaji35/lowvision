import { defineConfig } from 'drizzle-kit';

// Use SQLite for local development, PostgreSQL for production
const isProduction = process.env.NODE_ENV === 'production';
const usePostgres = process.env.USE_POSTGRES === 'true' || isProduction;

export default defineConfig({
  schema: './src/db/schema.ts',
  out: './drizzle',
  dialect: usePostgres ? 'postgresql' : 'sqlite',
  dbCredentials: usePostgres
    ? {
        url: process.env.DATABASE_URL!,
      }
    : {
        url: process.env.DATABASE_URL || './local.db',
      },
});
