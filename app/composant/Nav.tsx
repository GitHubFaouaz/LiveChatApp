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

// import { NavLink } from "react-router-dom";
import { FaHouse } from "react-icons/fa6";
import "./_nav.scss";
import { IoPersonOutline } from "react-icons/io5";
import { TiMessages } from "react-icons/ti";
import { IoIosLogOut } from "react-icons/io";
const Nav = () => {
  return (
    <>
      <ul className="navigation">
        <li>
          {/* <NavLink
            to="../home"
            className={({ isActive }) => (isActive ? "active" : "")}
          > */}
          <span className="icon">
            <FaHouse />
          </span>
          <span className="text">Accueil</span>
          {/* </NavLink> */}
        </li>

        <li>
          {/* <NavLink
            to={`/profile/${user._id}`}
            className={({ isActive }) => (isActive ? "active" : "")}
          > */}
          <span className="icon">
            <IoPersonOutline />{" "}
          </span>

          <span className="text">Profile</span>
          {/* </NavLink> */}
        </li>
        <li>
          {/* <NavLink
            to=""
            // className={({ isActive }) => (isActive ? "active" : "")}
            className={({ isActive }) => (isActive ? "" : "")}
          > */}
          <span className="icon">
            <TiMessages />
          </span>
          <span className="text">Messages</span>
          {/* </NavLink> */}
        </li>

        {/*   <li>
          <span className="icon">
      
            <NavLink to="">
              <ion-icon name="settings-outline"></ion-icon>
            </NavLink>
          </span>
          <span className="text">Settings</span>
        </li> */}
        <li>
          {/* <NavLink to={""} className={({ isActive }) => (isActive ? "" : "")}> */}
          <span className="icon">
            <IoIosLogOut />{" "}
          </span>

          <span className="text">Deconnexion</span>
          {/* </NavLink> */}
        </li>
      </ul>
    </>
  );
};
export default Nav;
