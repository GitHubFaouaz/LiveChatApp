"use client";

import { FcGoogle } from "react-icons/fc";
import Nav from "./composant/Nav";
import { useSession, signIn, signOut } from "next-auth/react";
import clientAuth from "./utile/clientAuth";

export default function Home() {
  const { data: session } = useSession();
  const { loginClientWithGoogle } = clientAuth();

  console.log(session);

  return (
    <div>
      <Nav />
      <section className="w-full h-screen flex items-center justify-center p-3">
        <div className="max-w-[1000px] m-auto flex items-center justify-center flex-col gap-5 text-center">
          <h1 className="text-6xl uppercase font-black ">
            CHAT <span className="text-blue-600">APP</span>
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Consectetur, esse hic velit quis quas, molestias voluptatem non
            voluptatum, earum eos alias accusamus in voluptatibus repellendus
            provident? Ipsam, fugiat dolore iusto nesciunt illum quisquam ex
            illo facilis consectetur porro eligendi in at? Atque pariatur quasi
            vitae voluptatibus quidem praesentium officia quia quis labore nihil
            dicta natus nostrum dolorem est, minima consectetur asperiores
            voluptas eligendi ut, rerum explicabo. Reprehenderit, sequi modi
            laborum amet illum inventore unde earum neque repellat sed maxime?
            Porro provident vel architecto perspiciatis quas maiores dolores
            consequatur aut at sed, repellendus, dolor tempore, veritatis quae
            nostrum? In, voluptates pariatur, dolorum sapiente, error nulla ut
            reprehenderit recusandae quasi fuga rerum autem sunt. Veritatis !
          </p>
          {session ? (
            <>
              <p>Signed in as {session?.user?.name} </p>
              <br />
              <button onClick={() => signOut()}>Sign out</button>
            </>
          ) : (
            <button
              onClick={loginClientWithGoogle}
              // onClick={() => signIn()}
              className="bg-gray-200 hover:bg-gray-300 rounded-md p-2 flex items-center gap-2 "
            >
              <FcGoogle /> Se conecter avec google
            </button>
          )}
        </div>
      </section>
    </div>
  );
}

// export default function Component() {
//   const { data: session } = useSession();
//   console.log("sessionLog", session?.user);

//   if (session) {
//     return (
//       <>
//         Signed in as {session?.user?.email} <br />
//         <button onClick={() => signOut()}>Sign out</button>
//       </>
//     );
//   }
//   return (
//     <>
//       Not signed in <br />
//       <button onClick={() => signIn()}>Sign in</button>
//     </>
//   );
// }
