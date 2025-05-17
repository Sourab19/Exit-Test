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

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});