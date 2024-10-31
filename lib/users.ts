import db from "@/db"
import { users } from "@/db/schema"

export async function createUser(user: any) {
  try {
      await db.insert(users).values(user)
  } catch(err) {
    return {err}
  }
}