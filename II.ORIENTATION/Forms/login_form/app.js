const submit = document.querySelector("button");
submit.addEventListener("click", (event) => {
  event.preventDefault();
});

const togglePassword = document.querySelector("#togglePassword");
const password = document.querySelector("#password");

togglePassword.addEventListener("click", function (e) {
  // toggle the type attribute
  const type =
    password.getAttribute("type") === "password" ? "text" : "password";
  password.setAttribute("type", type);
  // toggle the eye slash icon
  this.classList.toggle("fa-eye-slash");
});

const help = document.querySelector(".help");

help.addEventListener("click", () => {
  window.alert("Try to remember.");
});
