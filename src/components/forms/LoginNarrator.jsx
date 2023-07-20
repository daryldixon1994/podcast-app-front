import React, { useState } from "react";
import { Form, Input, Button, Icon } from "semantic-ui-react";
import tw from "twin.macro";
import { useRouter } from "next/router";
import axios from "axios";
// import Swal from "sweetalert2";

const Container = tw.div`box-border lg:mt-8`;
const Line = tw.div`h-0.5 bg-slate-400 w-[48%]`;
const Or = tw.div`text-xl font-comfort font-bold `;
const GoogleAuthContainer = tw.div`box-border mt-8 flex flex-col items-center`;
const Box = tw.div`flex items-center gap-[15px] w-[100%]`;
function LoginNarrator() {
  const [newNarrator, setNewNarrator] = useState({});
  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const handleChange = (e) => {
    setNewNarrator({ ...newNarrator, [e.target.name]: e.target.value });
  };
  const handelLogin = () => {
    setLoading(true);
    axios
      .post(
        "https://podcast-app-fqku.onrender.com/api/narrator/login",
        newNarrator
      )
      .then((res) => {
        
        if (res.data.status) {
          localStorage.setItem("id", res.data.data.id);
          localStorage.setItem("isNarrator", res.data.data.isNarrator);
          localStorage.setItem("isBanned", res.data.data.isBanned);
          localStorage.setItem("isVerified", res.data.data.isVerified);
          localStorage.setItem("token", res.data.data.token);
          setLoading(false);
          router.push("/narrator/feeds");
        }
      })
      .catch((err) => {
        setError(err.response.data.error);
          setLoading(false);

      });
  };
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
          error={
            error?.includes("password") && {
              content: error,
              pointing: "below",
            }
          }
          required
          type="password"
        />
        <Button
          positive
          loading={loading}
          disabled={newNarrator.email && newNarrator.password ? false : true}
          onClick={() => {
            handelLogin();
          }}
        >
          Save
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

export default LoginNarrator;
