const express = require("express");
const app = express();
const port = 4242;
const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27042'
const dbName = 'user';

MongoClient.connect(url, function(err, client) { 
     if (err) {
         return console.log("Connection failed"); 
     }
     console.log("Connection successful");
    const db = client.db(dbName);  
     client.close();
    });

process.env.NODE_ENV= "development";

app.get("/login", function (req, res) {
  res.sendFile(__dirname +"/connexion.html");
});
app.get("/register", function (req, res) {
    res.sendFile(__dirname +"/inscription.html");
  });

app.post("/register", function (req, res) {

    MongoClient.connect(url, function(err, client) { 
        if (err) {
            return console.log("Connection failed"); 
        }
        console.log("Connection successful");
       const db = client.db(dbName);  
        client.close();
       });
});

app.listen(port, function () {
  console.log(`Example app listening on port ${port}!`);
});