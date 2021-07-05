const fs = require("fs");
const express = require("express");
const path = require("path");

const PORT = process.env.PORT || 3000;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static(path.join(__dirname, "assets")));

app.get("/", (req, res) =>
  res.sendFile(path.join(__dirname, "/assets/index.html"))
);
