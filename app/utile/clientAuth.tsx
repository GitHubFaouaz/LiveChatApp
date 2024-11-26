import React, { useEffect } from "react";
import { useSession, signIn, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
export default function clientAuth() {
  const { data: session } = useSession();
  const router = useRouter();
  // console.log(session);
  useEffect(() => {
    if (session) {
      // Redirige si l'utilisateur est connecté
      router.push("/dashboard");
    }
  }, [session]);
  const loginClientWithGoogle = async () => {
    if (!session) {
      await signIn("google");
    }
  };

  return { loginClientWithGoogle };
}
