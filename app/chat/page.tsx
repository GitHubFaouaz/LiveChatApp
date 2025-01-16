"use client";

// import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import SendMessage from "../composant/SendMessage";
import { fetchUsers } from "../utile/usersList";
import { useSession } from "next-auth/react";
import { fetchPosts } from "../utile/posts";
import Image from "next/image";
import imgProfil from "../../public/imgProfil.webp";

export default function page() {
  type User = {
    // id: string;
    name?: string;
    email: string;
    image?: string;
  };

  type Posts = {
    id?: string;
    name?: string;
    email?: string;
    image?: string;
    desc?: string;
  };

  // const userSignin = async () => userInfo();
  const { data: session } = useSession();

  const [usersListDB, setUsersListDb] = useState<User[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [posts, setPosts] = useState<Posts[]>([]);
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

  //recuperation de les posts
  useEffect(() => {
    async function fetchPost() {
      fetchPosts()
        .then((posts) => {
          setPosts(posts);
          console.log("posts", posts);
        })

        .catch((error) => setError((error as Error).message));
    }
    fetchPost();
  }, []);

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
        <div>
          <div className="flex flex-col  gap-5">
            {posts.map((posts) => (
              <div className="flex gap-5 bg-yellow-300">
                <div>
                  <Image
                    src={
                      posts?.image?.startsWith("http") ? posts.image : imgProfil
                    }
                    alt="imageProfil"
                    width={50}
                    height={50}
                    className="rounded-3xl"
                  />
                </div>
                <div className="">
                  <p> {posts.name}</p>
                  <p>{posts.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <SendMessage propsUserSignin={findUserDb} />
        </div>
      ) : (
        <p>
          Utilisateur non connecté. <a href="/login">Connectez-vous ici</a>
        </p>
      )}
    </div>
  );
}
