const world = document.querySelector(".world");
let star = document.querySelector(".star");

for (let i = 0; i < 10; i++) {
  const clone = star.cloneNode(true);
  world.appendChild(clone);
}

const stars = document.getElementsByClassName("star");

for (let i = 0; i < stars.length; i++) {
  stars[i].style.left = String(Math.floor(Math.random() * 100)) + "vw";
  stars[i].style.top = String(Math.floor(Math.random() * 50)) + "vh";
}

document.body.addEventListener("click", (event) => {
  const clone = star.cloneNode(true);
  clone.classList.remove("fallen");
  clone.style.left = event.layerX + "px";
  clone.style.top = event.layerY + "px";
  world.appendChild(clone);
});

setInterval(function () {
  let starsToFall = document.getElementsByClassName("star");
  let notFallen = [];
  for (let i = 0; i < starsToFall.length; i++) {
    if (!starsToFall[i].classList.contains("fallen")) {
      notFallen.push(starsToFall[i]);
    }
  }

  let fallingStar = notFallen[Math.floor(Math.random() * notFallen.length)];

  fallingStar.classList.add("fallen");
}, Math.random() * 5000);

const spans = document.querySelectorAll("span");
const tree = document.querySelector(".tree");

let currentsize = 2;

tree.addEventListener("click", (event) => {
  for (let i = 0; i < 7; i++) {
    spans[i].style.transform = `scale(${currentsize * 0.6}, ${
      currentsize * 1
    })`;
  }
  currentsize++;
});
