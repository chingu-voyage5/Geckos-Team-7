const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const keys = require("../../config/keys");
const jwt = require("jsonwebtoken");
const passport = require("passport");

// Load User model
const Board = require("../../models/Board");

// @route GET api/boards/test
// @desc Test users route
// @access Public
router.get("/test", (req, res) => res.json({ msg: "Boards Works" }));

// @route POST api/users/boards
// @desc Test users route
// @access Private
router.post(
  "/",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    const errors = res.json(errors);

    const newBoard = new Board({
      title: req.body.title,
      description: req.body.description,
      user: req.user.id
    });
  }
);
module.exports = router;
