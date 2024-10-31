// app/api/cars/route.ts

import { NextRequest, NextResponse } from "next/server";
import db from "@/db";
import carsTable from "@/db/schema/cars"; // Anta att du har skapat `carsTable` enligt tidigare instruktioner
import { eq, and } from "drizzle-orm";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.nextUrl);
  const bilmarke = searchParams.get("bilmarke");
  const bultcirkel = searchParams.get("bultcirkel");
  const antalBultar = searchParams.get("antalBultar");
  const diameter = searchParams.get("diameter");
  const dackbredd = searchParams.get("dackbredd");
  const dacktyp = searchParams.get("dacktyp");
  const falgbredd = searchParams.get("falgbredd");
  const lan = searchParams.get("lan");

  // Bygg upp dynamiska filter baserat på inkommande parametrar
  const filters = [];

  if (bilmarke) filters.push(eq(carsTable.bilmarke, bilmarke));
  if (bultcirkel) filters.push(eq(carsTable.bultcirkel, bultcirkel));
  if (antalBultar) filters.push(eq(carsTable.antalBultar, antalBultar));
  if (diameter) filters.push(eq(carsTable.diameter, diameter));
  if (dackbredd) filters.push(eq(carsTable.dackbredd, dackbredd));
  if (dacktyp) filters.push(eq(carsTable.dacktyp, dacktyp));
  if (falgbredd) filters.push(eq(carsTable.falgbredd, falgbredd));
  if (lan) filters.push(eq(carsTable.lan, lan));

  try {
    // Kör sökningen med dynamiska filter
    const results = await db
      .select()
      .from(carsTable)
      .where(and(...filters));

    return NextResponse.json(results);
  } catch (error) {
    return NextResponse.json({ error: "Något gick fel med databasfrågan" }, { status: 500 });
  }
}
