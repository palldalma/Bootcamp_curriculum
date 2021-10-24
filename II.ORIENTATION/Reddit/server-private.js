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
  database: "reddit",
});

conn.connect((err) => {
  if (err) {
    console.log(err.toString());
  }
  console.log("Connected to mysql.");
});

app.get("/hello", (req, res) => {
  res.status(200).send("hello world");
});

app.get("/posts", (req, res) => {
  conn.query("SELECT * FROM posts", (err, rows) => {
    if (err) {
      res.status(500).json(err);
      return;
    }
    res.status(200).json(rows);
  });
});

//az én megoldásom
app.post("/posts", (req, res) => {
  let timestamp = parseInt(new Date().getTime());
  conn.query(
    `INSERT INTO posts (title, url, score, timestamp)
              VALUES (?,?,?,?);`,
    [req.body.title, req.body.url, 0, timestamp],
    (err, rows) => {
      if (err) {
        res.status(500).json(err);
        return;
      }
      res.status(200).json({ title: req.body.title, url: req.body.url });
    }
  );
});

//Mirjam megoldása
// app.post('/posts', (req, res) => { //Postman
//   let newPost = {
//     title: req.body.title,
//     url: req.body.url,
//   };

//   databaseConnection.query('INSERT INTO posts SET ?', newPost, (err, rows) => {
//     if (err) {
//       res.status(500).json({
//         error: err.message,
//       });
//       return;
//     }
//     res.status(200).json(rows);
//   });
// });

//Gergő megoldása
// app.post('/posts', (req, res) => {
//   let currentTime = new Date();
//   const { title, url } = req.body;
//   connection.query(
//     `INSERT INTO posts SET ? `,
//     { title: title, url: url, timestamp: currentTime, score: 0 },

//     (err, rows) => {
//       if (err) {
//         console.error(`Cannot retrieve data: ${err.toString()}`);
//         res.sendStatus(500);
//         return null;
//       }
//       return res.json({ title: rows.title, url: rows.url });
//     }
//   );
// });

app.listen(3000, () => {
  console.log("Server is running and listening at port 3000.");
});
