import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient();
export async function GET(req: NextRequest) {
  try {
    const listChat = await prisma.post.findMany();
    return NextResponse.json(listChat, { status: 200 });
  } catch (error) {
    console.log("il n'y a pas du post ", error);
    return NextResponse.json(
      { error: "serveur indisponible" },
      { status: 500 }
    );
  } finally {
    await prisma.$disconnect();
  }
}
