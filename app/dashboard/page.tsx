"use client";
import React, { useEffect } from "react";
import { useSession, signIn, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import clientAuth from "../utile/clientAuth";
import userInfo from "../utile/userInfo";
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
              <span className="font-bold"> Votre compte</span>
            </div>
            <button onClick={() => signOut()}>signOut</button>
          </div>
        </>
      )}
    </div>
  );
}
