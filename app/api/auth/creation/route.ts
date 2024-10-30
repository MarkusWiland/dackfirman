import db from "@/db";
import { users } from "@/db/schema";
import { auth, currentUser } from "@clerk/nextjs/server";
import { eq } from "drizzle-orm";
import { NextResponse } from "next/server";

export async function GET() {
  const { userId } = await auth();
  if (!userId) {
    return new NextResponse("Unauthorized", { status: 401 });
  }

  const user = await currentUser();
  if (!user) {
    return new NextResponse("User does not exist", { status: 404 });
  }

  // Kontrollera om användaren redan finns i databasen
  let dbUser = await db.select().from(users).where(eq(users.id, userId));

  if (dbUser.length === 0) {
    // Om användaren inte finns, lägg till användaren
    await db.insert(users).values({
      id: userId,
      name: user.firstName ?? "",
      age: null,
      email: user.emailAddresses[0]?.emailAddress, // Första e-postadressen
      image: user.imageUrl || null, // Gör image valfritt
    });
  }

  // Omdirigera till startsidan
  return NextResponse.redirect("http://localhost:3000");
}
