const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const userModel = require("./userData");

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect("mongodb://localhost:27017/loginMERN");

app.post("/register", (req, resp) => {
  userModel
    .create(req.body)
    .then((userData) => resp.json(userData))
    .catch((err) => resp.send(err));
});

app.post("/login", (req, resp) => {
  const { mail, pass } = req.body;
  userModel.findOne({ mail: mail }).then((user) => {
    if (user) {
      console.log(user);
      if (user.pass === pass) {
        resp.json("success");
      }
      else {
         
        resp.json("incorrect password"); 
      }
    } else {
      resp.json("no record!!");
    }
  });
});

app.listen(5000, () => {
  console.log("server run");
});

// http://localhost:5000/register
