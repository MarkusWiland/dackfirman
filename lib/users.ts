import db from "@/db"
import { users } from "@/db/schema"
interface User {
  id: string, 
  name: string, 
  age: number,
  image: string,
  email: string
}
export async function createUser(user: User) {
  try {
      await db.insert(users).values(user)
  } catch(err) {
    return {err}
  }
}