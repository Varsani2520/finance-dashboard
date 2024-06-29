"use client";
import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useRouter } from "next/navigation";
import { Container, Grid, Paper, TextField, useTheme } from "@mui/material";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Link from "next/link";
import Toast from "../Toast";
import Lottie from "lottie-react";
import loginAnimation from "../../lottie-animation/login.json";
import { signupservice } from "@/app/utils/services/SignupService";

const SignUp = () => {
  const router = useRouter();
  const theme = useTheme()
  const [signup, setSignup] = useState({
    username: "",
    password: "",
    name: "",
    address: "",
  });
  async function handleSubmit(e) {
    e.preventDefault();
    if (
      !signup.username ||
      !signup.password ||
      !signup.name ||
      !signup.address
    ) {
      toast.error("please fill in all the field");
    }
    try {
      const response = await signupservice(
        signup.username,
        signup.password,
        signup.name,
        signup.address
      );
      console.log(response);
      toast.success("Account Created Successfully");
      router.push("/pages/login");
    } catch (error) {
      toast.error("Failed to Create Account");
      console.log(error);
    }
  }
  return (
    <Container>
      <div style={{ paddingTop: "100px", paddingBottom: "180px", color: theme.palette.background.text,  }}>
        <ToastContainer />
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <Box sx={{ display: { xs: "none", md: "block" } }}>
              <Lottie animationData={loginAnimation} style={{ height: '500px' }} />
            </Box>
          </Grid>
          <Grid
            item
            xs={12}
            md={6}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              paddingBottom: "30px",
            }}
          >
            {/* <Paper
              sx={{
                padding: 4,
                maxWidth: 400,
                width: "100%",
                backgroundColor: "white",
                borderRadius: 8,
              }}
            > */}
            <form onSubmit={handleSubmit}>
              <Typography component="h1" variant="h4" mb={4}>
                Create Account
              </Typography>
              <TextField
                label="Username"
                variant="outlined"
                fullWidth
                onChange={(e) =>
                  setSignup({
                    ...signup,
                    username: e.target.value,
                  })
                }
                value={signup.username}
                margin="normal"
              />
              <TextField
                label="Password"
                fullWidth
                type="password"
                variant="outlined"
                onChange={(e) =>
                  setSignup({
                    ...signup,
                    password: e.target.value,
                  })
                }
                value={signup.password}
                margin="normal"
              />
              <TextField
                label="name"
                fullWidth
                variant="outlined"
                onChange={(e) =>
                  setSignup({
                    ...signup,
                    name: e.target.value,
                  })
                }
                value={signup.name}
                margin="normal"
              />
              <TextField
                fullWidth
                label="address"
                variant="outlined"
                onChange={(e) =>
                  setSignup({
                    ...signup,
                    address: e.target.value,
                  })
                }
                value={signup.address}
                margin="normal"
              />
              <Button
                fullWidth
                variant="contained"
                color="secondary"
                type="submit"
                sx={{
                  mt: 2,
                  background: theme.palette.background.button,
                  "&:hover": { backgroundColor: "#0069d9" },
                  color: theme.palette.background.text,
                }}                >
                Create Account
              </Button>
              <Typography align="center" sx={{ mt: 2 }}>
                are you already logged in?{" "}
                <Link href="/login">Login</Link>
              </Typography>
            </form>
            {/* </Paper> */}
          </Grid>
        </Grid>
      </div>
    </Container>
  );
};

export default SignUp;