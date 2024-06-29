"use client";
import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/navigation";
import { Box, Container, Grid, Typography, Paper, useTheme } from "@mui/material";
import { useDispatch } from "react-redux";
import Link from "next/link";
import Lottie from "lottie-react";
import loginAnimation from "../../lottie-animation/login.json";
import Toast from "../Toast";
import Cookies from "js-cookie";
import { loginUserFailure, loginUserSuccess } from "@/app/Redux/action/action";
import { loginservice } from "@/app/utils/services/loginService";

const LoginPage = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const theme = useTheme()
  const [login, setLogin] = useState({
    username: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!login.username || !login.password) {
      toast.error("Please fill in all the fields");
      return;
    }

    try {
      const response = await loginservice(login.username, login.password);
      console.log(response);
      Cookies.set("user", true);
      dispatch(loginUserSuccess(response));
      toast.success("Logged in successfully");
      router.push("/");
    } catch (error) {
      toast.error("Login failed");
      Cookies.set("user", false);
      dispatch(loginUserFailure());
      console.log(error);
    }
  };


  return (
    <>
      <div style={{ paddingTop: "150px",paddingBottom: "180px", background: theme.palette.background.page }} className="min-h-screen px-20">
        <Toast />
        <Grid container spacing={2} sx={{ justifyContent: 'center' }}>
          <Grid item xs={12} md={6}>
            <Box>
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
            }}
          >
            <form onSubmit={handleSubmit}>
              <Typography sx={{color: theme.palette.background.headline}} variant="h5" align="center" >
                Login
              </Typography>
              <TextField
                label="Username"
                fullWidth
                variant="outlined"
                onChange={(e) =>
                  setLogin({
                    ...login,
                    username: e.target.value,
                  })
                }
                value={login.username}
                margin="normal"
              />
              <TextField
                fullWidth
                label="Password"
                type="password"
                variant="outlined"
                onChange={(e) =>
                  setLogin({
                    ...login,
                    password: e.target.value,
                  })
                }
                value={login.password}
                margin="normal"
              />
              <Button
                variant="contained"
                type="submit"
                fullWidth
                sx={{
                  mt: 2,
                  background: theme.palette.background.button,
                  "&:hover": { backgroundColor: "#0069d9" },
                  color: theme.palette.background.text,
                }}
              >
                Login
              </Button>
              <Typography align="center" sx={{ mt: 2, mr: 2, color: theme.palette.background.headline }}>
                Don't have an account? <Link href="/signup">Sign up</Link>
              </Typography>
            </form>
          </Grid>
        </Grid>
      </div>
    </>
  );
};

export default LoginPage;