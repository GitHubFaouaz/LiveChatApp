import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";

export default function userInfo() {
  type user = {
    name?: string | null;
    email?: string | null;
    image?: string | null;
  };

  const { data: session } = useSession();
  // console.log(session);
  const [user, setuser] = useState<user | null>(null);
  useEffect(() => {
    if (session && session.user) {
      setuser(session.user);
    }
  }, [session]);

  return user;
}
