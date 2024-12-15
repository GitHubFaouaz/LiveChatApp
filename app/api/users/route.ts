import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET(req: NextRequest) {
  try {
    const users = await prisma.user.findMany();
    return NextResponse.json(users, { status: 200 });
  } catch (error) {
    console.error("Erreur lors de la récupération des utilisateurs :", error);
    return NextResponse.json({ error: "Erreur serveur" }, { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
}

export default async function fetchUsers() {
  try {
    const users = await prisma.user.findMany();
    return users;
    // console.log(users);
  } catch (error) {
    console.error("Erreur lors de la récupération des utilisateurs :", error);
    return null;
  } finally {
    await prisma.$disconnect();
  }
}
