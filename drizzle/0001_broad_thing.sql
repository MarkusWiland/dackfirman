ALTER TABLE "Ad" RENAME COLUMN "userId" TO "user_id";--> statement-breakpoint
ALTER TABLE "Ad" RENAME COLUMN "publishedAt" TO "published_at";--> statement-breakpoint
ALTER TABLE "Ad" DROP CONSTRAINT "Ad_userId_users_id_fk";
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "Ad" ADD CONSTRAINT "Ad_user_id_users_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."users"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
