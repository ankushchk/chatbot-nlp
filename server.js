const express = require("express");
const bodyParser = require("body-parser");
const natural = require("natural");

const app = express();
const port = 3000;

app.use(bodyParser.json("hello world"));
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(port, () => {
  console.log(`Chatbot server running at http://localhost:${port}`);
});
