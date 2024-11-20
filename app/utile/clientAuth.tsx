import React from "react";
import { useSession, signIn, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
export default function clientAuth() {
  const { data: session } = useSession();
  const router = useRouter();
  console.log(session);

  const loginClientWithGoogle = async () => {
    if (session) {
      await signIn("google");
      router.push("/dashboard");
    }
  };

  return { loginClientWithGoogle };
}
