// Home.tsx
import { auth } from "@clerk/nextjs/server";
import AddButton from "./_components/AddButton";

export default async function Home() {
  const user = await auth();
  if (!user || !user.userId) return null;

  return (
    <main>
      <h1>hej</h1>
      {/* Skicka userId som props till knappen */}
      <AddButton  userId={user.userId} />
    </main>
  );
}
