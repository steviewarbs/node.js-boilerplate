//jshint esversion:6

//imports 

const express = require("express");
const bodyParser = require("body-parser");
const axios = require("axios");

const app = express();

//render static images

app.use(express.static("public"));

//body-parser for returning index body

app.use(bodyParser.urlencoded({ extended: true }));

//render index.html on localhost:3000

app.get("/", function (req, res) {
  res.sendFile("index.html", { root: __dirname });
});

//get request function

app.get("/get", function (req, res) {
  axios.get("url").then((resp) => {
    console.log(resp.data);
  });
});

//post request function

app.post("/post", function (reg, res) {
  axios.post("url", {
      key: "value",
    })
    .then((res) => {
      console.log(`statusCode: ${res.statusCode}`);
      console.log(res);
    })
    .catch((error) => {
      console.error(error);
    });
});

//server listening 

app.listen(3000, function () {
  console.log("Server started on port 3000.");
});

