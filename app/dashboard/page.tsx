"use client";
import React from "react";
import { useSession, signIn, signOut } from "next-auth/react";
export default function page() {
  const { data: session } = useSession();
  return (
    <div>
      <p> page dashboard</p>
      {session && <button onClick={() => signOut()}>signOut</button>}
    </div>
  );
}
