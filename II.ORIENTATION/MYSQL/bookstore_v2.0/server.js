"use strict";

const express = require("express");
const mysql = require("mysql");
const app = express();
const path = require("path");
const PORT = 3000;

app.use(express.json());

app.use(express.static("public"));

const conn = mysql.createConnection({
  host: "localhost",
  user: "dalma",
  password: "123456",
  database: "bookstore",
});

conn.connect((err) => {
  if (err) {
    console.log(err.toString());
  }
  console.log("Connected to mysql.");
});

app.get("/bookcollection", (req, res) => {
  conn.query(`SELECT book_name FROM book_mast`, (err, rows) => {
    if (err) {
      res.status(500).json(err);
      return;
    }
    res.status(200).json(rows);
  });
});

app.get("/bookcollection/details", (req, res) => {
  const { category, publisher, plt, pgt } = req.query;

  let sql = `SELECT book_name, aut_name, cate_descrip, pub_name, book_price FROM book_mast AS bm INNER JOIN author AS a ON bm.aut_id = a.aut_id INNER JOIN category AS c ON bm.cate_id = c.cate_id INNER JOIN publisher AS p ON bm.pub_id = p.pub_id WHERE 1=1`;
  const query = [];
  if (
    category === undefined &&
    publisher === undefined &&
    plt === undefined &&
    pgt === undefined
  ) {
  } else {
    if (category) {
      sql += " AND cate_descrip=?";
      query.push(req.query.category);
    }
    if (publisher) {
      sql += " AND pub_name=?";
      query.push(req.query.publisher);
    }
    if (plt) {
      sql += " AND book_price<?";
      query.push(req.query.plt);
    }
    if (pgt) {
      sql += " AND book_price>?";
      query.push(req.query.pgt);
    }
  }
  conn.query(sql, query, (err, rows) => {
    if (err) {
      console.error(`Cannot retrieve data: ${err.toString()}`);
      res.sendStatus(500);
      return;
    } else if (rows.length === 0) {
      res.status(404).json({ error: "Search criteria is incorrect" });
      return;
    }
    return res.json(rows);
  });
});

app.listen(PORT, () => {
  console.log(`Server is running and listening at port ${PORT}.`);
});

module.exports = app;
