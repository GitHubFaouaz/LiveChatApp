"use client";

// import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import SendMessage from "../composant/SendMessage";
import { fetchUsers } from "../utile/usersList";
import { useSession } from "next-auth/react";
// import { fetchUsers } from "../utile/usersList";

export default function page() {
  type User = {
    // id: string;
    name?: string;
    email: string;
    image?: string;
  };

  // const userSignin = async () => userInfo();
  const { data: session } = useSession();

  const [usersListDB, setUsersListDb] = useState<User[]>([]);
  const [error, setError] = useState<string | null>(null);
  // const [listPosts, setListPosts] = useState<Posts[]>([]);
  // console.log("listPosts", listPosts);

  // recuperation de tous les users de la DB
  useEffect(() => {
    async function fetchSession() {
      fetchUsers()
        .then((data) => {
          setUsersListDb(data);
          // console.log(data + "data");
        })
        .catch((error) => setError((error as Error).message));
    }
    fetchSession();
  }, []);

  // const {user,email,image} =  userSignin

  if (!session || !session.user) {
    console.error("Utilisateur non connecté");
    // return "Utilisateur non connecté";
  }

  // on verifie si lutilisateur connecté est dans la base de donnée
  const findUserDb = usersListDB.find(
    (user) => user.email === session?.user?.email
  );

  return (
    <div>
      {findUserDb ? (
        <>
          <p>{findUserDb.name}</p>
          <SendMessage propsUserSignin={findUserDb} />
        </>
      ) : (
        <p>
          Utilisateur non connecté. <a href="/login">Connectez-vous ici</a>
        </p>
      )}
    </div>
  );
}
