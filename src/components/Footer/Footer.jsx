import React from "react";
import tw from "twin.macro";
import {
  BiLogoFacebook,
  BiLogoInstagramAlt,
  BiLogoLinkedinSquare,
} from "react-icons/bi";
import { BsTwitter } from "react-icons/bs";
const FooterContainer = tw.div`box-border min-h-[420px] bg-[#eaeaea] px-4 lg:py-12 py-8`;
const Head = tw.div`box-border flex lg:flex-row flex-col justify-around gap-[30px] lg:gap-0`;
const Down = tw.div`box-border lg:w-[57%] lg:mx-auto my-12`;
const Logo = tw.h2`lg:text-4xl text-3xl font-right font-bold mb-4 lg:mb-0`;
const Ul1 = tw.ul`box-border flex flex-col gap-[20px]`;
const Li = tw.li`w-fit text-[#241f21] font-orbit font-bold lg:text-[1.15rem] text-[1rem] cursor-pointer border-b-4 border-b-transparent hover:border-b-[#241f21]`;
const H1 = tw.h1`font-orbit font-black lg:text-[1.25rem] text-[1rem] text-[#241f21]`;
const SocialItem = tw.div`box-border p-2 rounded-full border-2 border-[#07de99] hover:bg-[#07de99] cursor-pointer hover:text-[#eaeaea]`;
const SocialContainer = tw.div`box-border hidden lg:flex gap-2 mt-4`;
const SocialContainerMobile = tw.div`box-border flex lg:hidden gap-2 mt-4`;
const Bottom = tw.div`box-border text-[#757575] flex justify-center items-center border-t-2 border-t-slate-300 `;
const P = tw.p`mt-4`;
function Footer() {
  return (
    <FooterContainer>
      <Head>
        <Logo>podcasa</Logo>
        <Ul1>
          <Li>Home</Li>
          <Li>Episodes</Li>
          <Li>Features</Li>
          <Li>About</Li>
          <Li>Blog</Li>
        </Ul1>
        <Ul1>
          <Li>Terms and Conditions</Li>
          <Li>Privacy Policy</Li>
          <Li>Privacy Policy for Listeners</Li>
          <Li>Cookie Policy</Li>
        </Ul1>
        <Ul1>
          <Li>What&apos;s new</Li>
          <Li>Creator Program</Li>
          <Li>Affiliate Program</Li>
          <Li>Platform Stats</Li>
        </Ul1>
        <Ul1>
          <Li>Pricing</Li>
          <Li>Wordpress Plugin</Li>
          <Li>Press Kit</Li>
          <Li>Help</Li>
        </Ul1>
      </Head>
      <Down>
        <H1>Follow for podcast and marketing insights</H1>
        <SocialContainer>
          <SocialItem>
            <BiLogoFacebook size={25} color="#241f21" />
          </SocialItem>
          <SocialItem>
            <BsTwitter size={25} color="#241f21" />
          </SocialItem>
          <SocialItem>
            <BiLogoLinkedinSquare size={27} color="#241f21" />
          </SocialItem>
          <SocialItem>
            <BiLogoInstagramAlt size={27} color="#241f21" />
          </SocialItem>
        </SocialContainer>
        <SocialContainerMobile>
          <SocialItem>
            <BiLogoFacebook size={15} color="#241f21" />
          </SocialItem>
          <SocialItem>
            <BsTwitter size={15} color="#241f21" />
          </SocialItem>
          <SocialItem>
            <BiLogoLinkedinSquare size={17} color="#241f21" />
          </SocialItem>
          <SocialItem>
            <BiLogoInstagramAlt size={17} color="#241f21" />
          </SocialItem>
        </SocialContainerMobile>
      </Down>
      <Bottom>
        <P>Copyright 2023 PODKASA PRODUCTION. All rights reserved</P>
      </Bottom>
    </FooterContainer>
  );
}

export default Footer;
