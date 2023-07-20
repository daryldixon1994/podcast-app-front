import Link from "next/link";
import React from "react";
import tw from "twin.macro";
import { usePathname } from "next/navigation";
const Container = tw.div`box-border lg:w-[12%] lg:min-h-[500px] lg:pt-8 `;
const Links = tw.ul`flex flex-col text-black`;
const Li = tw.li`box-border font-poppins font-bold text-xl px-3 py-1 hover:text-inherit`;
function UserAside() {
  const pathname = usePathname();
  return (
    <Container className="aside-narrator">
      <Links>
        <Link
          href="/narrator/feeds"
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
          href="/narrator/profile"
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
          href="/narrator/favorites"
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
        <Link
          href="/narrator/followers"
          style={
            pathname.endsWith("followers")
              ? {
                  backgroundColor: "#07df9a",
                  color: "black",
                }
              : { all: "unset", cursor: "pointer" }
          }
        >
          <Li>Followers</Li>
        </Link>
      </Links>
    </Container>
  );
}

export default UserAside;
