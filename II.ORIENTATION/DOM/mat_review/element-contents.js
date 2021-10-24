"use strict";

const container = document.querySelector(".container");
console.log("innerHTML:", container.innerHTML);
console.log("textContent:", container.textContent);
container.innerHTML = "This is your <strong>new content!</strong>";
