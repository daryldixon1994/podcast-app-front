import React from "react";
import tw from "twin.macro";
import Footer from "./Footer/Footer";
import Hero from "./hero/Hero";
import SectionOne from "./SectionOne/SectionOne";
import SectionTwo from "./sectionTwo/SectionTwo";
import SectionThree from "./sectionThree/SectionThree";
import SectionFour from "./sectionFour/SectionFour";
import SectionFive from "./sectionFive/SectionFive";
import OurArticles from "./articles/OurArticles";
import FreeTrial from "./freeTrial/FreeTrial";

const Container = tw.div``;
const Main = tw.main`box-border max-w-screen-xl mx-auto`;
function LandingPage() {
  return (
    <Container>
      <Hero />
      <Main>
        <SectionOne />
        <SectionTwo />
        <SectionThree />
        <SectionFour />
        <SectionFive />
        <OurArticles />
        <FreeTrial />
      </Main>
    </Container>
  );
}

export default LandingPage;
