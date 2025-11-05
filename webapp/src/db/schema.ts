import { sqliteTable, text, integer } from 'drizzle-orm/sqlite-core';

// Content pages table
export const pages = sqliteTable('pages', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  slug: text('slug').notNull().unique(),
  title: text('title').notNull(),
  content: text('content').notNull(),
  category: text('category').notNull(), // 'diagnosis', 'adaptation', 'daily-life', 'rights', 'community'
  metaDescription: text('meta_description'),
  createdAt: integer('created_at', { mode: 'timestamp' }).notNull(),
  updatedAt: integer('updated_at', { mode: 'timestamp' }).notNull(),
});

// Assistive technology products
export const assistiveTech = sqliteTable('assistive_tech', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  name: text('name').notNull(),
  category: text('category').notNull(), // 'smart-glasses', 'wearable', 'smart-cane', etc.
  description: text('description').notNull(),
  features: text('features').notNull(), // JSON string
  imageUrl: text('image_url'),
  externalLink: text('external_link'),
  createdAt: integer('created_at', { mode: 'timestamp' }).notNull(),
  updatedAt: integer('updated_at', { mode: 'timestamp' }).notNull(),
});

// Welfare benefits information
export const welfareBenefits = sqliteTable('welfare_benefits', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  name: text('name').notNull(),
  category: text('category').notNull(), // 'daily-support', 'child-support', 'legal-advocacy'
  description: text('description').notNull(),
  eligibility: text('eligibility').notNull(),
  howToApply: text('how_to_apply').notNull(),
  relatedLinks: text('related_links'), // JSON string
  lastUpdated: integer('last_updated', { mode: 'timestamp' }).notNull(),
  createdAt: integer('created_at', { mode: 'timestamp' }).notNull(),
});

// Resources and downloads
export const resources = sqliteTable('resources', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  title: text('title').notNull(),
  description: text('description'),
  fileUrl: text('file_url'),
  fileType: text('file_type'), // 'pdf', 'doc', 'video', etc.
  category: text('category').notNull(),
  downloadCount: integer('download_count').default(0),
  createdAt: integer('created_at', { mode: 'timestamp' }).notNull(),
});
