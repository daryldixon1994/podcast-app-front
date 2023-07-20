import Link from "next/link";
import React from "react";
import tw from "twin.macro";
import { usePathname } from "next/navigation";
const Container = tw.div`box-border lg:w-[12%] lg:h-[500px] drop-shadow-md`;
const Links = tw.ul`flex flex-col text-black`;
const Li = tw.li`box-border font-poppins font-bold text-xl px-3 py-1 hover:text-inherit`;
function UserAside() {
  const pathname = usePathname();
  return (
    <Container>
      <Links>
        <Link
          href="/user-dashboard/feeds"
          style={
            pathname.endsWith("feeds")
              ? {
                  all: "unset",
                  backgroundColor: "#07df9a",
                  color: "black",
                }
              : { all: "unset", cursor: "pointer" }
          }
        >
          <Li>Feeds</Li>
        </Link>
        <Link
          href="/user-dashboard/profile"
          style={
            pathname.endsWith("profile")
              ? {
                  backgroundColor: "#07df9a",
                  color: "black",
                }
              : { all: "unset", cursor: "pointer" }
          }
        >
          <Li>Profile</Li>
        </Link>
        <Link
          href="/user-dashboard/favorites"
          style={
            pathname.endsWith("favorites")
              ? {
                  backgroundColor: "#07df9a",
                  color: "black",
                }
              : { all: "unset", cursor: "pointer" }
          }
        >
          <Li>Favourites</Li>
        </Link>
      </Links>
    </Container>
  );
}

export default UserAside;
