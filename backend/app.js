const express = require("express");
const app = new express();
const morgan = require("morgan");
app.use(morgan("dev"));
const cors = require("cors");
app.use(cors());
app.use(express.json());
require("dotenv").config();
require("./db/connection");
const basicRoute = require("./routes/emailRoutes");
app.use("/email", basicRoute);

app.use(
  cors({
    origin: ['https://exit-test-wnau.vercel.app'],
    credentials: true,
    methods: ["GET", "POST"],
    allowedHeaders: ['Content-Type'],
  })
);
app.get("/", (req, res) => {
  res.send("API is running");
});
app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});