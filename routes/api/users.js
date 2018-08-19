const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const keys = require("../../config/keys");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const passport = require("passport");

//Load Input Validation
const validateRegisterInput = require("../../validation/register");
const validateLoginInput = require("../../validation/login");

// Load User model
const User = require("../../models/User");
const Board = require("../../models/Board");
const Pin = require("../../models/Pin");

// @route GET api/users/test
// @desc Test users route
// @access Public
router.get("/test", (req, res) => res.json({ msg: "Users Works" }));
const errors = {};

// @route GET api/users
// @desc Get all users
// @access Public
router.get("/", (req, res) => {
  User.find()
    .select("-password") //Excludes user password from the response
    .populate({
      path: "user.boards.board",
      model: "board",
      select: "title description"
    })
    .then(users => {
      res.status(200).json(users);
    });
});
// @route GET api/users/register
// @desc Get users
// @access Public
router.post("/register", (req, res) => {
  console.log("req.body is", req.body);
  const { errors, isValid } = validateRegisterInput(req.body);
  User.findOne({ email: req.body.email }).then(user => {
    if (!isValid) {
      return res.status(400).json(errors);
    }
    if (user) {
      errors.email = "There is already an account associated with this email";
      return res.status(400).json(errors);
    } else {
      const newUser = new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
      });

      // I like my passwords like I like my fries salted
      // But seriously this code block encrypts the users password

      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
          if (err) throw err;
          newUser.password = hash;
          newUser
            .save()
            .then(user => res.json(user))
            .catch(err => console.log(err));
        });
      });
    }
  });

});

// @route POST api/users/login
// @desc Login User / Returning JWT Token
// @access Public
router.post("/login", (req, res) => {
  console.log("req.body is", req.body);
  const { errors, isValid } = validateLoginInput(req.body);

  //Check validation
  if (!isValid) {
    return res.status(400).json(errors);
  }

  const email = req.body.email;
  const password = req.body.password;

  //Find user by email
  User.findOne({ email }).then(user => {
    //Check for user
    if (!user) {
      errors.email = "User not found";
      return res.status(404).json(errors);
    }

    //Check Password
    bcrypt.compare(password, user.password).then(isMatch => {
      if (isMatch) {
        //User Matched

        const payload = { id: user.id, name: user.name }; //Create JWT Payload

        //Sign Token
        jwt.sign(
          payload,
          keys.secretOrKey,
          (err, token) => {
            res.json({
              success: true,
              token: token,
              id: user.id
            });
          }
        );
      } else {
        errors.password = "Password incorrect";
        return res.status(400).json(errors);
      }
    });
  });
});

module.exports = router;
