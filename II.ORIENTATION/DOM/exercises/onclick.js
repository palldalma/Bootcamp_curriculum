//Turn the party on and off by clicking the button. (the whole page)

const button = document.querySelector("button");
let party = true;
const _body = document.querySelector("body");
button.onclick = () => {
  if (_body.classList.contains("party")) {
    _body.classList.remove("party");
  } else {
    _body.classList.add("party");
  }
};
