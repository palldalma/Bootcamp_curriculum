"use strict";

const express = require("express");
const mysql = require("mysql");
const app = express();
const path = require("path");
const PORT = 8080;

require("dotenv").config();

app.use(express.json());

app.use(express.static("public"));

const conn = mysql.createConnection({
  host: process.env.DB_host,
  user: process.env.DB_user,
  password: process.env.DB_password,
  database: process.env.DB_databasename,
});

conn.connect((err) => {
  if (err) {
    console.log(err.toString());
  }
  console.log("Connected to mysql.");
});

app.get("/game", (req, res) => {
  res.sendFile(path.join(__dirname, "./public/gamepage.html"));
});

app.get("/questions", (req, res) => {
  res.sendFile(path.join(__dirname, "./public/managequestions.html"));
});

let usedQuestions = [0];

app.get("/api/game", (req, res) => {
  //This endpoint should return a random question with its answers.

  console.log(usedQuestions);

  conn.query(
    "SELECT id FROM questions WHERE id NOT IN (?)",
    [usedQuestions],
    (err, rows) => {
      if (err) {
        console.log(err + "something went wrong");

        res.status(500).json(err);

        return;
      }

      if (rows.length === 0) {
        res.status(404).send({ error: "No more questions left." });
        usedQuestions = [0];
        return;
      }

      const randomID = rows[Math.floor(Math.random() * rows.length)];

      usedQuestions.push(randomID.id);

      conn.query(
        `SELECT question, question_id, answer, is_correct FROM questions questions LEFT JOIN answers answers ON questions.id=answers.question_id WHERE question_id=${randomID.id}`,
        (err, rows) => {
          if (err) {
            res.status(500).json(err);
            return;
          }

          const result = {
            id: rows[0].question_id,
            question: rows[0].question,
            answers: rows.map((row) => {
              return {
                question_id: row.question_id,
                answer: row.answer,
                is_correct: row.is_correct,
                id: row.id,
              };
            }),
          };

          res.status(200).json(result);
        }
      );
    }
  );
});

app.get("/api/questions", (req, res) => {
  //This endpoint should return all the questions.

  conn.query(`SELECT id,question FROM questions`, (err, rows) => {
    if (err) {
      res.status(500).json(err);
      return;
    }
    res.status(200).json(rows);
  });
});

app.post("/api/questions", (req, res) => {
  conn.query(
    `INSERT INTO questions (question)
              VALUES (?);`,
    req.body.question,
    (err, rows) => {
      if (err) {
        res.status(500).json(err);
        return;
      }

      const question_id = rows.insertId;

      if (req.body.answers.length === 4) {
        req.body.answers.forEach((answer, i) => {
          conn.query(
            `INSERT INTO answers (question_id,answer,is_correct) VALUES (?,?,?);`,
            [question_id, answer[`answer_${i + 1}`], answer.is_correct],
            (err, rows) => {
              if (err) {
                res.status(500).json(err);
                return;
              } else if (i === req.body.answers.length - 1) {
                res.status(200).send({
                  success: "A new question with 4 answers was added.",
                });
              }
            }
          );
        });
      } else res.send("Please provide 4 answers.");
    }
  );
});

app.delete("/api/questions/:id", (req, res) => {
  const id = req.params.id;

  conn.query(`DELETE FROM questions WHERE id = ?`, id, (err, rows) => {
    if (err) {
      res.status(500).json({
        error: err.message,
      });
      return;
    }

    conn.query(`DELETE FROM answers WHERE question_id = ?`, id, (err, rows) => {
      if (err) {
        res.status(500).json({
          error: err.message,
        });
        return;
      }
      res.status(200).send({
        Success: `Question with question_id ${id} has been successfully removed.`,
      });
    });
  });
});

app.listen(PORT, () => {
  console.log(`Server is running and listening at port ${PORT}.`);
});

module.exports = app;
