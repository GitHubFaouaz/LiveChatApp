import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";

export default function userInfo() {
  type User = {
    name?: string | null;
    email?: string | null;
    image?: string | null;
  };

  const { data: session } = useSession();
  // console.log(session);
  const [user, setuser] = useState<User | null>(null);

  useEffect(() => {
    if (session && session.user) {
      setuser(session.user);
    }
  }, [session]);
  // useEffect(() => {
  //   const fetchUser = async () => {
  //     if (session && session.user) {
  //       setuser(session.user as User);
  //     }
  //   };

  //   fetchUser();
  // }, [session]);
  return user;
}
