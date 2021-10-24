const form = document.querySelector("form");

const signupBTN = document.querySelector("#signupBTN");
const lovecatsBTN = document.querySelector("#lovecats");

signupBTN.disabled = true;
lovecatsBTN.disabled = true;

const respondSuccess = () => {
  window.alert("Thank you, you've successfully signed up for cat facts");
};
signupBTN.addEventListener("click", respondSuccess);
lovecatsBTN.addEventListener("click", respondSuccess);

form.addEventListener("change", (event) => {
  if (event.target.id === "yes") {
    lovecatsBTN.disabled = false;
  } else lovecatsBTN.disabled = true;
});
form.addEventListener("change", (event) => {
  console.log(event);
  if (event.target.id === "cat" || event.target.id === "dog") {
    signupBTN.disabled = false;
  } else if (
    document.getElementById("viktor").checked &&
    document.getElementById("no").checked
  ) {
    signupBTN.removeEventListener("click", respondSuccess);

    signupBTN.disabled = false;
    signupBTN.addEventListener("click", () => {
      window.alert("Sigh, we still added you to the cat facts list.");
    });
  } else signupBTN.disabled = true;
});
