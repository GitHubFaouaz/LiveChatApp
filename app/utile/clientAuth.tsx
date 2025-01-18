import { useEffect } from "react";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function clientAuth() {
  const router = useRouter();
  const { data: session } = useSession();
  // console.log("userUseSession + ", session.user);

  useEffect(() => {
    if (session?.user) {
      // Redirige si l'utilisateur est connecté
      router.push("/home");
    }
  }, [session?.user]);

  const loginClientWithGoogle = async () => {
    if (!session?.user) {
      await signIn("google");
    }
  };

  return { loginClientWithGoogle };
}
