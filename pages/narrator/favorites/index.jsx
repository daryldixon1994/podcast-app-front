import React, { useEffect } from "react";
import NarratorLayout from "@/components/layouts/NarratorLayout";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";
import tw from "twin.macro";

const Container = tw.div`box-border lg:pt-10`;
function Favourites() {
  const session = useSession();
  const router = useRouter();
  useEffect(() => {
    if (!window.localStorage.getItem("token")) {
      router.push("/login");
    }
  }, [router]);
  // if (session.status === "unauthenticated") {
  //   return router.push("/login");
  // }
  if (session.status === "loading") {
    return <div>Loading ....</div>;
  }
  return <Container>Favourites</Container>;
}
Favourites.getLayout = function getLayout(page) {
  return <NarratorLayout>{page}</NarratorLayout>;
};
export default Favourites;
