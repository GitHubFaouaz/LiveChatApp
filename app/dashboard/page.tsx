"use client";
import React from "react";
import { useSession, signIn, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import clientAuth from "../utile/clientAuth";
import userInfo from "../utile/userInfo";
export default function page() {
  const { data: session } = useSession();
  const { loginClientWithGoogle } = clientAuth();
  // console.log(user());
  const user = userInfo();
  console.log("userInfo" + user);

  // user();
  return (
    <div>
      <p> page dashboard</p>
      {session && <button onClick={() => signOut()}>signOut</button>}
    </div>
  );
}
