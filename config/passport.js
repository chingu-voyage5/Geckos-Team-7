//This allows us to use a JWT to secure private routes
const JwtStrategy = require("passport-jwt").Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt;
const mongoose = require("mongoose");
const User = mongoose.model("users");
const keys = require("../config/keys");

const opts = {};
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = keys.secretOrKey;
//console.log("what us optsjwtFromRequest()", opts.jwtFromRequest);

module.exports = passport => {
  console.log("passport should be used");
  passport.use(
    new JwtStrategy({
        jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
        secretOrKey   : keys.secretOrKey
    }, function (jwt_payload, done) {
      //console.log("jwt_payload", jwt_payload);
      User.findById(jwt_payload.id)
        .then(user => {
          if (user) {
            return done(null, user);
          }
          return done(null, false);
        })
        .catch(err => console.log(err));
    })
  );
};
