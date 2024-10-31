import db from "@/db"
import { users } from "@/db/schema"
interface User {
  userId: string;
  name: string | null;
  age: number | null;
  image: string;
  email: string;
}

export async function createUser(user: User) {
  try {
      await db.insert(users).values(user)
  } catch(err) {
    return {err}
  }
}