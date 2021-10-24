const btn = document.querySelector("button");
const result = document.getElementById("result");
const counterText = document.getElementById("counter").innerHTML;

let counter = 0;

window.onload = () => {
  setTimeout(() => {
    btn.addEventListener("click", () => {
      counter++;
      if (counter === 3) {
        result.innerHTML = "5 seconds elapsed and clicked 3 times";
      }
    });
  }, 5000);
};
