const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const BoardSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "users"
  },
  title: {
    type: String,
    required: true
  },
  description: {
    type: String
  },
  //Associates a pin with a board
  pins: [
    {
      pin: {
        type: Schema.Types.ObjectId,
        ref: "pin"
      }
    }
  ],

  follows: [
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

module.exports = Board = mongoose.model("board", BoardSchema);
