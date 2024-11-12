import { useRouter } from "next/navigation";
import { useState } from "react";

export const useClientAuth = () => {
  const [use, setUser] = useState<User | null>(null);
  const [isFetch, setFetch] = useState(true);

  const router = useRouter();

  const loginWithGoogle = async () => {
    // const result = await signInWithPopup(auth,provider);
    const user = result.user;
    if (user) {
      router.push("/dashboard");
    }
  };
};
