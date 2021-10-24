const express = require("express");

const app = express();
const PORT = 3000;

app.use(express.json());

app.post("/translate", (req, res) => {
  const input = req.body;

  if (input.text === undefined) {
    res.json({
      error: `I can't translate that!`,
    });
  } else {
    let result = "";
    let vowel = [
      "a",
      "á",
      "e",
      "é",
      "i",
      "í",
      "o",
      "ó",
      "ö",
      "ő",
      "u",
      "ú",
      "ü",
      "ű",
    ];
    let splittedInput = input.text.split("");
    let resultArray = [];

    for (let i = 0; i < splittedInput.length; i++) {
      resultArray.push(splittedInput[i]);
      for (let j = 0; j < vowel.length; j++) {
        if (splittedInput[i].toLowerCase() === vowel[j]) {
          resultArray.push("v" + splittedInput[i].toLowerCase());
        }
      }
    }

    result = resultArray.join("");
    res.json({ translated: result, lang: "teve" });
  }
});

app.listen(PORT, () => {
  console.log(`App listens on http://localhost:${PORT}`);
});
