const express = require("express");
const app = express();

app.use(express.json());

app.get("/yondu", (req, res) => {
  const { distance, time } = req.query;

  const output = {
    distance: distance,
    time: time,
    speed: distance / time,
  };

  if (!distance || !time || time <= 0) {
    res.status(400).json({ error: "wrong params" });
    return;
  }

  res.status(200).json(output);
});

module.exports = app;
