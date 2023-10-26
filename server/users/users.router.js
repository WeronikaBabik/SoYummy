const express = require("express");
const { userValidation } = require("./user.validator");
const { User } = require("./user.model");
const router = express.Router();

router.post(
  "/signup",
  // (req, res, next) => userValidation(req, res, next),
  async (req, res, next) => {
    try {
      const { email, password } = req.body;
      console.log("email:", email, "password:", password);

      // const user = await User.findOne({ email });

      // if (!user) {
      // const salt = await bcrypt.genSalt(10);
      // const hash = await bcrypt.hash(password, salt);
      // const newUser = new User({
      //   email,
      //   password: hash,
      // });
      // await newUser.save();

      res.status(201).json({
        status: "Success",
        code: 201,
        user: {
          email,
        },
      });
    } catch (error) {
      // else {
      //   res.status(409).json({
      //     status: "Conflict",
      //     code: 409,
      //     message: "Email in use",
      //   });
      // }
      // }
      console.error(error.message);
      res.status(500).json({ status: "Internal Server Error", code: 500 });
    }
  }
);

router.post("/login", (req, res) => {
  const { email, password } = req.body;
  console.log("email:", email, "password:", password);
  res.send("<h2>Login page comes here</h2>");
});

module.exports = router;
