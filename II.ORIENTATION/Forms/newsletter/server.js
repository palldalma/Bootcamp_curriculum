"use strict";

const express = require("express");
const mysql = require("mysql");
const app = express();

app.use(express.json());

app.use(express.static("public"));

const conn = mysql.createConnection({
  host: "localhost",
  user: "dalma",
  password: "123456",
  database: "newsletter",
});

conn.connect((err) => {
  if (err) {
    console.log(err.toString());
  }
  console.log("Connected to mysql.");
});

app.post("/signup", (req, res) => {
  conn.query(
    `INSERT INTO subscribed (name, email)
              VALUES (?,?);`,
    [req.body.name, req.body.email],
    (err, rows) => {
      if (err) {
        res.status(500).json(err);
        return;
      }

      conn.query(
        `SELECT * FROM subscribed WHERE id = ${rows.insertId}`,
        (err, rows) => {
          if (err) {
            res.status(500).json(err);
            return;
          }
          res.status(200).json(rows);
        }
      );
    }
  );
});

app.listen(3000, () => {
  console.log("Server is running and listening at port 3000.");
});
