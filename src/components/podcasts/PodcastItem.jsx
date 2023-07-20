import React from "react";
import tw from "twin.macro";
import { AiTwotoneLike } from "react-icons/ai";
const Item = tw.div`box-border border-2 border-red-600 p-6 lg:w-[40%] `;
const SubContainer = tw.div`flex gap-4`;
const SubBox = tw.div`box-border border-2 border-blue-300 w-[80%]`;
const Head = tw.div`box-border flex`;
const Cover = tw.div`box-border w-[100px] h-[100px] border-2 border-amber-300`;
const Intro = tw.div``;
const Details = tw.div``;
const Title = tw.h1``;
const Date = tw.p``;
const Desc = tw.p``;
const Duration = tw.p``;
const Audio = tw.audio`font-poppins`
const Likes = tw.p`flex items-center`;
function PodcastItem() {
  return (
    <Item>
      <SubContainer>
        <Cover>COVER</Cover>
        <SubBox>
          <Head>
            <Intro>
              <Title>Episode 1</Title>
              <Date>20 Jul 2023</Date>
            </Intro>
            <Details>
              <Duration>10:15</Duration>
              <Likes>
                +100 <AiTwotoneLike />{" "}
              </Likes>
            </Details>
          </Head>
          <Desc>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat id
            labore, sed tempore quaerat nemo perspiciatis quibusdam nisi fugiat
            excepturi!
          </Desc>
        </SubBox>
      </SubContainer>
      <Audio style={{ height: "30px", width: "100%" }} controls>
        <source src="horse.ogg" type="audio/ogg" />
        <source src="horse.mp3" type="audio/mpeg" />
        Your browser does not support the audio tag.
      </Audio>
    </Item>
  );
}

export default PodcastItem;
