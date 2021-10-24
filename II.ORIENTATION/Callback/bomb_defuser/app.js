let display = document.querySelector(".display");

let counter = 10;
let myInterval = setInterval(() => {
  counter--;
  display.innerHTML = counter;
  if (counter <= 0 || button.classList.contains("clicked")) {
    clearInterval(myInterval);
    display.innerHTML = `Bomb defused just on time, remaining time: ${counter} seconds`;
  }
}, 1000);

let myTimeOut = setTimeout(() => {
  display.textContent = "Bomb exploded";
}, 10000);

let button = document.querySelector("button");

let defuser = button.addEventListener("click", () => {
  button.classList.add("clicked");

  return clearTimeout(myTimeOut);
});
