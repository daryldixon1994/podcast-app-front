"use client";
import React from "react";
import PrivateNarratorNavBar from "../navbar/PrivateNarratorNavBar";
import TopArrow from "../topArrow/TopArrow";
import Footer from "../Footer/Footer";
import NarratorAside from "@/components/asides/NarratorAside";
import { SessionProvider } from "next-auth/react";
import tw from "twin.macro";

const Container = tw.div`box-border lg:flex`;
const Main = tw.main`box-border lg:w-[88%] px-4 h-[630px] overflow-y-scroll`;
function UserLayout({ children }) {
  return (
    <SessionProvider>
      <TopArrow toGo="up" />
      <PrivateNarratorNavBar />
      <Container>
        <NarratorAside />
        <Main>{children}</Main>
      </Container>
      <Footer />
    </SessionProvider>
  );
  // }
}

export default UserLayout;
