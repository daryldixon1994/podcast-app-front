import React, {useEffect} from "react";
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
   });
  // if (session.status === "unauthenticated") {
  //   return router.push("/login");
  // }
  if (session.status === "loading") {
    return <div>Loading ....</div>;
  }
  return <div>Favourites</div>;
}
Favourites.getLayout = function getLayout(page) {
  return <UserLayout>{page}</UserLayout>;
};
export default Favourites;
