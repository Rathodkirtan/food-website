const express = require("express");
const mongoose = require("mongoose");
const app = express();
const cors = require("cors");
const userRouter = require("./router/userRouter");
const dotenv = require("dotenv");

dotenv.config();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

try {
  mongoose.connect(process.env.Mongooseurl);
  console.log("connection success");
} catch (error) {
  console.log(error);
}

app.use("/user", userRouter);

app.listen(process.env.PORT, () => {
  console.log("server start");
});
