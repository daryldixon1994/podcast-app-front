"use client";
import React, { useState } from "react";
import { Form, Input, Button, Icon } from "semantic-ui-react";
import tw from "twin.macro";
import axios from "axios";
import Swal from "sweetalert2";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

const Container = tw.div`box-border lg:mt-8`;
const Line = tw.div`h-0.5 bg-slate-400 w-[48%]`;
const Or = tw.div`text-xl font-comfort font-bold `;
const GoogleAuthContainer = tw.div`box-border mt-8 flex flex-col items-center`;
const Box = tw.div`flex items-center gap-[15px] w-[100%]`;

function LoginUser() {
  const [newUser, setNewUser] = useState({});
  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);

  const router = useRouter();
  const handleChange = (e) => {
    setNewUser({ ...newUser, [e.target.name]: e.target.value });
  };
  const handelLogin = () => {
    setLoading(true);

    axios
      .post("https://podcast-app-fqku.onrender.com/api/user/login", newUser)
      .then((res) => {
        if (res.data.status) {
          localStorage.setItem("id", res.data.data.id);
          localStorage.setItem("isUser", res.data.data.isUser);
          localStorage.setItem("isBanned", res.data.data.isBanned);
          localStorage.setItem("isVerified", res.data.data.isVerified);
          localStorage.setItem("token", res.data.token);
          setLoading(true);
          router.push("/user-dashboard/feeds");
        }
        // if (res.data.status) {
        //   Swal.fire({
        //     title: "res.data.message",
        //     width: 600,
        //     padding: "3em",
        //     color: "#212121",
        //     icon: "success",
        //     confirmButtonText: "Continue",
        //     background: "#fff url(/images/trees.png)",
        //   }).then((result) => {
        //     if (result.isConfirmed) {
        //       return router.push("/login");
        //     }
        //   });
        // }
      })
      .catch((err) => {
        setError(err.response.data.error);
        setLoading(false);
      });
  };
  const session = useSession();
  if (session.status === "authenticated") {
    return router.push("/user-dashboard/feeds");
  }
  return (
    <Container>
      <Form
        onChange={(e) => {
          handleChange(e);
        }}
        size="large"
      >
        <Form.Field
          id="form-input-control-error-email"
          control={Input}
          label="Email"
          placeholder="joe@schmoe.com"
          name="email"
          error={
            (error?.includes("email") || error?.includes("Email")) && {
              content: error,
              pointing: "below",
            }
          }
          required
        />
        <Form.Field
          id="form-input-control-first-name"
          control={Input}
          label="Password"
          placeholder="Password"
          name="password"
          required
          error={
            error?.includes("password") && {
              content: error,
              pointing: "below",
            }
          }
          type="password"
        />

        <Button
          positive
          loading={loading}
          disabled={newUser.email && newUser.password ? false : true}
          onClick={() => {
            handelLogin();
          }}
        >
          Login
        </Button>
      </Form>
      <hr />
      <GoogleAuthContainer>
        <Box>
          <Line />
          <Or>Or</Or>
          <Line />
        </Box>
        <Button
          color="google plus"
          onClick={() => {
            signIn("google");
          }}
        >
          <Icon name="google" /> Sign in with google
        </Button>
      </GoogleAuthContainer>
    </Container>
  );
}

export default LoginUser;
