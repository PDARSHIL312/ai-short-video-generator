// drizzle.config.ts
import { defineConfig } from "drizzle-kit";

export default defineConfig({
  schema: "./configus/schema.js",
  out: "./drizzle",
  dialect: "postgresql",
  dbCredentials: {
    url: "postgresql://neondb_owner:npg_kNDs7uGA5FOd@ep-super-thunder-abjznjam-pooler.eu-west-2.aws.neon.tech/neondb?sslmode=require",
  },
  migrations: {
    prefix: "timestamp", // 20250518_123456_<name>.sql  (default)
    table: "__drizzle_migrations__", // bookkeeping table in DB (default)
    schema: "public", // which schema to store that table in
  },
  strict: true, // extra config validation (helpful in CI)
  verbose: true, // chatty logs so you see what’s happening
});
