"use client";
import * as React from "react";
import tw from "twin.macro";
import { BiArrowFromBottom } from "react-icons/bi";
import Scroll from "react-scroll";
const Top = tw.div`fixed z-20 right-[0px] lg:right-[10px] lg:bottom-[10px] bottom-[30px] visited:text-black rounded-lg bg-[#f7f7f7] p-1 cursor-pointer border-2 border-slate-300`;

function TopArrow({ toGo }) {
  const Link = Scroll.Link;
  return (
    <Link to={`${toGo}`} smooth={true} duration={1500} style={{ all: "unset" }}>
      <Top>
        <BiArrowFromBottom size={20} />
      </Top>
    </Link>
  );
}
export default TopArrow;
