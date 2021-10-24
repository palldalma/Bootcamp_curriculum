const scifiCollection = document.querySelectorAll(".sci-fi");
const dramaCollection = document.querySelectorAll(".drama");
const comedyCollection = document.querySelectorAll(".comedy");

const genreSelector = document.getElementById("genre");
const movieSelector = document.getElementById("movie");
const movieSelectorReset = document.getElementById("movie").innerHTML;

let pick = document.getElementsByTagName("p")[0];

//I am planning to refactor the code in the body of the if statements to make it more of a DRY code
genreSelector.addEventListener("input", (event) => {
  if (event.target.value === "Sci-fi") {
    movieSelector.innerHTML = "";
    scifiCollection.forEach((movie) => {
      movieSelector.appendChild(movie);
    });

    pick.textContent = `The selected movie is: ${scifiCollection[0].textContent}`;
  } else if (event.target.value === "Drama") {
    movieSelector.innerHTML = "";
    dramaCollection.forEach((movie) => {
      movieSelector.appendChild(movie);
    });

    pick.textContent = `The selected movie is: ${dramaCollection[0].textContent}`;
  } else if (event.target.value === "Comedy") {
    movieSelector.innerHTML = "";
    comedyCollection.forEach((movie) => {
      movieSelector.appendChild(movie);
    });
    pick.textContent = `The selected movie is: ${comedyCollection[0].textContent}`;
  } else if (event.target.value === "Select a genre") {
    movieSelector.innerHTML = "";
    movieSelector.innerHTML = movieSelectorReset;
    pick.textContent = "The selected movie is:";
  }
});

movieSelector.addEventListener("input", (event) => {
  pick.textContent = "The selected movie is:";
  pick.textContent += ` ${event.target.value}`;
});
