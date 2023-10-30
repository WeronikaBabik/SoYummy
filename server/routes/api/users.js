const express = require("express");
const { User } = require("../../models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { invalidateToken } = require("../../auth/auth.middleware");
const router = express.Router();
const nodemailer = require("nodemailer");
const dotenv = require("dotenv");
const { userValidation } = require("../../helpers/user.validator");
dotenv.config();

const secretKey = process.env.MAILER_KEY;
const secretJwt = process.env.JWT_KEY;

const mainTransporter = nodemailer.createTransport({
  service: "gmail",
  host: "smtp.gmail.com",
  port: 587,
  auth: {
    user: "yummygoit.project4@gmail.com",
    pass: secretKey,
  },
  secure: true,
});

router.post("/signup", userValidation, async (req, res, next) => {
  try {
    const { email, password } = req.body;
    console.log("email:", email, "password:", password);

    const user = await User.findOne({ email });

    if (!user) {
      const salt = await bcrypt.genSalt(10);
      const hash = await bcrypt.hash(password, salt);
      const newUser = new User({ email, password: hash });
      await newUser.save();

      res.status(201).json({
        status: "Success",
        code: 201,
        user: {
          email,
        },
      });
    } else {
      res
        .status(409)
        .json({ status: "Conflict", code: 409, message: "Email in use" });
    }
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ status: "Internal Server Error", code: 500 });
  }
});

router.post("/login", userValidation, async (req, res) => {
  try {
    const { email, password } = req.body;
    console.log("Login", "email:", email, "password:", password);
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(401).json({
        status: "Unauthorized",
        code: 401,
        message: "Email or password is wrong",
      });
    } else {
      const passwordComparison = await bcrypt.compare(password, user.password);
      if (!passwordComparison) {
        return res.status(401).json({
          status: "Unauthorized",
          code: 401,
          message: "Email or password is wrong",
        });
      } else {
        console.log("user._id", user._id);
        const token = jwt.sign({ userId: user._id }, secretJwt, {
          expiresIn: "4w",
        });

        res.status(200).json({
          status: "Success",
          code: 200,
          message: "Successful login!",
          token,
          user: { email },
        });
      }
    }
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ status: "Internal Server Error", code: 500 });
  }
});

router.post("/logout", (req, res) => {
  try {
    invalidateToken(req.token);
    res.status(200).json({
      message: "ok",
    });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ status: "Internal Server Error", code: 500 });
  }
});

router.get("/current", async (req, res) => {
  try {
    if (!currentUserData) {
      return res.status(401).json({
        status: "Unauthorized",
        code: 401,
        message: "No data here",
      });
    } else {
      res.status(200).json({
        status: "OK",
        code: 200,
        currentUserData,
      });
    }
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ status: "Internal Server Error", code: 500 });
  }
});

router.patch("/update", async (req, res) => {
  try {
    //test variables:
    // const user = undefined;
    const user = { email: "test@mail.com" };
    console.log("log1", user);
    if (!user) {
      return res
        .status(401)
        .json({ message: "Unauthorized: no user authentication" });
    }
    try {
      const { email } = req.body;
      const updatedUser = { email: email };
      console.log("log2", updatedUser);
      return res.status(200).send({
        status: "OK",
        code: 200,
        updatedUser,
      });
    } catch (error) {
      console.error(error);
      return null;
    }
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ status: "Internal Server Error", code: 500 });
  }
});

router.patch("/subscribe", async (req, res) => {
  try {
    const email = req.body;

    const mailOptions = {
      from: "yummy.project4@gmail.com",
      // to: email,
      to: "janicki.jonasz@gmail.com", //edit to Variable "email" - position 126
      subject: "So Yummy - NewsLetter",
      text: `You've been written as a users who want a newsletter!`,
    };
    try {
      const info = await mainTransporter.sendMail(mailOptions);
      console.log("The newsletter email has been sent:", info.response);
      return res.status(200).json({
        status: "OK",
        code: 200,
      });
    } catch (error) {
      console.log("Error while sending newsletter email:", error);
      return;
    }
  } catch (error) {
    console.error(error.message);
    return res.status(500).json({ status: "Internal Server Error", code: 500 });
  }
});

module.exports = router;
