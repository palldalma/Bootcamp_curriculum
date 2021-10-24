const btn = document.querySelector("button");
const container = document.querySelector(".container");

btn.addEventListener("click", () => {
  fetch("http://api.icndb.com/jokes/random", {
    method: "GET",
  })
    .then((response) => {
      if (response.status < 200 || response.status > 300) {
        throw new Error("No access to the requested data.");
      }
      return response;
    })
    .then((response) => response.json())
    .then((result) => {
      console.log(result);
      const joke = result.value.joke;
      addJoke(joke);
    })
    .catch((err) => {
      console.log("The requested data could not be fetched.");
    });
});

function addJoke(joke) {
  const paragraph = document.createElement("p");
  paragraph.innerHTML = joke;
  container.innerHTML = "";
  container.appendChild(paragraph);
}
