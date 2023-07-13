import Link from "next/link";
import React from "react";
import tw from "twin.macro";
const Item = tw.div`box-border lg:flex lg:justify-between transition ease-in-out hover:scale-105 duration-500`;
const ImageBox = tw.div`box-border h-72 lg:w-[57%] flex flex-col justify-end`;
const Title = tw.h1`font-bold font-poppins text-2xl text-[#000] bg-[rgb(7, 222, 153, 0.8)] p-4`;
const Extra = tw.div`box-border lg:w-[40%] flex flex-col lg:gap-[10px] gap-[25px]`;
const DateSpan = tw.h5`font-poppins mt-4 lg:mt-0`;
const Description = tw.p`text-lg font-poppins leading-relaxed text-[#222f2b]`;

function ArticleItem({ title, img, desc, date }) {
  return (
    <Item>
      <ImageBox style={{ backgroundImage: `url(${img})` }} className="img-bg">
        <Title>{title}</Title>
      </ImageBox>
      <Extra>
        <DateSpan>{date}</DateSpan>
        <Description>{desc}</Description>
        <Link href="" style={{ fontWeight: "bold" }}>
          Read more
        </Link>
      </Extra>
    </Item>
  );
}

export default ArticleItem;
