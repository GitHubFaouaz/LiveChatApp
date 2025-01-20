// "use client";
// import { useSession } from "next-auth/react";
// import Link from "next/link";
// import { useRouter } from "next/navigation";
// import { FaHome, FaUser } from "react-icons/fa";
// // import clientAuth from "../utile/clientAuth";
// export default function Nav() {
//   const { data: session } = useSession();

//   const router = useRouter();
//   const goToDashboard = () => {
//     if (!session?.user) {
//       router.push("/"); // page de connexion
//     } else {
//       router.push("/dashboard");
//     }
//   };
//   return (
//     <nav className="h-[70px] w-full flex justify-between items-center bg-blue-600 p-3">
//       <Link href="/">
//         <li className="text-white flex items-center gap-2 p-2 rounded-full hover:text-blue-600 hover:bg-white transition-all">
//           <FaHome />
//           <span>Home</span>
//         </li>
//       </Link>
//       <button
//         onClick={goToDashboard}
//         className="text-white flex items-center gap-2 p-2 rounded-full hover:text-blue-600 hover:bg-white transition-all"
//       >
//         <FaUser />
//       </button>
//     </nav>
//   );
// }

import { FaHouse } from "react-icons/fa6";
import "./_nav.scss";
import { IoPersonOutline } from "react-icons/io5";
import { TiMessages } from "react-icons/ti";
import { IoIosLogOut } from "react-icons/io";
import Link from "next/link";
import { usePathname } from "next/navigation";
const Nav = () => {
  const pathname = usePathname();
  return (
    <>
      <ul className="navigation">
        <li className="customLiNav">
          <Link
            href="/home"
            // className={pathname === "/home" ? "active-link" : "link"}
            className={pathname === "/home" ? "active-link" : ""}
          >
            <span className="icon">
              <FaHouse />
            </span>
          </Link>
        </li>

        <li className="customLiNav">
          <Link
            href="/home"
            className={pathname === "/profil" ? "active-link" : ""}
          >
            <span className="icon">
              <IoPersonOutline />{" "}
            </span>
          </Link>
        </li>
        <li className="customLiNav">
          <Link
            href="/home"
            className={pathname === "/chat" ? "active-link" : ""}
          >
            <span className="icon">
              <TiMessages />
            </span>
          </Link>
        </li>

        {/*   <li>
          <span className="icon">
      
            // <Link to="">
              <ion-icon name="settings-outline"></ion-icon>
            // </Link>
          </span>
          <span className="text">Settings</span>
        </li> */}
        <li className="customLiNav">
          <Link
            href="/home"
            className={pathname === "/logout" ? "active-link" : ""}
          >
            <span className="icon">
              <IoIosLogOut />{" "}
            </span>
          </Link>
        </li>
      </ul>
    </>
  );
};
export default Nav;
