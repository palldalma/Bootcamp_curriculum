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

      conn.query(
        `SELECT id, title, url, timestamp, score FROM posts WHERE id = ${rows.insertId}`,
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

app.put("/posts/:id/upvote", (req, res) => {
  let id = req.params.id;

  conn.query(
    "UPDATE posts SET score = score + 1 WHERE id = ?",
    id,
    (err, rows) => {
      if (err) {
        res.status(500).json({
          error: err.message,
        });
        return;
      }
      conn.query(
        `SELECT id, title, url, timestamp, score FROM posts WHERE id = ${req.params.id}`,
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

app.put("/posts/:id/downvote", (req, res) => {
  let id = req.params.id;

  conn.query(
    "UPDATE posts SET score = score - 1 WHERE id = ?",
    id,
    (err, rows) => {
      if (err) {
        res.status(500).json({
          error: err.message,
        });
        return;
      }
      conn.query(
        `SELECT id, title, url, timestamp, score FROM posts WHERE id = ${req.params.id}`,
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

// ez tényleg kitörli az adatbázisból, a jövőben módosítani kell, hogy ne elt
app.delete("/posts/:id", (req, res) => {
  let id = req.params.id;

  conn.query(`DELETE FROM posts WHERE id = ?`, id, (err, rows) => {
    if (err) {
      res.status(500).json({
        error: err.message,
      });
      return;
    }
    conn.query(
      `SELECT id, title, url, timestamp, score FROM posts WHERE id = ${id}`,
      (err, rows) => {
        if (err) {
          res.status(500).json(err);
          return;
        }
        res.status(200).json(rows);
      }
    );
  });
});

app.put("/posts/:id/", (req, res) => {
  let id = req.params.id;
  let newtitle = req.body.title;

  conn.query(
    `UPDATE posts SET title = ? WHERE id = ?`,
    [newtitle, id],
    (err, rows) => {
      if (err) {
        res.status(500).json({
          error: err.message,
        });
        return;
      }
      conn.query(
        `SELECT id, title, url, timestamp, score FROM posts WHERE id = ${id}`,
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
