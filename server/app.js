const express = require("express");
const cors = require("cors");
const { userRouter } = require("./users/users.router");

const app = express();

app.use(express.json());
app.use(cors());

app.use("/api", userRouter);

module.exports = {
  app,
};
