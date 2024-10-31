import db from "@/db";
import { users } from "@/db/schema";
import { auth, currentUser } from "@clerk/nextjs/server";

import { eq } from "drizzle-orm";
import { NextResponse } from "next/server";

export async function GET() {
 // const { getUser } = await getKindeServerSession();
//  const user = await getUser();
  const {userId} = await auth();
  const user = await currentUser();
  if ( !userId) {
    throw new Error("Something went wrong");
  }

  // Kontrollera om användaren redan finns i databasen
  const dbUser = await db.select().from(users).where(eq(users.id, userId));

  if (dbUser.length === 0) { // Om användaren inte finns
   await db.insert(users).values({
      id: userId,
      name: user?.firstName ?? "",
      age: null,
      email: user?.emailAddresses[0].emailAddress ?? "",
      image: user?.imageUrl ?? "",
    });

   
  }

  return NextResponse.redirect("http://localhost:3000");
}
