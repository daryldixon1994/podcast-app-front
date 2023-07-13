import Image from "next/image";
import React from "react";
import tw from "twin.macro";
import { TryForFree } from "@/components/common/CButton";

const Container = tw.div`box-border min-h-[550px] bg-[#07df9a] lg:flex items-center`;
const H1 = tw.h1`font-cairo lg:text-6xl text-4xl font-extrabold text-[#222f2b]`;
const Content = tw.div`box-border lg:w-[60%] h-[400px] flex flex-col justify-between items-start p-4 lg:p-0`;
const P = tw.p`text-[#222f2b] font-comfort text-lg`;
const ImgContainer = tw.div`lg:w-[50%] lg:h-[500px] relative`;
const VBox = tw.div`lg:block hidden box-border absolute bottom-[7%] left-[7%] lg:rotate-0 rotate-90`;
const VBoxMobile = tw.div`lg:hidden block box-border absolute lg:bottom-[7%] top-0 lg:left-[7%] left-[2%] lg:rotate-0 rotate-[60deg]`;
function SectionFour() {
  return (
    <Container>
      <ImgContainer>
        <Image
          src="/images/photo.png"
          width={712}
          height={300}
          alt="girlwithmic"
        />
        <VBox>
          <Image src="/images/v4.png" width={120} height={120} alt="" />
        </VBox>
        <VBoxMobile>
          <Image src="/images/v4.png" width={80} height={80} alt="" />
        </VBoxMobile>
      </ImgContainer>
      <Content>
        <H1>Advanced podcat statistics to track your progress</H1>
        <P>
          Get to know your listeners with podcast statistics. See stats like
          your total downloads over time, what apps people are using to listen
          to your podcast, and where people are listening to your podcast{" "}
        </P>
        <TryForFree>Learn more</TryForFree>
      </Content>
    </Container>
  );
}

export default SectionFour;
