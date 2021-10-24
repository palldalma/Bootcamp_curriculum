const userinput = document.querySelector("input");
const button = document.querySelector("button");
const character = document.querySelector(".character");
const starredMovies = document.querySelector(".movies");

let movies;
getMovies();

button.addEventListener("click", () => {
  starredMovies.innerHTML = "";

  fetch(`https://swapi.dev/api/people/?search=${userinput.value}`, {
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

      const charName = result.results[0].name;
      character.innerHTML = charName;

      const charMovies = result.results[0].films;

      console.log(charMovies);

      character.addEventListener("click", (event) => {
        starredMovies.innerHTML = "";
        for (let i = 0; i < movies.length; i++) {
          for (let j = 0; j < charMovies.length; j++) {
            if (movies[i].url === charMovies[j]) {
              const title = movies[i].title;
              const newLI = document.createElement("li");
              newLI.innerHTML = title;
              starredMovies.appendChild(newLI);
            }
          }
        }
      });
    });
});

function getMovies() {
  fetch(`https://swapi.dev/api/films/`, {
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
      movies = result.results;
    });
}
