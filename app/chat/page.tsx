"use client";

import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import userInfo from "../utile/userInfo";
import SendMessage from "../composant/SendMessage";

export default function page() {
  const router = useRouter();
  const user = userInfo();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!user) {
      setIsLoading(false);
    }
  }, [user]);
  useEffect(() => {
    if (!isLoading && !user) {
      router.push("/");
    }
  }, [user, isLoading, router]);

  return (
    <div className="w-full h-full">
      page chat
      <SendMessage />
    </div>
  );
}
