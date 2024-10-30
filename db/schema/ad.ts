import { integer, pgTable, text, timestamp, varchar } from "drizzle-orm/pg-core";
import users from "./users";
import { relations } from "drizzle-orm";


const Ad = pgTable('Ad', {
  id: text("id").primaryKey().$defaultFn(() => crypto.randomUUID()),  // Added primaryKey()
  userId: text("user_id").notNull().references(() => users.id),  // Now references integer id
  title: text("title").notNull(),
  content: text("content").notNull(),
  location: text("location").notNull(),
  publishedAt: timestamp("published_at",{mode: "date"}).defaultNow(),
  images: text("images").array(),
});
export const adRelations = relations(Ad, ({ one }) => ({
  user: one(users, {
    fields: [Ad.userId],
    references: [users.id],
  }),
}));

export default Ad;