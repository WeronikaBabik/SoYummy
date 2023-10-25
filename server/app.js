const express = require("express");
const cors = require("cors");
const usersRouter = require("./users/users.router");

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.send("<h1>Hello World!</h1>");
});

app.use("/api/users", usersRouter);

app.listen(3001, () => {
  console.log("Our app listening on port 3001!");
});

// app.use((req, res, next) => {
//   console.log("Middleware test");
//   next();
// });
