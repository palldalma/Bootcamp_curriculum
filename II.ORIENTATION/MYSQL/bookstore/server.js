"use strict";

const express = require("express");
const app = express();
const mysql = require("mysql");

app.use(/* "/", */ express.static("public")); //a public könyvtár tartalmát automatikusan kiszolgálja a gyökéren
//"/" lehetne az első paraméter,de anélkül is működik

app.use(express.json()); //ez a post request-hez kell

let conn = mysql.createConnection({
  //conn a futár az express és a mysql között
  host: "localhost",
  user: "dalma",
  password: "123456",
  database: "bookstore",
  // insecureAuth: "true",
});

//connecting to mysql
//error-first callback
conn.connect((err, result) => {
  if (err) throw err; //or: if (err) {return console.log (err.message);}
  console.log("Connected to mysql");
});

process.on("uncaughtException", (err) => {
  console.log(err.message);
  process.exit(1); //the program exits and we cannot use it any longer
});

//Create an API endpoint that lists all book titles
app.get("/bookcollection", (req, res) => {
  conn.query("SELECT * FROM book_mast;", (err, rows) => {
    if (err) {
      console.log(err.toString());
      res.status(500).json({ error: "database error" });
      return;
    }

    res.json(rows);
  });
});

app.get("/moreinfo", (req, res) => {
  conn.query(
    "SELECT book_mast.book_id, book_mast.book_name, author.aut_name, category.cate_descrip, publisher.pub_name, book_mast.book_price FROM book_mast JOIN author ON author.aut_id=book_mast.aut_id JOIN category ON category.cate_id=book_mast.cate_id JOIN publisher ON publisher.pub_id=book_mast.pub_id;",
    (err, rows) => {
      if (err) {
        console.log(err.toString());
        res.status(500).json({ error: "database error" });
        return;
      }

      res.json(rows);
    }
  );
});

app.listen(3000, () => {
  console.log("server is running, listening on port 3000");
});
