// app/api/users/route.ts (Next.js 13+)
import { NextResponse } from "next/server";
import db from "@/app/database/db.json";
import { userDatabaseT } from "@/app/types/config";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const matricula = searchParams.get("matricula")?.toLowerCase();

  if (!matricula) {
    return NextResponse.json({ error: "Matrícula não informada." }, { status: 400 });
  }

  const result = (db as userDatabaseT[]).find(
    (item) => item.MATRICULA.toLowerCase() === matricula
  );

  if (!result) {
    return NextResponse.json({ error: "Matrícula não encontrada." }, { status: 404 });
  }

  return NextResponse.json(result);
}
