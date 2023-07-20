"use client";
import React from "react";
import PrivateUserNavBar from "../navbar/PrivateUserNavBar";
import TopArrow from "../topArrow/TopArrow";
import Footer from "../Footer/Footer";
import UserAside from "@/components/asides/UserAside";
import { SessionProvider } from "next-auth/react";
import tw from "twin.macro";
import { useRouter } from "next/router";

const Container = tw.div`box-border lg:flex`;
const Main = tw.main`box-border lg:w-[88%] p-4`;
function UserLayout({ children }) {
  const router = useRouter();
  // if (session.status === "unauthorized") {
  //   return router.push("/login");
  // }
  // if (session.status === "authorized") {
  return (
    <SessionProvider>
      <TopArrow toGo="up" />
      <PrivateUserNavBar />
      <Container>
        <UserAside />
        <Main>{children}</Main>
      </Container>
      <Footer />
    </SessionProvider>
  );
  // }
}

export default UserLayout;
