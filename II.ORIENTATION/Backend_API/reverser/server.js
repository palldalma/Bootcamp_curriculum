const express = require("express");
const app = express();
const PORT = 3000;

app.use(express.json());

app.post("/sith", (req, res) => {
  const input = req.body.text;

  if (!input || input === undefined) {
    res.json({
      error: "Feed me some text you have to, padawan young you are. Hmmm.",
    });
  } else {
    let sentences = input.toLowerCase().split(".");
    let resultArray = [];
    let randomtext = ["Hey you", "Oh, wow", "Yeah"];

    for (let i = 0; i < sentences.length - 1; i++) {
      let reorderedSubsentence = switchPlaces(sentences[i]).join(" ");
      resultArray.push(fixOutput(reorderedSubsentence));
      resultArray.push(
        randomtext[Math.floor(Math.random() * Math.floor(randomtext.length))]
      );
    }

    let result = resultArray.join(".");
    res.json({ "sth-text": result });
  }
});

app.listen(PORT);

function switchPlaces(sentence) {
  let wordArray = sentence.toLowerCase().split(" ");
  for (let i = 0; i < wordArray.length; i++) {
    if (i % 2 === 0) {
      let temp = wordArray[i];
      wordArray[i] = wordArray[i + 1];
      wordArray[i + 1] = temp;
    }
  }
  return wordArray;
}

function fixOutput(sentence) {
  sentence = sentence.charAt(0).toUpperCase() + sentence.slice(1);
  sentence = sentence.replace(/ +(?= )/g, "");

  return sentence;
}
