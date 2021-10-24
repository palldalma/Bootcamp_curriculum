const form = document.querySelector("form");
const message = document.getElementById("response");

window.onload = () => {
  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const url = document.getElementById("url").value;
    const alias = document.getElementById("alias").value;

    const userInput = {
      url: url,
      alias: alias,
    };

    submitNewAlias(userInput);
  });
};

function submitNewAlias(userInput) {
  if (userInput.url !== "" && userInput.alias !== "") {
    fetch("http://localhost:8080/api/links", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userInput),
    })
      .then((response) => {
        if (response.status === 400) {
          message.style.color = "red";
          message.innerHTML = " <strong> Alias is already in use. </strong>";

          throw new Error("Alias is already in use.");
        } else if (response.status < 200 || response.status > 300) {
          throw new Error("Data could not be added");
        }
        return response;
      })
      .then((response) => {
        return response.json();
      })
      .then((result) => {
        message.style.color = "black";
        message.innerHTML = `Your URL is aliased to <strong> ${result.alias} </strong> and your secret code is <strong>${result.secretCode} </strong>.`;

        form.reset();
      })
      .catch((err) => {
        console.log(err);
      });
  } else {
    window.alert("EMPTY FIELDS");
  }
}
