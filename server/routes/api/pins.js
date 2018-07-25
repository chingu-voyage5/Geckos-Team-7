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
  
  //Following is for testing authentication
  // @route GET api/pins/secret
  protected.get("/secret", function(req, res) {
    console.log("Access with token only");
    res.json("You cannot see this without token");
  })
  protected.get("/secretDebug", function(req, res, next){
      console.log(req.get('Authorization'));
      console.log(req);
      next();
    }, function(req, res){
      res.json("debugging");
  });
  
  
  //module.exports = router;
  module.exports = {
    protected: protected,
    router: router
  };
  