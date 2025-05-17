import { Typography } from "@mui/material";
import React from "react";
import NavBar from "./NavBar";

const WelcomePage = () => {
  return (
    <>
    <NavBar />
      <Typography
        variant="h3"
        component="h2"
        style={{ textAlign: "center", mx: "auto", marginTop: "300px" ,color:"purple"}}
      >
        Welcome, Otp Verification is successful
      </Typography>
    </>
  );
};

export default WelcomePage;
