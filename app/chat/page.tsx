"use client";

import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import userInfo from "../utile/userInfo";
import SendMessage from "../composant/SendMessage";
import { fetchUsers } from "../utile/usersList";
// import { fetchUsers } from "../utile/usersList";

export default function page() {
  type User = {
    // id: string;
    name?: string;
    email: string;
    image?: string;
  };

  const userSignin = userInfo();
  const [usersListDB, setUsersListDb] = useState<User[]>([]);
  const [error, setError] = useState<string | null>(null);
  // const [listPosts, setListPosts] = useState<Posts[]>([]);
  // console.log("listPosts", listPosts);

  if (!userSignin) {
    console.error("Utilisateur non connecté");
    return;
  }

  // recuperation de tous les users de la DB
  useEffect(() => {
    fetchUsers()
      .then((data) => {
        setUsersListDb(data);
        // console.log(data + "data");
      })
      .catch((error) => setError((error as Error).message));
  }, []);

  // on verifie si lutilisateur connecté est dans la base de donnée
  const findUserDb = usersListDB.find(
    (user) => user.email === userSignin?.email
  );

  return (
    <div>
      {findUserDb ? (
        <>
          <p>{findUserDb.name}</p>
          <SendMessage />
        </>
      ) : (
        <p>
          Utilisateur non connecté. <a href="/login">Connectez-vous ici</a>
        </p>
      )}
    </div>
  );
}
