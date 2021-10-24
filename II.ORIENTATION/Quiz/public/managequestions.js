//SUBMIT SECTION
//this script is for the 'create a new question' section

const form = document.querySelector("form");

window.onload = () => {
  getAllQuestions();
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const question = document.getElementById("question").value;

    const allRadioButtons = document.querySelectorAll("input[type=radio]");

    const answer_1 = document.getElementById("answer_1").value;
    const answer_2 = document.getElementById("answer_2").value;
    const answer_3 = document.getElementById("answer_3").value;
    const answer_4 = document.getElementById("answer_4").value;

    const radio1 = document.getElementById("radio1");
    const radio2 = document.getElementById("radio2");
    const radio3 = document.getElementById("radio3");
    const radio4 = document.getElementById("radio4");

    const userData = {
      question: question,
      answers: [
        {
          answer_1: answer_1,
          is_correct: 0,
        },
        {
          answer_2: answer_2,
          is_correct: 0,
        },
        {
          answer_3: answer_3,
          is_correct: 0,
        },
        {
          answer_4: answer_4,
          is_correct: 0,
        },
      ],
    };

    function setCorrectAnswer() {
      if (radio1.checked) {
        userData.answers[0].is_correct = 1;
      } else if (radio2.checked) {
        userData.answers[1].is_correct = 1;
      } else if (radio3.checked) {
        userData.answers[2].is_correct = 1;
      } else if (radio4.checked) {
        userData.answers[3].is_correct = 1;
      }
    }

    setCorrectAnswer();

    //validating if there is a correct answer given

    function validateRadioButtonsANDTextInputs() {
      let boolean1 = validateRadioButtons(allRadioButtons);
      let boolean2 = validateInputFields();
      if (boolean1 === true && boolean2 === true) {
        submitNewQuestion(userData);
      }

      swal("Oops", "Missing fields.", "error");
    }

    function validateRadioButtons() {
      for (let i = 0; i < allRadioButtons.length; i++) {
        if (allRadioButtons[i].checked) {
          return true;
        }
      }
      return false;
    }

    function validateInputFields() {
      if (
        question !== "" &&
        answer_1 !== "" &&
        answer_2 !== "" &&
        answer_3 !== "" &&
        answer_4 !== ""
      ) {
        return true;
      }
      return false;
    }

    validateRadioButtonsANDTextInputs();
  });
};

function submitNewQuestion(userData) {
  fetch("http://localhost:8080/api/questions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userData),
  })
    .then((response) => {
      if (response.status < 200 || response.status > 300) {
        throw new Error("The question was NOT added.");
      }
      return response;
    })
    .then((response) => {
      response.json();
    })
    .then((result) => {
      swal(
        "Good job!",
        "Your question was added to the question bank.",
        "success"
      );
      getAllQuestions();
      form.reset();
    })
    .catch((err) => {
      console.log("could not add your question, sorry");
    });
}

//MANAGE QUESTIONS

const containerOfAllQuestions = document.getElementById("allquestions");

// retrieving data for the manage question box from the database
function getAllQuestions() {
  fetch("http://localhost:8080/api/questions", {
    method: "GET",
  })
    .then((response) => {
      if (response.status < 200 || response.status > 300) {
        throw new Error("The questions could not be retrieved.");
      }
      return response;
    })
    .then((response) => {
      return response.json();
    })
    .then((result) => {
      showAllQuestions(result);
    })
    .catch((err) => {
      console.log("The questions are not available.");
    });
}

// displaying data received from the database
function showAllQuestions(array) {
  containerOfAllQuestions.innerHTML = "";
  array.forEach((element) => {
    let questionbox = document.createElement("div");
    let question = document.createElement("p");
    let deleteButton = document.createElement("button");

    questionbox.appendChild(question);
    questionbox.appendChild(deleteButton);
    containerOfAllQuestions.appendChild(questionbox);

    question.innerHTML = element.question;
    question.classList.add("q");
    deleteButton.innerHTML = `delete <i class="fas fa-trash"></i>`;
    deleteButton.style.color = "white";
    deleteButton.classList.add("delete");
    questionbox.classList.add("questionbox");

    deleteButton.addEventListener("click", () => {
      swal({
        title: "Are you sure?",
        text: `Once deleted, you will not be able to recover question "${element.question}"`,
        icon: "warning",
        buttons: true,
        dangerMode: true,
      }).then((willDelete) => {
        if (willDelete) {
          swal(`${element.question} was deleted`, {
            icon: "success",
          });
          deleteQuestion(element.id, element.question);
          questionbox.parentNode.removeChild(questionbox);
        } else {
          swal("Your question - ${question} - is safe!");
        }
      });
    });
  });
}

// every question is equipped with a delete option

function deleteQuestion(questionID) {
  fetch(`http://localhost:8080/api/questions/${questionID}`, {
    method: "DELETE",
  })
    .then((response) => {
      if (response.status < 200 || response.status > 300) {
        throw new Error("The questions could not be retrieved.");
      }
      return response;
    })
    .catch((err) => {
      console.log("The questions are not available.");
    });
}
