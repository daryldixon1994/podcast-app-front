"use client";
import { Form, Checkbox } from "semantic-ui-react";
import Link from "next/link";
import React from "react";
import tw from "twin.macro";
import RegisterUser from "@/components/forms/RegisterUser";
import RegisterNarrator from "@/components/forms/RegisterNarrator";
// import { useSession } from "next-auth/react";
// import { useRouter } from "next/router";
// import { useRouter } from "next/router";

const Container = tw.div`box-border lg:h-[100vh] lg:flex`;
const RegisterContainer = tw.div`box-border lg:w-[35%] p-4 overflow-y-scroll`;
const IllusContainer = tw.div`box-border lg:w-[65%]`;
const Nav = tw.nav`box-border `;
const Logo = tw.span`text-4xl font-right font-bold cursor-pointer`;
const Heads = tw.div`box-border lg:mt-8`;
const H1 = tw.h1`font-cairo  text-5xl lg:mb-2`;
const H2 = tw.h2`font-cairo  text-2xl`;
const LoginBox = tw.span`text-[#07de99] hover:underline cursor-pointer`;
const Role = tw.p`font-cairo font-bold text-2xl`;
export const metadata = {
  title: "Register",
};
function Register() {
  const [value, setValue] = React.useState("User");
  // const router = useRouter();
 
  return (
    <Container>
      <RegisterContainer>
        <Nav>
          <Logo>
            <Link href="/" style={{ all: "unset" }}>
              podcasa
            </Link>
          </Logo>
        </Nav>
        <Heads>
          <H1>Create your account</H1>
          <H2>
            You already have account?{" "}
            <LoginBox>
              <Link href="/login" style={{ all: "unset" }}>
                Login in
              </Link>
            </LoginBox>
          </H2>
        </Heads>
        <Form>
          <Role>Who are you?</Role>
          <Form.Field>
            <Checkbox
              radio
              label="I am a Listener"
              name="checkboxRadioGroup"
              value="User"
              checked={value === "User"}
              onChange={(e, data) => setValue(data.value)}
            />
          </Form.Field>
          <Form.Field>
            <Checkbox
              radio
              label="I am a Narrator"
              name="checkboxRadioGroup"
              value="Narrator"
              checked={value === "Narrator"}
              onChange={(e, data) => setValue(data.value)}
            />
          </Form.Field>
        </Form>
        {value === "User" ? <RegisterUser /> : <RegisterNarrator />}
      </RegisterContainer>
      <IllusContainer id="register-bg-illus" />
    </Container>
  );
}

export default Register;
