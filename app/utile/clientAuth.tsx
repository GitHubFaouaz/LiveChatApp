import { useEffect } from "react";
import { signIn, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import userInfo from "./userInfo";
export default function clientAuth() {
  const router = useRouter();
  const user = userInfo();
  console.log("user + ", user);

  useEffect(() => {
    if (user) {
      // Redirige si l'utilisateur est connecté
      router.push("/dashboard");
    }
  }, [user]);

  const loginClientWithGoogle = async () => {
    if (!user) {
      await signIn("google");
    }
  };

  return { loginClientWithGoogle };
}