const express = require("express");
const fs = require("fs");
const app = express();

app.use(express.static(`${__dirname}/public`));

const Info = fs.readFileSync(`${__dirname}/public/index.html`, "utf-8");

app.get("/", (req, res) => {
  res.send("Hello, world!");
});

module.exports = app;
