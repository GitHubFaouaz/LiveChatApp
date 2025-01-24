"use client";
import React, { useEffect } from "react";
import { useSession, signIn, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
// import clientAuth from "../utile/clientAuth";
import Image from "next/image";
import { FaSignOutAlt } from "react-icons/fa";
import Nav from "../composant/Nav";
import Title from "../composant/Title";
import imgProfil from "../../public/imgProfil.webp";
import { IoIosMusicalNotes } from "react-icons/io";
import { MdOutlineMusicVideo } from "react-icons/md";
import { RiNeteaseCloudMusicFill } from "react-icons/ri";
import { LuListMusic } from "react-icons/lu";
import { SiNeteasecloudmusic } from "react-icons/si";
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
      <div className="absolute top-[20%]  h-[200px] bg-red-200 flex items-center justify-center  bg-gradient-to-r from-cyan-500 to-blue-500 w-[100%] customBarreDecoHome ">
        {/* barre deco */}
      </div>
      <div className="absolute top-[70%]  h-[200px] bg-red-200 flex items-center justify-center  bg-gradient-to-r from-cyan-500 to-blue-500 w-[100%] customBarreDecoHome ">
        {/* barre deco */}
      </div>

      <div className="w-4/5 h-full px-[5px] pb-[15px]  bg-black rounded-3xl rotateTable  shadow-customHome max-w-[1700px] z-10 border-t-[1px] border-solid border-[#cdcdcd]-500  ">
        <div className="w-full h-full flex items-center flex-col bg-bgHomedeg  rounded-3xl p-3">
          {/* barreNav */}
          <nav className="grid grid-cols-[1fr_3fr_2fr]  w-full items-center gap-5">
            <div className="  ">
              <Title />
            </div>
            <div className="">fff</div>
            <div className="w-full ">
              <Nav />
            </div>
          </nav>
          <main className="grid grid-cols-[2fr_3fr_1fr]">
            <section>
              section 1 Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Aperiam sed libero aut iusto dolorum neque iure et eligendi sequi,
              totam provident rem qui voluptates labore voluptatum maiores.
              Laborum exercitationem sit eum maiores asperiores, corporis
              recusandae sed eius inventore omnis labore ad culpa cupiditate,
              sunt unde quo, quasi voluptate quos. Perferendis repudiandae eum
              deserunt necessitatibus, velit sunt ipsa illum nesciunt inventore
              maxime dolore qui quo quas rem labore ipsam recusandae iste,
              voluptatibus voluptates totam eligendi dolor dolorum consequatur
              blanditiis! Doloribus sint eligendi iure consequuntur iusto amet
              quod voluptatibus adipisci tempore, enim tenetur asperiores, iste
              repudiandae excepturi omnis repellendus perspiciatis rerum
              inventore velit architecto necessitatibus. Inventore, nulla
              exercitationem
            </section>
            <section className="max-w-[800px] min-w-[500px]">
              <div className="flex flex-col  gap-1 bg-[#000] pr-1 pl-3 pt-4 pb-2 rounded-3xl customContainePosts ">
                <div className="grid grid-cols-[15%_70%_15%] items-center justify-center   bg-gradient-to-r from-[#313030] via-[#333] to-[#313030] px-1 py-2 ">
                  <div className=" w-[50px]  border border-[var(--colorOrange)] border-2 rounded-3xl flex items-center justify-center  ">
                    <Image
                      src={imgProfil}
                      alt="imgProfil"
                      // height={50}
                      // width={50}
                      className="rounded-3xl "
                    />
                  </div>
                  <div>
                    <p>nom:faouaz</p>
                    <p className="text-white">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Amet eos tenetur iste unde ipsum, dolorum totam fugit ab
                    </p>
                  </div>
                  <div className="flex flex-col gap-1">
                    <div className="flex gap-1">
                      <IoIosMusicalNotes className="w-[5px]  text-white" />
                      <MdOutlineMusicVideo className="w-[5px]  text-white" />
                      <RiNeteaseCloudMusicFill className="w-[5px]  text-white" />
                      <LuListMusic className="w-[9px]  text-white   " />
                      <SiNeteasecloudmusic className="w-[12px]  text-white  rounded-3xl shadow-     customIcon" />
                    </div>
                    <button className=" flex items-center justify-center py-1 px-3 rounded-2xl bg-[#000] text-white border  border-[var(--colorOrange)] border-1 rounded-1xl hover:bg-[var(--colorOrange)]   ">
                      faouaz
                    </button>
                  </div>
                </div>

                <div className=" h-[100px] bg-yellow-200 "></div>
                <div className=" h-[100px] bg-yellow-200"></div>
                <div className=" h-[100px] bg-yellow-200"></div>
              </div>
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
