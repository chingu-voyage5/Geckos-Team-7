const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");

//Connects routes
/*
const user = require("./routes/api/users");
const boards = require("./routes/api/boards");
const pins = require("./routes/api/pins");
*/
const app = express();

//Body Parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//Brings in db connection
const db = require("./config/keys").mongoURI;

//Connect to MongoDB
mongoose
  .connect(db)
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

//Passport Middleware
app.use(passport.initialize());

//Passport Config
require("./config/passport")(passport);

// Sets up api routes
/* Uncomment after routes are set up
app.use("api/users", users);
app.use("api/boards", profile);
app.use("/api/posts", posts);
*/
app.get("/", (req, res) => res.json("Hello World"));

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));
