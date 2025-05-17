import React from "react";
import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const OtpPage = () => {
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const navigate = useNavigate();
  const handleLogin = (e) => {
    e.preventDefault();

    if (!email || !otp) {
      alert("Please enter both email and otp ");
      return;
    }
    const emailData = { email, otp };

    axios
      .post("http://localhost:3000/email/verify", emailData)
      .then((res) => {
        alert(res.data.message);
        navigate("/welcome");
      })
      .catch((err) => {
        alert("Error: " + (err?.response?.data?.message || err.message));
      });
  };
  return (
    <>
      <Box component="form" onSubmit={handleLogin} sx={{ flexGrow: 1 }}>
        <Grid
          container
          spacing={2}
          style={{ marginTop: "15%", marginLeft: "25%", width: "50%" }}
        >
          <Typography variant="h3" color="maroon" style={{ marginLeft: "20%" }}>
            Enter Both Email and Otp
          </Typography>

          <Grid size={12}>
            <TextField
              fullWidth
              variant="outlined"
              label="Email"
              onChange={(e) => setEmail(e.target.value)}
            ></TextField>
          </Grid>
          <Grid size={12}>
            <TextField
              fullWidth
              variant="outlined"
              label="Otp"
              onChange={(e) => setOtp(e.target.value)}
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
  );
};

export default OtpPage;
