const result = document.querySelector("h1");
window.addEventListener("keyup", (event) => {
  console.log(event);
  result.innerHTML = event.key;
});
