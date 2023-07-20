"use client";
import React from "react";
import tw from "twin.macro";
import PodcastItem from "./PodcastItem";

const Container = tw.div`box-border border-2 border-fuchsia-800 p-6`;
const H1 = tw.h1`font-poppins text-xl`;
function NarratorPodcasts() {
  return (
    <Container>
      <H1>My list :</H1>
      <PodcastItem />
    </Container>
  );
}

export default NarratorPodcasts;
