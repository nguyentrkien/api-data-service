const express = require("express");
const { body } = require("express-validator");

const Router = express.Router();

const AuthController = require("../app/controllers/AuthController");

//REGISTER
Router.post(
  "/register",
  // username must be an email
  body("email").isEmail(),
  // password must be at least 5 chars long
  body("password").isLength({ min: 5 }),
  AuthController.register
);

//LOG IN
Router.post("/login", AuthController.login);

module.exports = Router;
