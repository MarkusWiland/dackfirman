CREATE TABLE IF NOT EXISTS "cars" (
	"id" text PRIMARY KEY NOT NULL,
	"bilmarke" text NOT NULL,
	"bultcirkel" numeric NOT NULL,
	"antal_bultar" numeric NOT NULL,
	"diameter" numeric NOT NULL,
	"dackbredd" numeric NOT NULL,
	"dacktyp" text NOT NULL,
	"falgbredd" numeric NOT NULL,
	"lan" text NOT NULL
);
--> statement-breakpoint
ALTER TABLE "users" ALTER COLUMN "age" DROP NOT NULL;