const container = document.querySelector(".container");
const randomNumber = Math.floor(Math.random() * 10) + 1;
const scrollThreshold = 300;

function random_bg_color(divElement) {
  var x = Math.floor(Math.random() * 256);
  var y = Math.floor(Math.random() * 256);
  var z = Math.floor(Math.random() * 256);
  var bgColor = "rgb(" + x + "," + y + "," + z + ")";

  divElement.style.background = bgColor;
}

for (let i = 0; i < randomNumber; i++) {
  const newDivElement = document.createElement("div");
  container.appendChild(newDivElement);
  random_bg_color(newDivElement);
}

window.addEventListener("scroll", (event) => {
  if (window.innerHeight + window.scrollY >= scrollThreshold) {
    //document.body.offsetHeight
    for (let i = 0; i < 10; i++) {
      const newDivElement = document.createElement("div");
      container.appendChild(newDivElement);
      random_bg_color(newDivElement);
    }
  }
});
