import { useState } from "react";

type User = {
  // id: string;
  name?: string;
  email: string;
  image?: string;
};
export default async function UserList() {
  const [users, setUsers] = useState<User[]>([]);
  const [error, setError] = useState<string | null>(null);

  try {
    const response = await fetch("/api/users");
    if (!response.ok) {
      throw new Error("Erreur lors du chargement des utilisateurs");
    }
    const data = await response.json();
    setUsers(data);
    console.log(data);
  } catch (error) {
    setError((error as Error).message);
  }
  return users;
}
