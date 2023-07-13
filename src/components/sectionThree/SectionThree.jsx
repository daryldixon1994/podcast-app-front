import React from "react";
import tw from "twin.macro";
import { AiOutlineDatabase } from "react-icons/ai";
import { BsMic } from "react-icons/bs";
import { ImBullhorn } from "react-icons/im";
import Card from "./Card";

const Container = tw.div`box-border min-h-[550px] px-12 py-12 flex flex-col gap-[50px]`;
const H1 = tw.h1`font-cairo text-6xl font-extrabold text-[#222f2b]`;
const List = tw.div`box-border flex lg:flex-row flex-col lg:gap-[15px] gap-[30px]`;
function SectionThree() {
  const Items = [
    {
      icon: <AiOutlineDatabase color="#241f21" size={30} />,
      title: "Simple hosting for podcast creators",
      desc: "Created by podcasters, for podcasters, with a dashboard that makes running and promoting your show a complete breeze.",
    },
    {
      icon: <BsMic color="#241f21" size={30} />,
      title: "Fully flexible podcasting",
      desc: "The only podcast host you need to with everything you need to share your podcast with the world. Websites, sponsor kits, private feeds, and more, all included.",
    },
    {
      icon: <ImBullhorn color="#241f21" size={30} />,
      title: "In-Built Podcast marketing site",
      desc: "The only podcast host you need to with everything you need to share your podcast with the world. Websites, sponsor kits, private feeds, and more, all included.",
    },
  ];
  return (
    <Container>
      <H1>Easy and Powerful Tools</H1>
      <List>
        {Items.map((item, i) => (
          <Card key={i} {...item} />
        ))}
      </List>
    </Container>
  );
}

export default SectionThree;
