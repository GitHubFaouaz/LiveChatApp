import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// export default async function handler(
//   req: NextApiRequest,
//   res: NextApiResponse
// ) {
//   try {
//     const users = await prisma.user.findMany();
//     res.status(200).json(users);
//   } catch (error) {
//     console.error("Erreur lors de la récupération des utilisateurs :", error);
//     res.status(500).json({ error: "Erreur serveur" });
//   } finally {
//     await prisma.$disconnect();
//   }
// }

export default async function fetchUsers() {
  try {
    const users = await prisma.user.findMany();
    return users;
    console.log(users);
  } catch (error) {
    console.error("Erreur lors de la récupération des utilisateurs :", error);
    return null;
  } finally {
    await prisma.$disconnect();
  }
}
