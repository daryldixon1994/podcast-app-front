import Image from "next/image";
import React from "react";
import tw from "twin.macro";

const Container = tw.div`box-border min-h-[494px] bg-[#241f21] py-12 lg:px-20 px-4 lg:flex`;
const Content = tw.div`box-border flex flex-col items-start gap-[25px] lg:w-[55%]`;
const H1 = tw.h1`font-cairo text-6xl font-extrabold text-[#fff] capitalize`;
const Description = tw.p`text-lg font-poppins leading-relaxed text-[rgb(247, 247, 247,0.8)]`;
const TryBtn = tw.button`font-cairo bg-[#07de99] font-bold text-[1.35rem] text-[#241f21] p-2 hover:cursor-pointer`;
const ImagesBox = tw.div`box-border lg:w-[45%] lg:flex justify-center relative`;
const VBox = tw.div`hidden lg:block box-border absolute left-0 -rotate-45`;
const VBox2 = tw.div`hidden lg:block box-border absolute -right-[12%] rotate-12 `;
const VBox3 = tw.div`hidden lg:block box-border absolute -bottom-[15%] -left-[18%] rotate-[60deg]`;
const VBox4 = tw.div`hidden lg:block box-border absolute bottom-[15%] -right-[18%] -rotate-90`;
function FreeTrial() {
  return (
    <Container>
      <Content>
        <H1>Try PodKasa free for 7 days</H1>
        <Description>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia
          reiciendis ex vero qui sequi aut architecto, dolorem aliquam earum
          possimus velit aliquid exercitationem eligendi temporibus voluptatem
          cumque. Perspiciatis, officia deleniti minima pariatur beatae odio
          architecto quos. Provident, impedit consequuntur. Hic voluptatem
          voluptatibus eaque placeat sint rem in itaque aut similique!
        </Description>
        <TryBtn>Try for free</TryBtn>
      </Content>
      <ImagesBox>
        <VBox>
          <Image src="/images/g1.png" width={150} height={150} alt="vector" />
        </VBox>
        <VBox2>
          <Image src="/images/g2.png" width={150} height={150} alt="vector" />
        </VBox2>
        <VBox3>
          <Image src="/images/g3.png" width={150} height={150} alt="vector" />
        </VBox3>
        <VBox4>
          <Image src="/images/g3.png" width={150} height={150} alt="vector" />
        </VBox4>
        <Image src="/images/free-pic.png" width={420} height={539} alt="" />
      </ImagesBox>
    </Container>
  );
}

export default FreeTrial;
