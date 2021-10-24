let firstDiv = document.querySelector("div");
let section = document.querySelector("section");

for (let i = 2; i <= 100; i++) {
  let newDiv = firstDiv.cloneNode(true);
  section.appendChild(newDiv);
  newDiv.textContent = i;
}

let allDivs = document.querySelectorAll("div");

function setClass(div) {
  const number = parseInt(div.textContent);
  for (let i = 2; i < number; i++) {
    if (number % i === 0) {
      return div.classList.add("not-prime");
    }
  }
  return div.classList.add("prime");
}

let counter = 0;
let myInterval = setInterval(() => {
  setClass(allDivs[counter]);
  counter++;
  if (counter >= 100) {
    return clearInterval(myInterval);
  }
}, 100);
