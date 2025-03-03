"use client";
import React, { useEffect } from "react";
import { useSession, signIn, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
// import { FaSignOutAlt } from "react-icons/fa";
import BarreDeco from "../composant/BarreDeco";

import Nav from "../composant/Nav";
import Title from "../composant/Title";
import Posts from "../composant/Posts";
import PostShar from "../composant/PostShar";
import MiniBtnPageBody from "../composant/MiniBtnPageBody";
import RecordButton from "../composant/RecordButton";
import ProfilButton from "../composant/ProfilButton ";
import BarreRecordButton from "../composant/BarreRecordButton";
import BlocButton from "../composant/BlocButton";

export default function page() {
  const { data: session } = useSession();

  const router = useRouter();

  // if (!session?.user) {
  //   router.push("/");
  //   console.log("session?.user non connecté");
  // }
  // useEffect(() => {
  //   if (!session?.user) {
  //     // router.push("/");
  //   }
  // }, [session?.user]);

  const handleSignOut = () => {
    signOut();
    router.push("/");
  };
  return (
    // <div>
    //   {session?.user && (
    //     <>
    //       <div className="w-full h-creen relative">
    //         {/* <PostsShare /> */}
    //         <div className="w-full h-screen flex items-center flex-col gap-5 p-3 pt-20">
    //           <span className="font-bold text-blue-600"> Votre compte</span>

    //           <h1 className="text-6xl uppercase font-black">
    //             DASH <span className="text-blue-600">board</span>
    //           </h1>
    //           <ul className="flex flex-col justify-center items-center p-3 gap-2">
    //             <li>
    //               <Image
    //                 src={`${session?.user?.image}`}
    //                 alt="imageProfil"
    //                 width={100} // Spécifiez une largeur
    //                 height={100} // Spécifiez une hauteur
    //               ></Image>
    //             </li>
    //             <li>
    //               Bienvenue <b> {session?.user?.name}</b>
    //             </li>
    //           </ul>
    //           <button
    //             onClick={handleSignOut}
    //             className="absolute top-2 right-2 block bg-red-500 px-3 py-1 text-white hover:bg-red-800 my-3 rounded-md "
    //           >
    //             <FaSignOutAlt />
    //           </button>
    //           <button
    //             onClick={() => router.push("chat")}
    //             className=" block bg-red-500 px-3 py-1 text-white hover:bg-yellow-800 my-3 rounded-md "
    //           >
    //             {" "}
    //             Accéder au chat
    //           </button>
    //         </div>
    //       </div>
    //     </>
    //   )}
    // </div>
    <div className="w-full h-full flex items-center justify-center min-h-screen bg-bgHomedeg ">
      <BarreDeco />
      <MiniBtnPageBody />
      <div className="w-4/5 h-full px-[5px] pb-[15px]  bg-black rounded-3xl rotateTable  shadow-customHome max-w-[1700px] z-10 border-t-[1px] border-solid border-[#cdcdcd]-500  ">
        <div className="w-full h-full flex items-center flex-col bg-bgHomedeg  rounded-3xl p-3">
          <header className="grid grid-cols-[1fr_3fr_2fr]  w-full items-center gap-5">
            <Title />
            <PostShar />
            <Nav />
          </header>
          <main className="grid grid-cols-[2fr_3fr_1fr]">
            <section>
              <div className="flex gap-2">
                <RecordButton />
                <BarreRecordButton />
              </div>
              <div>
                <BlocButton />
              </div>

              <div className="flex  gap-2">
                <ProfilButton />
              </div>
            </section>
            <section className="max-w-[800px] min-w-[500px] relative sectionPost">
              <Posts />
            </section>
            <section>
              section 3 sequi officia possimus doloremque consequuntur
              repudiandae ipsa magni! Ducimus voluptates magnam ab facilis vitae
              perferendis aut. Beatae consequuntur deserunt dolorum asperiores
              illo omnis adipisci dicta laborum voluptates neque in, tenetur
              provident fugiat! Doloremque similique laboriosam non autem,
              asperiores culpa quisquam! Odit officia quos optio sunt tenetur
              quam quasi itaque ex. Dolorum voluptatum dolor obcaecati
              aspernatur, rerum necessitatibus vel! Architecto corrupti unde
              debitis minus accusamus perferendis eveniet explicabo natus quidem
              maxime culpa velit facere veniam beatae autem labore ullam
              provident earum, corporis repellat accusantium consectetur.
              Consectetur vero nobis, enim reprehenderit officia provident
              temporibus fugiat sint.
            </section>
          </main>
        </div>
      </div>
    </div>
  );
}
