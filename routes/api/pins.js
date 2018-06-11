const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const keys = require("../../config/keys");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const passport = require("passport");

// Load Models
const Pin = require("../../models/Pin");
const Board = require("../../models/Board");
const User = require("../../models/User");

//Validation
const validateNewPin = require("../../validation/pins");

// @route GET api/users/test
// @desc Test users route
// @access Public
router.get("/test", (req, res) => res.json({ msg: "Pins Works" }));

// @route POST api/pins
// @desc Create a new Pin
// @access Private
router.post(
  "/",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    const { errors, isValid } = validateNewPin(req.body);

    //Check Validation
    if (!isValid) {
      return res.status(400).json(errors);
    }

    const pin = new Pin({
      user: req.user.id,
      image: req.body.image,
      sourceUrl: req.body.sourceUrl
    });
    pin
      .save()
      .then(pin => {
        User.findById(req.user.id, function(err, user) {
          if (err) throw err;
          user.pins.unshift(pin);
          user.save();
          res.status(200).json({ pincreated: "Success" });
        });
      })
      .catch(err => {
        res.status(400).json(err);
      });
  }
);

// @route GET api/pins/
// @desc Get all pins
// @access Publice
router.get("/", (req, res) => {
  Pin.find().then(pin => {
    res.status(200).json(pin);
  });
});

// @route GET api/pins/current
// @desc Retrieve pins for logged in user
// @access Private
router.get(
  "/current",
  passport.authenticate("jwt", { session: false }, (req, res) => {
    const errors = {};

    Pin.find({ user: req.user.id })
      .then(pins => {
        if (!pins) {
          errors.nopins = "This user has not yet created any pins";
          return res.status(404).json(errors);
        }
        res.status(200).json(pins);
      })
      .catch(err => res.status(404).json(err));
  })
);

// @route POST api/pins/like/:id
// @desc Logged in user can like a pin
// @access Private
router.post(
  "/like/:id",
  passport.authenticate({ session: false }),
  (req, res) => {
    const errors = {};
    Pin.findById(req.params.id).then(pin => {
      if (
        pin.likes.filter(like => like.toString() !== req.user.id).length > 0
      ) {
        return res
          .status(400)
          .json({ alreadyliked: "User has already like this pin" });
      }

      pin.likes.unshift(req.user.id);
      pin.save().then(res.json(pin));
    });
  }
);

// @route POST api/pins/unlike/:id
// @desc unlike a pin
// @access Private
router.post(
  "/unlike/:id",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    const errors = {};

    Pin.findById(req.params.id).then(pin => {
      if (
        pin.likes.filter(like => like.toString() === req.user.id).length == 0
      ) {
        return res
          .status(400)
          .json({ notliked: "User has not yet liked this pin" });
      }
      const removeIndex = pin.likes
        .map(user => req.user.id)
        .indexOf(req.user.id);

      pin.save().then(res.json(pin));

      pin.likes.splice(removeIndex, 1);
    });
  }
);

// @route DELETE /api/pins/:id
// @desc delete pin by id
// @access Private
router.delete(
  ":id",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    User.findById(req.user.id).then(user => {
      Pin.findById(req.params.id)
        .then(pin => {
          if (pin.user.toString() !== req.user.id) {
            return res
              .status(401)
              .json({ notauthorized: "User is not authorized" });
          }

          const removeIndex = user.pins
            .map(user => req.user.id)
            .indexOf(req.params.id);
          user.pins.splice(removeIndex, 1);
          user.save();
          //Delete
          pin.remove().then(() => res.json({ success: true }));
        })
        .catch(err => res.status(404).json({ nopins: "Pin does not exist" }));
    });
  }
);

module.exports = router;
