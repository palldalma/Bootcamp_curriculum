const express = require("express"); //import express
const path = require("path"); //Do not forget to load the path module.

const app = express(); //use express - new instance of express
const PORT = 3000;

app.use(express.static("assets")); //set how and from where should express serve our static files.

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

//Doubling
//test1 // http://localhost:3000/doubling - throws {"error":"Please provide an input!"}
//test2 // http://localhost:3000/doubling?input=45 - throws {"received":45,"result":90}

app.get("/doubling", (req, res) => {
  if (req.query.input === null || req.query.input === undefined) {
    const err = {
      error: "Please provide an input!",
    };
    res.json(err);
  } else {
    const inputNum = parseInt(
      req.query.input
    ); /*The parseInt() function parses a string argument and returns an integer*/
    const answer = {
      received: inputNum,
      result: inputNum * 2,
    };
    res.json(answer);
  }
});

//Greeter
app.get("/greeter", (req, res) => {
  const title = req.query.title;
  const name = req.query.name;

  if (!title && !name) {
    res.status(400).json({ error: "Please provide a name and a title!" });
  } else if (!title) {
    res.status(400).json({
      error: "Please provide a title!",
    });
  } else if (!name) {
    res.status(400).json({ error: "Please provide a name!" });
  } else {
    res.json({
      welcome_message: `Oh, hi there ${name}, my dear ${title}!`,
    });
  }
});

//Appenda
app.get("/appenda/:input", (req, res) => {
  const { input } = req.params;
  console.log(input);
  const output = input + "a";
  res.status(200).json({ appended: output });
});

//Do until
// app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.post("/dountil/:action", (req, res) => {
  const until = parseInt(req.body.until);
  const operation = req.params.action;

  function sum(input) {
    let sum = 0;
    for (let i = 0; i <= input; i++) {
      sum += i;
    }
    return sum;
  }

  function factorial(input) {
    let factorial = 1;
    for (let i = 1; i <= input; i++) {
      factorial *= i;
    }
    return factorial;
  }

  if (operation === "sum") {
    let output = { result: sum(until) };
    res.status(200).json(output);
  }

  if (operation === "factor") {
    let output = { result: factorial(until) };
    res.status(200).json(output);
  }
});

app.listen(PORT, () => {
  console.log(`The server is up and running on ${PORT}`);
}); //configure your app to listen on a port
