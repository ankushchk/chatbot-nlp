const express = require("express");
const bodyParser = require("body-parser");
const natural = require("natural");
const path = require("path");

const app = express();
const port = 3000;

app.use(bodyParser.json("hello world"));
app.use(bodyParser.urlencoded({ extended: true }));

const tokenizer = new natural.WordTokenizer();

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.post("/chat", (req, res) => {
  const userInput = req.body.message;
  const token = tokenizer.tokenize(userInput.toLowerCase());
  console.log(token);

  let response = "Sorry! I didn't get that";
  if (token.includes("hello")) {
    response = "Hello! How can I help you today?";
  } else if (token.includes("bye")) {
    response = "Goodbye! Have a nice day!";
  } else if (token.includes("name")) {
    response = "I'm your friendly chatbot";
  } else if (token.includes("help")) {
    response = "Sure, I am here to help. What do you need assistance with?";
  }

  res.json({ response });
});

app.listen(port, () => {
  console.log(`Chatbot server running at http://localhost:${port}`);
});
