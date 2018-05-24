const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Create Schema for pins
const PinSchema = new Schema({
  //The user the pin was created by
  user: {
    type: Schema.Types.ObjectId,
    ref: "users"
  },
  image: {
    type: String,
    required: true
  },
  sourceURL: {
    type: String,
    required: true
  },
  //Associates a pin with a user
  saves: [
    {
      user: {
        type: Schema.Types.ObjectId,
        ref: "users"
      },
      board: {
        type: Schema.Types.ObjectId,
        ref: "boards"
      }
    }
  ],
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Post = mongoose.model("pin", PinSchema);
