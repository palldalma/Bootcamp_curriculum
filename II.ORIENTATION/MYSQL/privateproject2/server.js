"use strict";

const express = require("express");
const mysql = require("mysql");
require("dotenv").config();

const app = express();
const PORT = 3000;

const conn = mysql.createConnection({
  host: process.env.MYSQL_HOST,
  database: process.env.MYSQL_DATABASE,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
});

app.use(express.static("public"));
app.use(express.json()); //ahhoz,hogy a req.body működjön az app.post-ban

app.post("/gifs", (req, res) => {
  const SQL = "INSERT INTO favourites (name,url) VALUES (?,?);";

  conn.query(SQL, [req.body.name, req.body.url], (err, rows) => {
    if (err) {
      console.log(err);
      res.status(500).json({ message: "Internal server error" });
    }
    res.json({ message: "success" });
  });
});

app.listen(PORT, () => {
  console.log(`server is listening on port ${PORT}`);
});
