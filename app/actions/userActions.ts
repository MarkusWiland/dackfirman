"use server";

import db from "@/db";
import { Ad, users } from "@/db/schema/index";
import { eq } from "drizzle-orm";

export const getAllUsers = async () => {
  const data = await db.select().from(users);
  return data;
};
export const getDataFromUser = async ({userId}: {userId: string}) => {
  const data = await db.select().from(users).where(eq(users?.id, userId))
  return data
}
export const addAds = async ({
  user_id, title, content, location, images,
}: {
  user_id: string;
  title: string;
  content: string;
  location: string;
  images: string[];
}) => {
  const addAd = await db.insert(Ad).values({
    userId: user_id,
    title: title,
    content: content,
    location: location,
    images: images,
  });

  return addAd
 
};
