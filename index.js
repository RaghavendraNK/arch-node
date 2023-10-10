const express = require("express");

const app = express();

app.use("/", (req, res) => {
  res.write("<h1>Welcome!</h1>");
});

app.listen(3000);
