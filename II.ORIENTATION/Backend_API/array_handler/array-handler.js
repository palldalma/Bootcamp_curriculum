const express = require("express");
const app = express();
const PORT = 3000;

// app.use(express.urlencoded({ extended: false })); //middleware activation
app.use(express.json());

function sumUp(input) {
  let sum = 0;
  for (let i = 0; i < input.length; i++) {
    sum += input[i];
  }
  return sum;
}

function countFact(input) {
  if (input.length === 0) {
    return 0;
  }
  let sum = 1;
  for (let i = 0; i < input.length; i++) {
    sum *= input[i];
  }
  return sum;
}

function double(input) {
  return input.map((element) => {
    return element * 2;
  });
}

app.post("/arrays", (req, res) => {
  const operation = req.body.what;
  const numbers = req.body.numbers;

  if (!operation || !numbers) {
    res.json({
      error: "Please provide what to do with the numbers!",
    });
  } else if (operation === "sum") {
    res.json({ result: sumUp(numbers) });
  } else if (operation === "multiply") {
    res.json({ result: countFact(numbers) });
  } else if (operation === "double") {
    res.json({ result: double(numbers) });
  }
});

app.listen(PORT);
