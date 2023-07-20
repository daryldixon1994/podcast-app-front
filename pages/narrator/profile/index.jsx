"use client";
import React, { useState, useEffect } from "react";
import NarratorLayout from "@/components/layouts/NarratorLayout";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import tw from "twin.macro";
import axios from "axios";
import Image from "next/image";
import { MdVerifiedUser } from "react-icons/md";
import { ImQuotesLeft, ImQuotesRight } from "react-icons/im";
import { TiMicrophone } from "react-icons/ti";
import {
  BiLogoFacebookCircle,
  BiLogoTwitter,
  BiLogoInstagram,
} from "react-icons/bi";
import NarratorPodcasts from "@/components/podcasts/NarratorPodcasts";
const Container = tw.div`box-border lg:pt-10 min-h-[600px]`;
const Head = tw.div`box-border border-2 border-green-500 lg:flex items-center gap-[25px]`;
const H1 = tw.h1`text-2xl font-poppins`;
const Verified = tw.div`flex items-center gap-[5px]`;
const H2 = tw.h2`text-xl text-slate-400 flex items-center gap-1 font-poppins font-light m-0`;
const Body = tw.div`box-border border-2 border-green-500 p-6`;
const MyBio = tw.p`font-poppins text-lg`;
const Social = tw.div`box-border flex gap-2`;
function Profile() {
  const [data, setData] = useState({});
  const session = useSession();
  const router = useRouter();
  useEffect(() => {
    if (!window.localStorage.getItem("token")) {
      router.push("/login");
    }
  }, [router]);
  useEffect(() => {
    let id = window.localStorage.getItem("id");
    axios
      .get(`https://podcast-app-fqku.onrender.com/api/narrator/profile/${id}`)
      .then((res) => {
        setData(res.data.data);
      })
      .then((err) => {
        if (err) {
          console.dir(err);
        }
      });
  }, []);

  // if (session.status === "unauthenticated") {
  //   return router.push("/login");
  // }
  if (session.status === "loading") {
    return <div>Loading ....</div>;
  }
  return (
    <Container>
      <Head>
        <Image src={data.narratorImg} alt="" width={150} height={150} />
        <Verified>
          <H1>{data.narratorName}</H1>
          <MdVerifiedUser size={20} color="#07df9a" />
        </Verified>
        <H2>+1.25k followers</H2>
        <H2>
          <TiMicrophone size={20} /> 25 post(s)
        </H2>
        <Social>
          <BiLogoFacebookCircle color="#241f21" size={25} />
          <BiLogoTwitter color="#241f21" size={25} />
          <BiLogoInstagram color="#241f21" size={25} />
        </Social>
      </Head>
      <Body>
        <MyBio>
          <ImQuotesLeft
            color="#b5e0d2"
            size={15}
            style={{ marginRight: "8px", display: "inline" }}
          />
          {data.bio}
          <ImQuotesRight
            color="#b5e0d2"
            size={15}
            style={{ marginLeft: "8px", display: "inline" }}
          />
        </MyBio>
      </Body>
      <NarratorPodcasts />
    </Container>
  );
}
Profile.getLayout = function getLayout(page) {
  return <NarratorLayout>{page}</NarratorLayout>;
};
export default Profile;
