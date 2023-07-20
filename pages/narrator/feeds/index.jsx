import React , {useEffect} from 'react'
import NarratorLayout from "@/components/layouts/NarratorLayout";
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import tw from "twin.macro";

const Container = tw.div`box-border lg:pt-10`;

function Feeds() {
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
  return (
    <Container>Feeds</Container>
  )
}
Feeds.getLayout = function getLayout(page) {
  return <NarratorLayout>{page}</NarratorLayout>;
};
export default Feeds