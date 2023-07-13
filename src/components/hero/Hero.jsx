import React from "react";
import tw from "twin.macro";
import LandingPageNavBar from "@/components/navbar/LandingPageNavBar";
import Link from "next/link";
import { TryForFree } from "../common/CButton";
import Image from "next/image";
const Container = tw.header`box-border lg:min-h-[780px] bg-[#07df9a] lg:pt-4 pt-8 pb-4 lg:pb-0`;
const SubContainer = tw.div`box-border max-w-screen-xl mx-auto p-2 lg:p-0`;
const Intro = tw.div`box-border lg:min-h-[200px] lg:py-16 lg:flex lg:justify-between items-center`;
const Content = tw.div`box-border lg:w-[48%] flex flex-col lg:gap-12 gap-6 relative`;
const IntroHead = tw.h1`font-cairo lg:text-6xl text-5xl font-extrabold text-[#241f21] z-[3] lg:leading-[4.4rem] leading-[3.5rem]`;
const P = tw.p`text-[#241f21] font-cairo font-semibold lg:text-xl text-2xl leading-loose`;
const ButtonsBox = tw.div`box-border flex justify-start gap-4 items-center`;
const GetSarted = tw.button`font-cairo font-bold text-[1.35rem] text-[#f3eff5] bg-[#241f21] border-2 border-[#241f21] p-2 hover:bg-[#2d282a]  hover:cursor-pointer`;
const ImgBox = tw.div`hidden lg:block box-border lg:w-[604px] w-[200px] lg:h-[604px] h-[200px] rounded-full `;
const SpanWhite = tw.span`hidden bg-[white] lg:absolute z-[2] text-[#07de99] lg:inline`;
const SpanWhiteMobile = tw.span`inline lg:hidden text-white`;
function Hero() {
  return (
    <Container id="up">
      <SubContainer>
        {/* <LandingPageNavBar /> */}
        <Intro>
          <Content>
            <IntroHead>
              Podcast hosting to manage and <SpanWhite> monetize </SpanWhite>
              <SpanWhiteMobile> monetize </SpanWhiteMobile>
              your podcast
            </IntroHead>
            <P>
              podkasa gives you the freedom and flexibility to make podcasting
              yours. Create and distribute unlimited podcasts, get advanced
              analytics, monetize and promote in one simple
            </P>
            <ButtonsBox>
              <GetSarted>
                <Link href="/login">Get Sarted</Link>
              </GetSarted>
              <TryForFree>
                <Link href="/login">Try for free</Link>
              </TryForFree>
            </ButtonsBox>
          </Content>
          <ImgBox className="intro-img-container" />
        </Intro>
      </SubContainer>
    </Container>
  );
}

export default Hero;
