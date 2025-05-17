const express = require("express");
const nodemailer = require("nodemailer");
const router = express.Router();

const emailModel = require("../model/emailData");

router.use(express.json());
router.use(express.urlencoded({ extended: true }));

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "sourabberlin007@gmail.com",
    pass: "msjhxtrgfpoybnqj", 
  },
});
router.post("/send", async (req, res) => {
  const { email } = req.body;
  const otp = Math.floor(100000 + Math.random() * 900000).toString();

  try {

    await emailModel.create({ email, otp });
    await transporter.sendMail({
      to: email,
      subject: "OTP ",
      text: `OTP is ${otp}`,
    });

    res.status(200).send({ message: "OTP sent and saved to DB" });
  } catch (error) {
    console.error("Error sending OTP:", error);
    res.status(500).send({ message: "Internal server error" });
  }
});


router.post("/verify", async (req, res) => {
  const { email, otp } = req.body;

  try {
    const record = await emailModel.findOne({ email, otp });
    if (record) {
      return res.status(200).json({ message: "Email Logged in Successfully " });
    } else {
      return res.status(400).json({  message: "Invalid OTP" });
    }
  } catch (error) {
    console.error("Error verifying OTP:", error);
    return res.status(500).json({  message: "Server error" });
  }
});

module.exports = router;
