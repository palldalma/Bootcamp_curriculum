//mysolution2;
const button = document.querySelector("button");
let counter = 0;
button.addEventListener("click", (e) => {
  if (counter === 0) {
    console.log(Date());
    counter++;
  } else {
    e.target.disabled === true;
  }
});
