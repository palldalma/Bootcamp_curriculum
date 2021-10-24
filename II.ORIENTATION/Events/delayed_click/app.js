const btn = document.querySelector("button");
const result = document.getElementById("result");

btn.addEventListener("click", () => {
  setTimeout(() => {
    result.innerHTML = "2 seconds ellapsed";
  }, 2000);
});
