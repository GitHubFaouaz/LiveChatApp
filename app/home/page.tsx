"use client";
import React, { useEffect } from "react";
import { useSession, signIn, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
// import clientAuth from "../utile/clientAuth";
import Image from "next/image";
import { FaSignOutAlt } from "react-icons/fa";
import PostsShare from "../composant/PostShare";
export default function page() {
  const { data: session } = useSession();

  const router = useRouter();

  // if (!session?.user) {
  //   router.push("/");
  //   console.log("session?.user non connecté");
  // }
  // useEffect(() => {
  //   if (!session?.user) {
  //     // router.push("/");
  //   }
  // }, [session?.user]);

  const handleSignOut = () => {
    signOut();
    router.push("/");
  };
  return (
    <div>
      {session?.user && (
        <>
          <div className="w-full h-creen relative">
            <div className="w-full h-screen flex items-center flex-col gap-5 p-3 pt-20">
              <PostsShare />
              <span className="font-bold text-blue-600"> Votre compte</span>

              <h1 className="text-6xl uppercase font-black">
                DASH <span className="text-blue-600">board</span>
              </h1>
              <ul className="flex flex-col justify-center items-center p-3 gap-2">
                <li>
                  <Image
                    src={`${session?.user?.image}`}
                    alt="imageProfil"
                    width={100} // Spécifiez une largeur
                    height={100} // Spécifiez une hauteur
                  ></Image>
                </li>
                <li>
                  Bienvenue <b> {session?.user?.name}</b>
                </li>
              </ul>
              <button
                onClick={handleSignOut}
                className="absolute top-2 right-2 block bg-red-500 px-3 py-1 text-white hover:bg-red-800 my-3 rounded-md "
              >
                <FaSignOutAlt />
              </button>
              <button
                onClick={() => router.push("chat")}
                className=" block bg-red-500 px-3 py-1 text-white hover:bg-yellow-800 my-3 rounded-md "
              >
                {" "}
                Accéder au chat
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
