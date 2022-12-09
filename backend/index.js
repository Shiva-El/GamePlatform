const mongoose = require("mongoose");
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const validator = require("validator");
const bcrypt = require("bcrypt");
require("dotenv").config();

const { userModel, lyricModel } = require("./models");

const PORT = process.env.PORT || 3001; //Must be different from the port of the React app

const app = express();

const saltRounds = 10;

app.use(cors()); // https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS

mongoose.connect(
  "mongodb+srv://mongouser:" +
    process.env.MONGODB_PWD +
    "@cluster0.zpoe9et.mongodb.net/TheBeansArcade?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

/*
mongoose.connect("mongodb+srv://mongouser:"
+ process.env.MONGODB_PWD 
+"@cluster0.k6kxnoy.mongodb.net/myFirstDb?retryWrites=true&w=majority",
  {
    useNewUrlParser   : true,
    useUnifiedTopology: true,
  });
*/

const db = mongoose.connection;
db.on("error", console.error.bind(console, "Connection error: "));
db.once("open", () => {
  console.log("Connected successfully");
});

app.use(express.json()); // Allows express to read a request body

// Configuring body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//Register callback
app.post("/users/register", async (request, response) => {
  const username = request.body.username;
  const password = request.body.password;

  try {
    if (
      username &&
      validator.isAlphanumeric(username) &&
      password &&
      validator.isStrongPassword(password)
    ) {
      // Check to see if the user already exists. If not, then create it.
      const user = await userModel.findOne({ username: username });
      if (user) {
        console.log(
          "Invalid registration = username " + username + " already exists."
        );
        response.send({ success: false });
        return;
      } else {
        const hashedPassword = await bcrypt.hash(password, saltRounds);
        console.log("Registering username " + username);
        const userToSave = { username: username, password: hashedPassword };
        await userModel.create(userToSave);
        response.send({ success: true });
        return;
      }
    }
  } catch (error) {
    console.log(error.message);
  }
  response.send({ success: false });
});

//Login callback
app.post("/users/login", async (request, response) => {
  const username = request.body.username;
  const password = request.body.password;

  try {
    if (username && password) {
      // Check to see if the user already exists. If not, then create it.
      const user = await userModel.findOne({ username: username });

      if (!user) {
        console.log("Invalid login = username " + username + " doesn't exist.");
        response.send({ success: false });
        return;
      } else {
        const isSame = await bcrypt.compare(password, user.password); //true;
        if (isSame) {
          console.log("Successful login");
          response.send({ success: true });
          return;
        }
      }
    }
  } catch (error) {
    console.log(error.message);
  }
  response.send({ success: false });
});

app.get("/lyrics/:userId", async (req, res) => {
  const userId = req.params.userId;
  const user = await userModel.findOne({ username: userId });
  const lastLyricId = user.lyrics.lastLyricId ?? 0;
  const lyricId = lastLyricId + 1;
  const lyric = await lyricModel.findOne({ lyricId: lyricId });

  res.send(lyric);
});

//Scoreboard callback
app.get('/leaderboard', async (req, res) => {
  const users = await userModel.find();
  
  res.send(users);
  });

/* An API get request using URL path parameters
to /users/:username */
app.get("/leaderboard/:username", async (req, res) => {
  const username = req.params.username;
  const user = await userModel.findOne({
  username: username });
  res.send(user);
  });


//Minesweeper score callback
app.patch("/leaderboard/:username/minesweeperScore", async (req,
  res) => {
  const username = req.params.username;
  const minesweeperScore = req.body.minesweeperScore;
  const results = await userModel.updateOne({
  username: username }, { minesweeperScore: minesweeperScore });
  console.log("matched: " + results.matchedCount);
  console.log("modified: " + results.modifiedCount);
  res.send(results);
  });

//UPDATE PASSWORD
app.patch("/users/:username/password", async (req,
  res) => {
  const username = req.params.username;
  const password = req.body.password;
  const results = await userModel.updateOne({
  username: username }, { password: password });
  console.log("matched: " + results.matchedCount);
  console.log("modified: " + results.modifiedCount);
  res.send(results);
  });


app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}!`);
});
