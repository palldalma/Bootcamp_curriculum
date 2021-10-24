mysolution1;

let counter = 0;
const showDate = () => {
  if (counter < 1) {
    console.log(Date());
    counter++;
  } else {
    disable();
  }
};

const disable = () => {
  button.removeEventListener("click", showDate, true);
};

const button = document.querySelector("button");
button.addEventListener("click", showDate);
