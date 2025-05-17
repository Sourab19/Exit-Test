import React from 'react'
import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import { useState } from "react";
import {  useNavigate } from "react-router-dom";
import axios from "axios";
const EmailPage = () => {
    const [email, setEmail] = useState("");
    const navigate = useNavigate();
    const handleLogin = (e) => {
    e.preventDefault();

    if (!email ) {
      alert("Please enter the email ");
      return;
    }
    const emailData = { email };

    axios
      .post("https://exit-test.vercel.app/email/send", emailData)
      .then((res) => {
        alert(res.data.message);
        navigate("/otp");
      })
      .catch((err) => {
        alert("Error: " + (err?.response?.data?.message || err.message ));
      });
  };
  return (
    <>
      <Box component="form" 
      onSubmit={handleLogin} 
      sx={{ flexGrow: 1 }}>
        <Grid
          container
          spacing={2}
          style={{ marginTop: "15%", marginLeft: "25%", width: "50%" }}
        >
          <Typography variant="h3" color="maroon" style={{ marginLeft: "25%" }}>
            Enter Your Email
          </Typography>

          <Grid size={12}>
            <TextField
              fullWidth
              variant="outlined"
              label="Email"
              onChange={(e) => setEmail(e.target.value)}
            ></TextField>
          </Grid>

          
          <Grid size={6}>
            <Button
              type="submit"
              variant="contained"
              color="secondary"
              style={{ marginLeft: "80%" }}
            >
              Submit
            </Button>
          </Grid>
          
        </Grid>
      </Box>
    </>
  )
}

export default EmailPage
