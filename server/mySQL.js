const express = require("express");
const app = express();
// const groceryList = require("../database/data.js").groceryList;
const database = require("../database/index.js");
const bodyParser = require("body-parser");

app.use(bodyParser.json());
app.use(express.static(__dirname + "/../client/dist"));

//GET request to database
app.get("/Users", function(req, res) {
  database.selectAll((err, results) => {
    if (err) {
      res.sendStatus(500);
    } else {
      res.status(200).json(results);
    }
  });
});

app.get("/Users", function(req, res) {
  database.selectUser((err, results) => {
    if (err) {
      res.sendStatus(500);
    } else {
      res.status(200).json(results);
    }
  });
});

//handle post requests to Forum
app.post("/Forum", function(req, res) {
  //update data object with new object from my req.body
  let user = req.body.user;
  let forumPost = req.body.forumPost;
  //send the updated data object back
  if (!description) {
    res.sendStatus(400);
  } else {
    database.insertOne(forumPost, user, (err, results) => {
      if (err) {
        res.sendStatus(500);
      } else {
        res.status(200).json(results);
      }
    });
  }
});

//handle get requests to Forum
app.get("/Forum", function(req, res) {
  //update data object with new object from my req.body
  let user = req.body.user;
  let forumPost = req.body.forumPost;
  //send the updated data object back
  if (!description) {
    res.sendStatus(400);
  } else {
    database.selectAllForum (forumPost, user, (err, results) => {
      if (err) {
        res.sendStatus(500);
      } else {
        res.status(200).json(results);
      }
    });
  }
});

app.listen(3000, function() {
  console.log("Server started and listening on port 3000");
});

app.get('/users', function(req, res) {

    var user = req.body;

    var query = connection.query('SELECT * FROM user_name', user  function(err, result) {

    });
    res.end('Success');
});
