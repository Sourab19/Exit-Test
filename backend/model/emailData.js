const mongoose = require("mongoose");

const emailSchema = new mongoose.Schema({
  email: String,
  otp: String,
  createdAt: { type: Date, default: Date.now },
});

const emailData = mongoose.model("email", emailSchema);
module.exports = emailData;
