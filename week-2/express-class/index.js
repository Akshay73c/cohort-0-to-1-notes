//express is not builtin library of nodejs, so need to install it first and then require.

const express = require("express");

const app = express();

//(req, res) => request and response
app.get("/", (req, res) => {
  res.send("Hey there");
});

app.listen(3000);
