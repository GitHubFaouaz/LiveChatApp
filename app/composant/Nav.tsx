"use client";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FaHome, FaUser } from "react-icons/fa";
import clientAuth from "../utile/clientAuth";
export default function Nav() {
  const { loginClientWithGoogle } = clientAuth();
  const { data: session } = useSession();

  const router = useRouter();
  const goToDashboard = () => {
    if (!session) {
      router.push("/");
    } else {
      router.push("/dashboard");
    }
  };
  return (
    <nav className="h-[70px] w-full flex justify-between items-center bg-blue-600 p-3">
      <Link href="/">
        <li className="text-white flex items-center gap-2 p-2 rounded-full hover:text-blue-600 hover:bg-white transition-all">
          <FaHome />
          <span>Home</span>
        </li>
      </Link>
      <button
        onClick={goToDashboard}
        className="text-white flex items-center gap-2 p-2 rounded-full hover:text-blue-600 hover:bg-white transition-all"
      >
        <FaUser />
      </button>
    </nav>
  );
}
