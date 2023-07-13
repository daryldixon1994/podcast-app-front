import Image from "next/image";
import React from "react";
import tw from "twin.macro";

const Container = tw.div`box-border lg:flex items-center gap-[100px] mb-12 lg:mb-0`;
const P = tw.p`lg:text-xl font-poppins leading-relaxed text-[#222f2b]`;
const ImgBox = tw.div`box-border relative`;
const VImg = tw.div`hidden lg:block box-border absolute top-[30%] -left-[10%] -rotate-[20deg]`;
const VImg2 = tw.div`hidden lg:block box-border absolute top-[30%] -right-[15%] `;
const Content = tw.div`box-border h-[300px] lg:w-[50%] flex flex-col justify-between gap-[20px] lg:gap-0`;
const Extra = tw.div``;
const H1 = tw.h1`font-bold font-poppins text-base text-[#222f2b]`;
const H4 = tw.h4`font-bold font-poppins text-sm text-[#222f2b]`;
function ClientMind({ imgUrl, desc, author, pos, dir }) {
  return (
    <Container style={{ flexDirection: dir }}>
      <ImgBox>
        <VImg>
          <Image src="/images/v2.png" width={100} height={100} alt="" />
        </VImg>
        <Image src={imgUrl} alt="client" width={450} height={507} />
        <VImg2>
          <Image src="/images/v1.png" width={100} height={100}alt="" />
        </VImg2>
      </ImgBox>
      <Content>
        <P>{desc}</P>
        <Extra>
          <H1>{author}</H1>
          <H4>{pos}</H4>
        </Extra>
      </Content>
    </Container>
  );
}

export default ClientMind;
