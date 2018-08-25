const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const keys = require("../../config/keys");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const passport = require("passport");

// Load User model
const Board = require("../../models/Board");
const User = require("../../models/User");
// Validation
const validateBoardInput = require("../../validation/board");

// @route GET api/boards/test
// @desc Test users route
// @access Public
router.get("/test", (req, res) => res.json({ msg: "Boards Works" }));

// @route POST api/boards
// @desc Let's logged in user create a new board
// @access Private
router.post(
  "/",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    const { errors, isValid } = validateBoardInput(req.body);

    // Check Validation
    if (!isValid) {
      // If any errors, send 400 with errors object
      return res.status(400).json(errors);
    }
    const user = req.user.id;

    const newBoard = new Board({
      title: req.body.title,
      description: req.body.description,
      user
    });

    newBoard.save().then(board => {
      User.findById(req.user.id, function(err, user) {
        if (err) throw err;
        user.boards.unshift(board);
        user.save();
      });
    }, res.status(201).json({ message: "Board Created" }));
  }
);

// @route GET api/boards/
// @desc Get all boards
// @access Public
router.get("/", (req, res) => {
  Board.find().then(board => {
    res.status(200).json(board);
  });
});

// @route Delete api/boards/:id
// @desc Delete Board
// @access Private
router.delete(
  "/:id",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    User.findById(req.user.id).then(user => {
      Board.findById(req.params.id)
        .then(board => {
          //Check for board Owner
          if (board.user.toString() !== req.user.id) {
            return res
              .status(401)
              .json({ notauthorized: "User not authorized" });
          }

          const removeIndex = user.boards
            .map(user => req.user.id)
            .indexOf(req.params.id);
          user.boards.splice(removeIndex, 1);
          user.save();
          //Delete
          board.remove().then(() => res.json({ success: true }));
        })
        .catch(err =>
          res.status(404).json({ notauthorized: "User not authorized" })
        );
    });
  }
);

// @route GET api/boards/current
// @desc Get boards of the current user
// @access Private
router.get(
  "/current",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    const errors = {};

    Board.find({ user: req.user.id })
      .then(boards => {
        if (!boards) {
          errors.noboards = "This user does not have any boards";
          return res.status(404).json(errors);
        }
        res.status(200).json(boards);
      })
      .catch(err => res.status(404).json(err));
  }
);

// @route POST api/boards/follow/:id
// @desc Follow a post
// @access Private

router.post(
  "/follow/:id",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    Board.findById(req.params.id).then(board => {
      if (
        board.follows.filter(follow => follow.toString() !== req.user.id)
          .length > 0
      ) {
        return res
          .status(400)
          .json({ alreadyliked: "User has already followed this board" });
      }

      board.follows.unshift(req.user.id);
      board.save().then(res.json(board));
    });
  }
);

// @route POST api/boards/unlike/:id
// @desc Unfollow Board
// @access Private

router.post(
  "/unfollow/:id",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    const user = req.user.id;
    Board.findById(req.params.id).then(board => {
      if (board.follows.filter(user => req.user.id).length == 0) {
        return res
          .status(400)
          .json({ notfollowed: "You have not yet followed this board" });
      }

      //Get remove index
      const removeIndex = board.follows
        .map(user => req.user.id)
        .indexOf(req.user.id);

      //Splice out of array
      board.follows.splice(removeIndex, 1);

      board.save().then(board => res.json(board));
    });
  }
);
module.exports = router;
