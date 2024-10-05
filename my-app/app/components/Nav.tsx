// rfc
"use client";

import Link from "next/link";
import { FaHome, FaUser } from "react-icons/fa";

export default function Nav() {
  return (
    <nav className="h-[70px] w-full flex justify-between items-center bg-blue-600 p-3">
      <Link href="/">
        <li className="text-white flex items-center gap-2 p-2 rounded-full hover:text-blue-600 hover:bg-white transition-all">
          <FaHome />
          <span>Home</span>
        </li>
      </Link>
      <button className="text-white hover:bg-white hover:text-blue-600 p-3 rounded-full transition-all">
        <FaUser />
      </button>
    </nav>
  );
}
