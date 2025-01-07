import { useSession } from "next-auth/react";

export default function userInfo() {
  const { data: session } = useSession();

  if (session && session.user) {
    return session.user;
  }

  return null;
}

// console.log(session);
// const [user, setuser] = useState<User | null>(null);

// useEffect(() => {
//   if (session && session.user) {
//     setuser(session.user);
//   }
// }, [session]);

// type User = {
//   name?: string | null;
//   email?: string | null;
//   image?: string | null;
// };

// return {
//   name: session.user.name || null,
//   email: session.user.email || null,
//   image: session.user.image || null,
// };
