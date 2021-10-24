const listElements = document.querySelectorAll("li");
const button = document.querySelector("button");
const result = document.querySelector(".result");

const count = () => {
  let counter = 0;
  for (let i = 0; i < listElements.length; i++) {
    counter++;
  }
  result.innerHTML = `There are ${counter} elements in the list.`;
};

button.addEventListener("click", count);
