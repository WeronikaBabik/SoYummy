const express = require("express");
const router = express.Router();

router.get("/signup", (req, res) => {
  res.send("<h1>Signup page comes here</h1>");
});

router.get("/login", (req, res) => {
  const { email, password } = req.body;
  console.log("email:", email, "password:", password);
  res.send("<h2>Login page comes here</h2>");
});

module.exports = router;
