"use client";
import React, { useState, useEffect } from "react";
import UserLayout from "@/components/layouts/UserLayout";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";

function Feeds() {
  const session = useSession();
  const router = useRouter();
  // const [token, setToken] = useState();
  // useEffect(() => {
  //   setToken();
  // }, [router, token, session.status]);

  useEffect(() => {
    if (!window.localStorage.getItem("token")) {
      router.push("/login");
    }
  });

  if (session.status === "loading") {
    return <div>Loading ....</div>;
  }
  return <div>Feeds</div>;
}
Feeds.getLayout = function getLayout(page) {
  return <UserLayout>{page}</UserLayout>;
};
export default Feeds;
