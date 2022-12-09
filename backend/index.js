/* eslint-disable no-array-constructor */
require('dotenv').config();

const mongoose = require('mongoose');
const userModel = require('./models')

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const validator = require('validator');
const bcrypt = require('bcrypt');
const saltRounds = 10;

const app = express();
const PORT = /*process.env.PORT ||*/ 3001; //Must be different from the port of the React app

app.use(cors()); // https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS
app.use(express.json()); // Allows express to read a request body
/*
mongoose.connect("mongodb+srv://mongouser:" + process.env.MONGODB_PWD +
  "@cluster0.zpoe9et.mongodb.net/TheBeansArcade?retryWrites=true&w=majority",
  {
    useNewUrlParser   : true,
    useUnifiedTopology: true,
  });
*/
mongoose.connect("mongodb+srv://mongouser:GgkrVKWtGQXqEEOF@cluster0.k6kxnoy.mongodb.net/myFirstDb?retryWrites=true&w=majority",
  {
    useNewUrlParser   : true,
    useUnifiedTopology: true,
  });

const db = mongoose.connection;
db.on("error", console.error.bind(console, "Connection error: "));
db.once("open", () => {
  console.log("Connected successfully");
})



// Configuring body parser middleware
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

//Registration callback
app.post("/users/register", async (request, response) => {
  const username = request.body.username;
  const password = request.body.password;
  
  try {
    if (
      username && validator.isAlphanumeric(username) &&
      password && validator.isStrongPassword(password)) {
      // Check to see if the user already exists. If not, then create it.
      const user = await userModel.findOne({username: username});
      if (user) {
        console.log('Invalid registration = username ' + username + ' already exists.');
        response.send({success: false});
        return;
      } else {
        const hashedPassword = await bcrypt.hash(password, saltRounds);
        console.log('Registering username ' + username);
        const userToSave = {username: username, password: hashedPassword};
        await userModel.create(userToSave);
        response.send({success: true});
        return;
      }
    }
  } catch (error) {
    console.log(error.message);
  }
  response.send({success: false});
});

//Login callback
app.post("/users/login", async (request, response) => {
  const username = request.body.username;
  const password = request.body.password;
  
  try {
    if (username && password) {
      // Check to see if the user already exists. If not, then create it.
      const user = await userModel.findOne({username: username});
      
      if (!user) {
        console.log('Invalid login = username ' + username + " doesn't exist.");
        response.send({success: false});
        return;
      } else {
        const isSame = /*await bcrypt.compare(password, user.password);*/ true;
        if (isSame) {
          console.log("Successful login");
          response.send({success: true});
          return;
        }
      }
    }
  } catch (error) {
    console.log(error.message);
  }
  response.send({success: false});
});

//Scoreboard callback
app.get('/leaderboard', async (req, res) => {
  const users = await userModel.find();
  
  res.send(users);
  });

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}!`);
});
