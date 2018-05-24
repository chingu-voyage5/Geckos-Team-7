const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Create Schema for pins
const PinSchema = new Schema({
  //The user the pin was created by
  user: {
    type: Schema.Types.ObjectId,
    ref: "users"
  },
  title: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true
  },
  imageURL: {
    type: String,
    required: true
  },
  //Associates a pin with a user
  saves: [
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
