import React, { useState } from "react";
import tw from "twin.macro";
import Link from "next/link";
import { TfiClose, TfiMenu } from "react-icons/tfi";
const Container = tw.div`box-border p-4 hidden lg:flex items-center justify-around sticky z-10 top-0 bg-[#07de99]`;
const MobileContainer = tw.div`box-border lg:hidden sticky z-10 top-0 bg-[#07de99]`;
const Logo = tw.h2`text-4xl font-right font-bold `;
const MobileLogoContainer = tw.div`lg:hidden flex items-center justify-between px-4 py-2`;
const Ul = tw.ul`box-border flex justify-around lg:w-[40%]`;
const UlMobile = tw.ul`box-border flex justify-around lg:w-[40%]`;
const Li = tw.li`text-[#241f21] font-orbit font-bold text-[1.15rem] border-b-[2px] border-b-transparent hover:border-b-[2px] hover:border-b-[#f3eff5] hover:cursor-pointer hover:text-[#f3eff5]`;
const LiMobile = tw.li`text-[#07de99] font-orbit font-bold text-[1.15rem] border-b-[2px] border-b-transparent hover:border-b-[2px] hover:border-b-[#f3eff5] hover:cursor-pointer hover:text-[#f3eff5]`;
const Connect = tw.div`lg:w-[18%] flex justify-between items-center`;
const ConnectMobile = tw.div`lg:w-[18%] flex justify-between items-center p-2`;
const Login = tw.span`font-orbit font-bold text-[1.15rem] text-[#241f21] border-b-[2px] border-b-transparent hover:border-b-[2px] hover:border-b-[#f3eff5] hover:cursor-pointer hover:text-[#f3eff5]`;
const LoginMobile = tw.span`font-orbit font-bold text-[1.15rem] text-[#07de99] border-b-[2px] border-b-transparent hover:border-b-[2px] hover:border-b-[#f3eff5] hover:cursor-pointer hover:text-[#f3eff5]`;
const GetSarted = tw.span`font-orbit font-bold text-[1.15rem] text-[#241f21] border-2 border-[#241f21] p-2 hover:bg-[#241f21] hover:text-[#f3eff5] hover:cursor-pointer`;
const GetSartedMobile = tw.span`font-orbit font-bold text-[1.15rem] text-[#07de99] border-2 border-[#07de99] p-2 hover:bg-[#241f21] hover:text-[#f3eff5] hover:cursor-pointer`;
const ListMobile = tw.div`mt-4 transition duration-700 ease-in-out border-2 border-black px-2 bg-black`;
function LandingPageNavBar() {
  const [show, setShow] = useState(false);
  return (
    <>
      <Container id="top">
        {/* <Nav> */}
        <Logo>podcasa</Logo>
        <Ul>
          <Li>Home</Li>
          <Li>Episodes</Li>
          <Li>Features</Li>
          <Li>About</Li>
          <Li>Blog</Li>
        </Ul>
        <Connect>
          <Login>
            <Link href="/login">Login</Link>
          </Login>
          <GetSarted>
            <Link href="/register">Get Started</Link>
          </GetSarted>
        </Connect>
      </Container>
      <MobileContainer>
        <MobileLogoContainer>
          <Logo>podcasa</Logo>
          {show ? (
            <TfiClose
              size={25}
              onClick={() => {
                setShow(!show);
              }}
            />
          ) : (
            <TfiMenu
              size={25}
              onClick={() => {
                setShow(!show);
              }}
            />
          )}
        </MobileLogoContainer>
        {show && (
          <ListMobile>
            <UlMobile>
              <LiMobile>Home</LiMobile>
              <LiMobile>Episodes</LiMobile>
              <LiMobile>Features</LiMobile>
              <LiMobile>About</LiMobile>
              <LiMobile>Blog</LiMobile>
            </UlMobile>
            <ConnectMobile>
              <LoginMobile>
                <Link href="/login">Login</Link>
              </LoginMobile>
              <GetSartedMobile>
                <Link href="/register">Get Started</Link>
              </GetSartedMobile>
            </ConnectMobile>
          </ListMobile>
        )}
      </MobileContainer>
      {/* </Nav> */}
    </>
  );
}

export default LandingPageNavBar;
