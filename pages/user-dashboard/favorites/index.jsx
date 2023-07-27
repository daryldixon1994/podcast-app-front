"use client";
import React, { useEffect } from "react";
import UserLayout from "@/components/layouts/UserLayout";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
function Favourites() {
  const session = useSession();
  const router = useRouter();
  useEffect(() => {
    if (!window.localStorage.getItem("token")) {
      router.push("/login");
    }
    if (session.status === "loading") {
      return router.push("/loading");
    }
    if (session.status === "unauthenticated") {
      return router.push("/login");
    }
  });

  return <div>Favorites</div>;
}
Favourites.getLayout = function getLayout(page) {
  return <UserLayout>{page}</UserLayout>;
};
export default Favourites;
