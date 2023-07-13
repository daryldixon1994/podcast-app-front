import React from "react";
import tw from "twin.macro";

const Container = tw.div`box-border h-[650px]`;
const SubContainer = tw.div`box-border bg-[rgb(58, 58, 58, 0.35)] w-[100%] h-[650px] flex flex-col lg:justify-end py-8 px-16`;
const H1 = tw.h1`text-[white] text-[4.75rem] font-cairo font-extrabold mb-0 p-0 leading-[4rem]`;
const Italic = tw.span`text-[white] font-cairo font-normal italic text-[4.25rem] m-0 p-0`;
function SectionOne() {
  return (
    <Container className="sectionOne-bg">
      <SubContainer>
        <H1>
          Open your mind <br /> <Italic>before</Italic>
          <br />
          Open your mouth
        </H1>
        {/* <H1></H1> */}
      </SubContainer>
    </Container>
  );
}

export default SectionOne;
