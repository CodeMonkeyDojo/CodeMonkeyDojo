//This will be the database file
.
var React = require('react');
var ReactDOM = require('react-dom');

var mysql = require('mysql');
var express = require('express');
var app = express();

var fs = require('fs');

var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '',
    database : 'MonkeyDB'
});

// connection.connect();

const selectAll = function(cb) {
  connection.query("SELECT * FROM Users", (err, results, fields) => {
    if (err) {
      cb(err, null);
    } else {
      cb(null, results);
    }
  });
};

const selectUser = function(user, cb) {
  connection.query("SELECT" + user + "FROM Users", (err, results, fields) => {
    if (err) {
      cb(err, null);
    } else {
      cb(null, results);
    }
  });
};

const insertOne = function(quantity, description, cb) {
  connection.query(
    "INSERT INTO Users (quantity, description) VALUES (?, ?)",
    [description, quantity],
    (err, results, fields) => {
      if (err) {
        cb(err, null);
      } else {
        console.log(results);
        cb(null, results);
      }
    }
  );
};

const selectAllForum = function(cb) {
  connection.query("SELECT * FROM Forum", (err, results, fields) => {
    if (err) {
      cb(err, null);
    } else {
      cb(null, results);
    }
  });
};

module.exports.selectAll = selectAll;
module.exports.insertOne = insertOne;
module.exports.selectUser = selectUser;
module.exports.selectAllForum = selectAllForum;
