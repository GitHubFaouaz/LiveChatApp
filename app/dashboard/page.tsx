"use client";
import React, { useEffect } from "react";
import { useSession, signIn, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import clientAuth from "../utile/clientAuth";
import userInfo from "../utile/userInfo";
import Image from "next/image";
export default function page() {
  const { loginClientWithGoogle } = clientAuth();
  // console.log(user());
  const user = userInfo();

  console.log("userInfo" + user);
  const router = useRouter();

  useEffect(() => {
    if (!user) {
      router.push("/");
    }
  }, [user]);

  const handleSignOut = () => {
    signOut();
    router.push("/");
  };
  return (
    <div>
      <p> page dashboard</p>
      {user && (
        <>
          <div className="w-full h-creen relative">
            <div className="w-full h-screen flex items-center flex-col gap-5 p-3 pt-20">
              <span className="font-bold text-blue-600"> Votre compte</span>

              <h1 className="text-6xl uppercase font-black">
                DASH <span className="text-blue-600">board</span>
              </h1>
              <ul className="flex flex-col justify-center items-center p-3 gap-2">
                <li>
                  <Image
                    src={`${user?.image}`}
                    alt="imageProfil"
                    width={100} // Spécifiez une largeur
                    height={100} // Spécifiez une hauteur
                  ></Image>
                </li>
                <li>
                  Bienvenue <b> {user?.name}</b>
                </li>
              </ul>
              <button onClick={() => signOut()}>signOut</button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
