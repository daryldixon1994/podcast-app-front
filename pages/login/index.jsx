"use client";
import { Form, Checkbox } from "semantic-ui-react";
import Link from "next/link";
import React, { useEffect } from "react";
import tw from "twin.macro";
import LoginUser from "@/components/forms/LoginUser";
import LoginNarrator from "@/components/forms/LoginNarrator";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

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
function Login() {
  const [value, setValue] = React.useState("User");
  const session = useSession();
  const router = useRouter();

  useEffect(() => {
    if (session.status === "authenticated") {
      return router.push("/user-dashboard/feeds");
    }
  }, [router, session.status]);
  // if (session.status === "unauthenticated") {
  //   return router.push("/user-dashboard/feeds");
  // }

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
          <H1>You need an account?</H1>
          <H2>
            <LoginBox>
              <Link href="/register" style={{ all: "unset" }}>
                Register
              </Link>
            </LoginBox>{" "}
            now.
          </H2>
        </Heads>
        <Form>
          <Role>Login as :</Role>
          <Form.Field>
            <Checkbox
              radio
              label="A Listener"
              name="checkboxRadioGroup"
              value="User"
              checked={value === "User"}
              onChange={(e, data) => setValue(data.value)}
            />
          </Form.Field>
          <Form.Field>
            <Checkbox
              radio
              label="A Narrator"
              name="checkboxRadioGroup"
              value="Narrator"
              checked={value === "Narrator"}
              onChange={(e, data) => setValue(data.value)}
            />
          </Form.Field>
        </Form>
        {value === "User" ? <LoginUser /> : <LoginNarrator />}
      </RegisterContainer>
      <IllusContainer id="register-bg-illus" />
    </Container>
  );
}

export default Login;
