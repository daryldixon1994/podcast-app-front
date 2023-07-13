import React from "react";
import tw from "twin.macro";
import { TryForFree } from "../common/CButton";
import Image from "next/image";

const Container = tw.div`box-border min-h-[650px] bg-[#eaeaea] text-[#241f21] py-16 px-8`;
const UpSection = tw.div`box-border flex flex-col lg:flex-row gap-10`;
const Left = tw.div`box-border flex flex-col lg:gap-4 gap-8`;
const Right = tw.div`box-border  flex flex-col items-start gap-4`;
const H1 = tw.h1`text-[#241f21] font-cairo font-bold text-3xl h-[90px]`;
const P = tw.p`text-[#241f21] text-lg`;
const ImageBox = tw.div`box-border flex justify-center relative`;
const ImageSquare = tw.div`lg:block hidden box-border absolute top-0 left-[12%]`;
const ImageSquare2 = tw.div`lg:block hidden box-border absolute bottom-0 right-0 rotate-[120deg]`;
function SectionTwo() {
  return (
    <Container>
      <UpSection>
        <Left>
          <H1>Get more help Understanding your podcast Statistic</H1>
          <P>
            We&apos;ve put together a helpful and comprehensive guide to
            understand your podcast analytic. In it we take you through the
            entire analytics dashboard, break down each metric and how you can
            interpret your data meaningfully.
          </P>
        </Left>
        <Right>
          <H1>Easy to understand Statistic</H1>
          <P>
            Without analytics, you&quote;ll never get a grasp on how your
            podcast is performing. With captivate podcast hosting, easily see
            your download totals, unique listener listener demographics, web
            traffic stats and more.
          </P>
          <TryForFree>Learn More</TryForFree>
        </Right>
      </UpSection>
      <ImageBox>
        <ImageSquare>
          <Image src="/images/v3.png" alt="" width={200} height={200} />
        </ImageSquare>
        <ImageSquare2>
          <Image src="/images/v3.png" alt="" width={200} height={200} />
        </ImageSquare2>
        <Image src="/images/img-2.png" alt="" width={750} height={300} />
      </ImageBox>
    </Container>
  );
}

export default SectionTwo;
