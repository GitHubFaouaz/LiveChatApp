import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

// exporter la fonction de gestion de requête en tant que fonction nommée POST
export async function POST(req) {
  const { name, email, image, desc } = await req.json(); // au lieu de req.body ancienne version

  try {
    const newPost = await prisma.post.create({
      data: {
        name: name,
        email: email ?? null,
        image,
        desc,
      },
    });
    return NextResponse.json(newPost, { status: 200 });
  } catch (error) {
    console.error("Erreur lors de la création du post:", error);
    return NextResponse.json(
      { error: "Erreur interne du serveur" },
      { status: 500 }
    );
  } finally {
    await prisma.$disconnect();
  }
}
