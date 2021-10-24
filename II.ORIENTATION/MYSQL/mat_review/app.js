"use strict";

const express = require("express");
const app = express();
const mysql = require("mysql");
app.use(express.json());

let conn = mysql.createConnection({
  //conn a futár az express és a mysql között
  host: "localhost",
  user: "dalma",
  password: "123456",
  database: "school",
  // insecureAuth: "true",
});

conn.connect((err) => {
  if (err) throw err;
  console.log("Connected to mysql");
});

app.get("/", (req, res) => {
  res.send("Request received, response sent.");
});

app.get("/student", (req, res) => {
  conn.query("SELECT * FROM students;", (err, rows) => {
    console.log(rows);
    if (err) {
      console.log(err.toString());
      res.status(500).json({ error: "database error" });
      return;
    }
    res.json(rows);
  });
});

app.post("/add", (req, res) => {
  let userName = req.body.name;
  conn.query(
    `INSERT INTO students (name, age) VALUES (?,?);`, //SQL injection miatt kell a ? =
    [
      userName,
      req.body.age,
    ] /*VALUES ('${userName}'), annyi kérdőjel kell és annyi elem kell az array-be, ahány adat jön*/,
    (err, rows) => {
      if (err) {
        console.log(err.toString());
        res.status(420).json({ error: "couldn't insert data into the table" });
        return;
      }
      res.status(200).send("added student to database");
    }
  );
});

app.put("/update/:id", (req, res) => {
  let studentName = req.body.name;
  let studentAge = req.body.age;
  let studentID = req.params.id;
  conn.query(
    `UPDATE students SET name = ?, age = ? WHERE id = ?`,
    [studentName, studentAge, studentID],
    (err, rows) => {
      if (err) {
        console.log(err.toString());
        res.status(420).json({ error: "couldn't update data" });
        return;
      }
      res.status(200).send("Changed the requested data");
    }
  );
});

app.listen(3000, () => {
  console.log("server is running, listening on port 3000");
});
