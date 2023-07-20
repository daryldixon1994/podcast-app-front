"use client";
import React from "react";
import UserLayout from "@/components/layouts/UserLayout";
import tw from "twin.macro";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

const Container = tw.div`box-border`;
function UserDashboard() {
  const session = useSession();
  const router = useRouter();
  console.log(session);
  if (session.status === "unauthenticated") {
    return router.push("/login");
  }
   if (session.status === "loading") {
     return <div>Loading ....</div>;
   }
  return <Container>user dashboard</Container>;
}
UserDashboard.getLayout = function getLayout(page) {
  return <UserLayout>{page}</UserLayout>;
};
export default UserDashboard;
