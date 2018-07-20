const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");

//Connects routes
const users = require("./routes/api/users");
const boards = require("./routes/api/boards");
const pins = require("./routes/api/pins");

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
app.use("/api/users", users);
app.use("/api/boards", boards);
app.use("/api/pins", pins.router);
//for protected pins:
app.use("/api/pins", passport.authenticate("jwt", { session: false }), pins.protected);
//app.use("/api/pins", pins.protected);
///making some change
//app.use("/api/pins/secret", passport.authenticate("jwt", { session: false }), pins);

app.get("/", (req, res) => res.json("Hello World"));

const port = process.env.PORT || 5001;

app.listen(port, () => console.log(`Server running on port ${port}`));
