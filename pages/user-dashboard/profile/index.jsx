"use client";
import React, { useEffect } from "react";
import UserLayout from "@/components/layouts/UserLayout";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

function Profile() {
  const session = useSession();
  const router = useRouter();
  useEffect(() => {
    if (!window.localStorage.getItem("token")) {
      router.push("/login");
    }
    if (session.status === "loading") {
      return router.push("/loading");
    }
    if (session.status === "unauthorized") {
      return router.push("/login");
    }
  });

  return <div>profile</div>;
}
Profile.getLayout = function getLayout(page) {
  return <UserLayout>{page}</UserLayout>;
};
export default Profile;
