// db/schema/cars.ts

import { pgTable, text, numeric } from "drizzle-orm/pg-core";

// Definiera schema för carsTable
 const carsTable = pgTable("cars", {
  id: text("id").primaryKey().$defaultFn(() => crypto.randomUUID()),
  bilmarke: text("bilmarke").notNull(),      // Bilmärke, t.ex. "BMW"
  bultcirkel: numeric("bultcirkel").notNull(), // Bultcirkel, t.ex. "112"
  antalBultar: numeric("antal_bultar").notNull(), // Antal bultar, t.ex. "5"
  diameter: numeric("diameter").notNull(),     // Diameter på fälg, t.ex. "17"
  dackbredd: numeric("dackbredd").notNull(),   // Däckbredd, t.ex. "205"
  dacktyp: text("dacktyp").notNull(),          // Däcktyp, t.ex. "Sommar"
  falgbredd: numeric("falgbredd").notNull(),   // Fälgbredd, t.ex. "7.5"
  lan: text("lan").notNull()                   // Län, t.ex. "Stockholm"
});
export default carsTable;