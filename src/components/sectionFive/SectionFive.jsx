import React from "react";
import tw from "twin.macro";
import ClientMind from "./ClientMind";
import { TryForFree } from "../common/CButton";
const Container = tw.div`box-border min-h-[694px] bg-[#e0e0e0] py-12 lg:px-20 px-4`;
const H1 = tw.h1`font-cairo lg:text-6xl text-4xl font-extrabold text-[#222f2b]`;
const SubContainer = tw.div`box-border flex flex-col gap-[30px] lg:px-0 px-10`;
const ButtonBox = tw.div`box-border flex justify-center`;
function SectionFive() {
  return (
    <Container>
      <H1>What clients are saying</H1>
      <SubContainer>
        <ClientMind
          imgUrl="/images/pic11.png"
          desc="I've used for other podcast hosts in the past and they felt very impersonal. Captivate couldn't be more different. I feel like they legitimately care about the art of podcasting and creating the best hosting platform out there, leading the way with new technology and offering upgdares that podcasters really care about."
          author="Michael Sarr"
          pos="CEO Of Monstar"
          dir="row"
        />
        <ClientMind
          imgUrl="/images/pic22.png"
          desc="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat aut modi quasi soluta adipisci provident numquam! Quas quis tenetur magnam. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia, earum! Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, laborum?"
          author="Diana Marina"
          pos=" Head of Content, Tripple of Luck"
          dir="row-reverse"
        />
      </SubContainer>
      <ButtonBox>
        <TryForFree>Learn more</TryForFree>
      </ButtonBox>
    </Container>
  );
}

export default SectionFive;
