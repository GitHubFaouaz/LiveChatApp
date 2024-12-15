"use client";

import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import userInfo from "../utile/userInfo";
import SendMessage from "../composant/SendMessage";
import { fetchUsers } from "../utile/usersList";

export default function page() {
  type User = {
    id: string;
    name?: string;
    email: string;
    image?: string;
  };

  const [users, setUsers] = useState<User[]>([]);
  const [error, setError] = useState<string | null>(null);
  const fetchList = () => {
    useEffect(() => {
      fetchUsers()
        .then(setUsers)
        .catch((error) => setError((error as Error).message));
    }, []);
  };
  fetchList();
  console.log("user", users);

  return (
    <div>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name} - {user.id}
            {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
}
