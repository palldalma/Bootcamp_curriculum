"use strict";

const express = require("express");
const mysql = require("mysql");
const app = express();
const path = require("path");
const PORT = 8080;

app.use(express.json());

app.use(express.static(path.join(__dirname, "public")));

const conn = mysql.createConnection({
  host: "localhost",
  user: "dalma",
  password: "123456",
  database: "aliaser",
});

conn.connect((err) => {
  if (err) {
    console.log(err.toString());
  }
  console.log("Connected to mysql.");
});

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "./public/index.html"));
});

function generateSecretCode() {
  let code = [];

  for (let i = 0; i < 4; i++) {
    let newDigit = Math.floor(Math.random() * 10);
    code.push(newDigit);
  }
  return code.join("");
}

app.post("/api/links", (req, res) => {
  const url = req.body.url;
  const alias = req.body.alias;
  const secretCode = generateSecretCode();

  conn.query(`SELECT * FROM urlaliaser WHERE alias = ?`, alias, (err, rows) => {
    if (err) {
      res.status(500).send(err);
      return;
    }
    if (rows.length !== 0) {
      res.status(400).json({ error: "Alias has already been used." });
    } else {
      conn.query(
        `INSERT INTO urlaliaser (url, alias, secretCode)
      VALUES (?,?,?);`,
        [url, alias, secretCode],
        (err, rows) => {
          if (err) {
            res.status(500).json(err);
            return;
          }

          const newrows_id = rows.insertId;

          conn.query(
            `SELECT * FROM urlaliaser WHERE id= ?`,
            newrows_id,
            (err, rows) => {
              if (err) {
                res.status(500).json(err);
                return;
              }

              const result = {
                id: rows[0].id,
                url: rows[0].url,
                alias: rows[0].alias,
                hitCount: rows[0].hitCount,
                secretCode: rows[0].secretCode,
              };

              res.status(200).json(result);
            }
          );
        }
      );
    }
  });
});

app.get("/a/:alias", (req, res) => {
  const alias = req.params.alias;

  conn.query(
    `UPDATE urlaliaser SET hitCount = hitCount + 1 WHERE alias = ?`,
    alias,
    (err, rows) => {
      if (err) {
        res.status(500).json(err);
        return;
      } else if (rows.affectedRows === 0) {
        res.status(404).json({ error: "Alias does not exist." });
      }

      conn.query(
        `SELECT url FROM urlaliaser WHERE alias = ?`,
        alias,
        (err, rows) => {
          if (err) {
            res.status(500).json(err);
            return;
          }
          res.status(200).redirect(`${rows[0].url}`);
        }
      );
    }
  );
});

app.get("/api/links/", (req, res) => {
  conn.query(`SELECT id, url, alias, hitCount FROM urlaliaser`, (err, rows) => {
    if (err) {
      res.status(500).json(err);
      return;
    }

    res.send(rows);
  });
});

app.delete("/api/links/:id", (req, res) => {
  const id = req.params.id;
  const secretCode = req.body.secretCode;

  conn.query(
    `SELECT id, secretCode FROM urlaliaser WHERE id = ?`,
    id,
    (err, rows) => {
      if (err) {
        res.status(500).json(err);
        return;
      } else if (rows.length === 0) {
        res.status(404).json({ error: "no such ID found in the database" });
      } else if (secretCode !== rows[0].secretCode || secretCode === null) {
        res.status(403).json({ error: "incorrect secret code" });
      } else {
        conn.query(`DELETE FROM urlaliaser WHERE id = ?`, id, (err, rows) => {
          if (err) {
            res.status(500).json({
              error: err.message,
            });
            return;
          }
          //itt miért nem tudok egy message-et visszaküldeni? return res.status(204).json(rows); mindig 1-et dob vissza
          const message = { success: `${id} deleted` };
          res.status(204).json(rows);
        });
      }
    }
  );
});

app.listen(PORT, () => {
  console.log(`Server is running and listening at port ${PORT}.`);
});

module.exports = app;
