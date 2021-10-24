"use strict";

const express = require("express");
const mysql = require("mysql");
const app = express();

app.use(express.json());

app.use(express.static("public"));

app.use(express.urlencoded({ extended: true })); //ez csak a html form-hoz kell, később nem fogjuk használni

const conn = mysql.createConnection({
  host: "localhost",
  user: "dalma",
  password: "123456",
  database: "youtube",
});

conn.connect((err) => {
  if (err) {
    console.log(err.toString());
  }
  console.log("Connected to mysql.");
});

app.get("/", (req, res) => {
  res.sendFile("index.html");
});

app.get("/songs", (req, res) => {
  conn.query("SELECT * FROM songs", (err, rows) => {
    if (err) {
      res.status(500).json(err);
      return;
    }
    res.status(200).json(rows);
  });
});

app.post("/addsong", (req, res) => {
  conn.query(
    `INSERT INTO songs (title,artist,url) 
              VALUES (?,?,?);`,
    [req.body.title, req.body.artist, req.body.url],
    (err, rows) => {
      if (err) {
        res.status(500).json(err);
        return;
      }
      //res.send("successfully added"); //meg kell várnunk, hogy lefusson a query, mielőtt response-ot küldünk vissza - aszinkronitás
      //fontos, hogy a  query-n belül küldjük vissza a response-t
      res.redirect("/");
    }
  );
});

app.listen(3000, () => {
  console.log("Server is running and listening at port 3000.");
});
