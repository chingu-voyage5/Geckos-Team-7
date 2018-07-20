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
  sourceUrl: {
    type: String,
    required: true
  },
  //Associates a pin with a user
  saves: [
    {
      board: {
        type: Schema.Types.ObjectId,
        ref: "boards"
      }
    }
  ],

  likes: [
    {
      user: {
        type: Schema.Types.ObjectId,
        ref: "users"
      }
    }
  ],
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Post = mongoose.model("pin", PinSchema);
