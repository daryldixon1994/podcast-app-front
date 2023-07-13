import React from "react";
import tw from "twin.macro";

const Container = tw.div`box-border lg:h-[300px] flex flex-col gap-[25px] flex-1`;
const Title = tw.h2`text-[#241f21]  text-2xl font-comfort font-black h-16 mb-0`;
const P = tw.p` font-comfort`;
const Icon = tw.div`bg-[#07df9a] w-fit p-4 rounded-full`;
function Card({ icon, title, desc }) {
  return (
    <Container>
      <Icon>{icon}</Icon>
      <Title> {title} </Title>
      <P> {desc} </P>
    </Container>
  );
}

export default Card;
