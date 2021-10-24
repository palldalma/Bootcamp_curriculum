const userinput = document.querySelector("input");
const button = document.querySelector("button");
const character = document.querySelector(".character");
const starredMovies = document.querySelector(".movies");

const xhr = new XMLHttpRequest();
let movies;
getMovies();

button.addEventListener("click", () => {
  starredMovies.innerHTML = "";
  xhr.open("GET", `https://swapi.dev/api/people/?search=${userinput.value}`);

  xhr.send();
  xhr.onload = () => {
    const result = JSON.parse(xhr.responseText);

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
  };
});

function getMovies() {
  xhr.open("GET", "https://swapi.dev/api/films/");
  xhr.send();
  xhr.onload = () => {
    movies = JSON.parse(xhr.responseText).results;
  };
}
