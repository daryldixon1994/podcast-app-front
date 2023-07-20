import React, { useState } from "react";
import { Form, Input, Button, Icon } from "semantic-ui-react";
import tw from "twin.macro";
import { useRouter } from "next/navigation";
import axios from "axios";
import Swal from "sweetalert2";

const Container = tw.div`box-border lg:mt-8`;
const Line = tw.div`h-0.5 bg-slate-400 w-[48%]`;
const Or = tw.div`text-xl font-comfort font-bold `;
const GoogleAuthContainer = tw.div`box-border mt-8 flex flex-col items-center`;
const Box = tw.div`flex items-center gap-[15px] w-[100%]`;
function NarratorRegister() {
  const [newNarrator, setNewNarrator] = useState({});
  const [error, setError] = useState();
  const router = useRouter();
  const handleChange = (e) => {
    setNewNarrator({ ...newNarrator, [e.target.name]: e.target.value });
  };
  const handelLogin = () => {
    axios
      .post(
        "https://podcast-app-fqku.onrender.com/api/narrator/register",
        newNarrator
      )
      .then((res) => {
        if (res.data.status) {
          Swal.fire({
            title: res.data.message,
            width: 600,
            padding: "3em",
            color: "#212121",
            icon: "success",
            confirmButtonText: "Continue",
            background: "#fff url(/images/trees.png)",
          }).then((result) => {
            if (result.isConfirmed) {
              return router.push("/login");
            }
          });
        }
      })
      .catch((err) => {
        setError(err.response.data.error);
        console.dir(err);
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
          id="form-input-control-first-name"
          control={Input}
          label="Your Name"
          placeholder="Your name"
          name="narratorName"
          required
          error={
            error?.includes("Narrator") && {
              content: error,
              pointing: "below",
            }
          }
        />
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
            error?.includes("Password") && {
              content: error,
              pointing: "below",
            }
          }
          required
          type="password"
        />
        <Form.Field
          id="form-input-control-first-name"
          control={Input}
          label="Confirm Password"
          placeholder="Confirm Password"
          type="password"
          name="confirm_password"
          error={
            error?.includes("Confirm") && {
              content: error,
              pointing: "below",
            }
          }
          required
        />
        <Form.TextArea
          label="About"
          placeholder="Tell us more about you..."
          name="bio"
          error={
            error?.includes("Bio") && {
              content: error,
              pointing: "below",
            }
          }
          required
        />
        <Button
          positive
          disabled={
            newNarrator.email &&
            newNarrator.narratorName &&
            newNarrator.password &&
            newNarrator.confirm_password
              ? false
              : true
          }
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
          <Icon name="google" /> Sign up with google
        </Button>
      </GoogleAuthContainer>
    </Container>
  );
}

export default NarratorRegister;
