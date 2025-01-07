"use client";

// import { useRouter } from "next/navigation";
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

  // recuperation de tous les users de la DB
  useEffect(() => {
    fetchUsers()
      .then((data) => {
        setUsersListDb(data);
        // console.log(data + "data");
      })
      .catch((error) => setError((error as Error).message));
  }, []);
  // // Récupération de la session utilisateur
  // useEffect(() => {
  //   async function fetchSession() {
  //     const { data: session } = useSession();
  //     if (session && session.user) {
  //       setUserSignin(session.user as User); // Typage explicite ici
  //     }
  //   }
  //   fetchSession();
  // }, []);

  if (!userSignin) {
    console.error("Utilisateur non connecté");
    // return "Utilisateur non connecté";
  }

  // on verifie si lutilisateur connecté est dans la base de donnée
  const findUserDb = usersListDB.find(
    (user) => user.email === userSignin?.email
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
