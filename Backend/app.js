const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const cors = require("cors");
const app = express();
const connectTodb = require("./db/db");
app.use(cors());
connectTodb();

app.get("/", (req, res) => {
  res.send("hello there");
});

module.exports = app;
