//Sets up the user model for the database
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Create Schema
const UserSchema = new Schema({
  name: {
    type: String,
    require: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  avatar: {
    type: String
  },
  //Associates Board with user
  boards: [
    {
      board: {
        type: Schema.Types.ObjectId,
        ref: "board"
      }
    }
  ],
  pins: [
    {
      pins: {
        type: Schema.Types.ObjectId,
        ref: "pin"
      }
    }
  ],
  // Records date of user creation
  date: {
    type: Date,
    default: Date.now
  }
});
// Exports userSchema to be used in other parts of the app
module.exports = User = mongoose.model("users", UserSchema);
