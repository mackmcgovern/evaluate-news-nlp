const dotenv = require('dotenv');
dotenv.config();

const fetch = require("node-fetch");
const path = require("path");
const express = require("express");
const cors = require("cors");

const app = express();

const bodyParser = require("body-parser");
const { response } = require("express");
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(cors());

app.use(express.static("dist"));

console.log(__dirname);

app.get("/", function (req, res) {
  res.sendFile("dist/index.html");
  // res.sendFile(path.resolve('src/client/views/index.html'))
});

// designates what port the app will listen to for incoming requests
app.listen(8081, function () {
  console.log("Example app listening on port 8081!");
});



app.get("/test", function (req, res) {
  // res.send(mockAPIResponse)
});

app.get("/meaning", (req, res) => {
  fetch(`https://api.meaningcloud.com/sentiment-2.1?key=${process.env.API_KEY}&lang=auto&url=${req.query.text}`)
    .then((response) => response.json())
    .then((body) => res.send(body))
    .catch((error) => console.log("error", error));
});

