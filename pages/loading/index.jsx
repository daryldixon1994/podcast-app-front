import React from "react";
import { signOut, useSession } from "next-auth/react";
import tw from "twin.macro";

const LogoutButton = tw.button`box-border p-2 bg-[#212121] text-[#07df9a] text-xl rounded font-poppins`;
function Loading() {
  const session = useSession();
  console.log("session", session);
  return (
    <div>
      Loading
      <LogoutButton onClick={() => signOut("google")}>Logout</LogoutButton>
    </div>
  );
}

export default Loading;
