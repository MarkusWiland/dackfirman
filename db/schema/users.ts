import { relations } from "drizzle-orm";
import { integer, pgTable, text, varchar } from "drizzle-orm/pg-core";
import Ad from "./ad";

const users = pgTable("users", {
  id: text("id").primaryKey().$defaultFn(() => crypto.randomUUID()),  // Changed to integer to match Ad's foreign key
  name: varchar("name",{ length: 255 }).notNull(),
  age: integer("age"),
  email: varchar("email",{ length: 255 }).notNull().unique(),
  image: text("image"),
});
export const usersRelations = relations(users, ({ many }) => ({
  ads: many(Ad)
}));
export default users;