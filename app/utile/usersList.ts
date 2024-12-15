import { useState } from "react";
// import fetchUsers from "../api/users/route";

// type User = {
//   // id: string;
//   name?: string;
//   email: string;
//   image?: string;
// };
// export default async function UserList() {
//   const [users, setUsers] = useState<User[]>([]);
//   const [error, setError] = useState<string | null>(null);

//   try {
//     const response = await fetch("/api/users");
//     if (!response.ok) {
//       throw new Error("Erreur lors du chargement des utilisateurs");
//     }
//     const data = await response.json();
//     setUsers(data);
//     console.log(data);
//   } catch (error) {
//     setError((error as Error).message);
//   }
//   console.log("users", users);

//   return users;
// }

// fetchUsers();

// export default async function UserList() {
//   const users = await fetchUsers();
//   console.log("backend userDb", users);
// }

// UserList();

// export default async function fetchUsers() {
//   const [users, setUsers] = useState<User[]>([]);
//   const [error, setError] = useState<string | null>(null);
//   try {
//     const response = await fetch("/api/users");
//     if (!response.ok) {
//       throw new Error("Erreur lors du chargement des utilisateurs");
//     }
//     const data = await response.json();
//     setUsers(data);
//     console.log("data", data);
//   } catch (error) {
//     setError((error as Error).message);
//   }
//   return users;
// }

// fetchUsers();

export async function fetchUsers() {
  try {
    const response = await fetch("/api/users");
    if (!response.ok) {
      throw new Error("Erreur lors du chargement des utilisateurs");
    }
    return await response.json();
  } catch (error) {
    console.error("Erreur :", error);
    throw error;
  }
}
