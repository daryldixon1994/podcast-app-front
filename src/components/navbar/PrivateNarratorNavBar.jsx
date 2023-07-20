"use client";
import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import tw from "twin.macro";

const Container = tw.div`box-border py-2 px-4 bg-white flex justify-end sticky top-0 drop-shadow-md z-10` ;
const LogoutButton = tw.button`box-border p-2 bg-[#212121] text-[#07df9a] text-xl rounded font-poppins`;

function PrivateUserNavBar() {
  const session = useSession();
  // console.log("session", session);
  const router = useRouter();
  const [token, setToken] = useState();
  useEffect(() => {
    setToken(window.localStorage.getItem("token"));
  }, [token]);
  const handleSignOut = () => {
    window.localStorage.clear();
    router.push("/login");
  };
  return (
    <Container>
      {session.status === "authenticated" && (
        <LogoutButton onClick={() => signOut("google")}>Logout</LogoutButton>
      )}
      {token && (
        <LogoutButton onClick={() => handleSignOut()}>Logout</LogoutButton>
      )}
    </Container>
  );
}

export default PrivateUserNavBar;
