import React from "react";
import tw from "twin.macro";
import ArticleItem from "./ArticleItem";
import { TryForFree } from "../common/CButton";

const Container = tw.div`box-border min-h-[694px] bg-[#fff] py-12 lg:px-20 px-4 flex flex-col gap-[75px]`;
const H1 = tw.h1`font-cairo text-6xl font-extrabold text-[#222f2b] capitalize`;
const ArticlesContainer = tw.div`box-border min-h-[500px] flex flex-col gap-[50px]`;
const ButtonBox = tw.div`box-border flex justify-center`;

function OurArticles() {
  const articles = [
    {
      title: "Learn how to grow and monetize your podcast with Podcasa",
      img: "./images/article-1.jpg",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum quisquam fugiat veniam ullam totam provident ut eaque nobis doloribus, dignissimos eius, accusamus saepe ad quos.",
      date: "May 12 2023",
    },
    {
      title: "How to record a phone call for a Podcast : 4 easy steps",
      img: "./images/article-2.jpg",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum quisquam fugiat veniam ullam totam provident ut eaque nobis doloribus, dignissimos eius, accusamus saepe ad quos.",
      date: "Juin 12 2023",
    },
    {
      title: "5 must have for creatinga stand-out podcast website",
      img: "./images/article-3.jpg",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum quisquam fugiat veniam ullam totam provident ut eaque nobis doloribus, dignissimos eius, accusamus saepe ad quos.",
      date: "Mars 12 2023",
    },
  ];
  return (
    <Container>
      <H1>Our Articles</H1>
      <ArticlesContainer>
        {articles.map((article, i) => (
          <ArticleItem key={i} {...article} />
        ))}
      </ArticlesContainer>
      <ButtonBox>
        <TryForFree>See all Articles</TryForFree>
      </ButtonBox>
    </Container>
  );
}

export default OurArticles;
