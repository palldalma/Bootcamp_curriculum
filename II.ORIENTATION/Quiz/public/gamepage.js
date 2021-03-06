let scoreCounter = document.getElementById("score");
let score = 0;
scoreCounter.innerHTML = `SCORE: ${score}`;

let question = document.getElementById("question");
let answerbox = document.getElementById("answers");

function getANewQuestion() {
  question.innerHTML = "";
  answerbox.innerHTML = "";
  fetch("http://localhost:8080/api/game", {
    method: "GET",
  })
    .then((response) => {
      if (response.status === 404) {
        swal("Quiz finished");
      } else if (response.status < 200 || response.status > 300) {
        throw new Error("No access to the requested data.");
      }
      return response;
    })
    .then((response) => response.json())
    .then((result) => {
      question.innerHTML = result.question;
      createAnswerButtons(result.answers);
      currentQuestion = result.question_id;
    })
    .catch((err) => {
      console.log("The requested data could not be fetched." + err);
    });
}

window.onload = () => {
  getANewQuestion();
};

function createAnswerButtons(arrayOfAnswers) {
  arrayOfAnswers.forEach((answer, i) => {
    const button = document.createElement("button");
    button.innerHTML = arrayOfAnswers[i].answer;
    answerbox.appendChild(button);
    answerColoring(answer, button);
  });
}

function answerColoring(answer, button) {
  if (answer.is_correct === 1) {
    button.addEventListener("click", () => {
      button.style.backgroundColor = "#66FF99";
      score++;
      scoreCounter.innerHTML = `SCORE: ${score}`;
    });
  } else if (answer.is_correct === 0) {
    button.addEventListener("click", () => {
      button.style.backgroundColor = "#FF6666";
    });
  }
}

//this event listener prevents the page from being clickable again
answerbox.addEventListener("click", () => {
  const buttons = document.querySelectorAll("button");
  buttons.forEach((button) => {
    let old_element = button;
    let new_element = button.cloneNode(true);
    old_element.parentNode.replaceChild(new_element, old_element);
  });

  setTimeout(() => {
    getANewQuestion();
  }, 500);
});

// hogy csin??ljam meg, hogy ne ism??tl??djenek a k??rd??sek? pr??b??ltam a result.question_id-kat kigy??jteni egy k??ls?? array-be, de az aszinkronit??s miatt szerintem felborul ??s nem tudja belepusholni a sz??mot
// mi??rt crashel be a szerver egy id?? ut??n?
// hol van a f??l??sleges console.log?
