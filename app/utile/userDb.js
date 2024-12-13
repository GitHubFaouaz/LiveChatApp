import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function fetchUsers() {
  try {
    const userDb = await prisma.user.findMany();
    console.log(userDb);
    return userDb;
  } catch (error) {
    console.error("Erreur lors de la récupération des utilisateurs :", error);
  } finally {
    await prisma.$disconnect();
  }
}

fetchUsers();
