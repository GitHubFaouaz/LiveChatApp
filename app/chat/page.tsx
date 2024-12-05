"use client";

import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import userInfo from "../utile/userInfo";

export default function page() {
  const router = useRouter();
  const user = userInfo();
  const [loading, isLoading] = useState(true);

  useEffect(() => {});

  return <div>page chat</div>;
}
