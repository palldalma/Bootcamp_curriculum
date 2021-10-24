// If the fourth p has a 'dolphin' class, replace apple's content with 'pear'
// If the first p has an 'apple' class, replace cat's content with 'dog'
// Make apple red by adding a .red class

let pTags = document.querySelectorAll("p");

let apple = document.querySelector(".apple");
let cat = document.querySelector(".cat");

if (pTags[3].classList.value === "dolphin") {
  apple.textContent = "pear";
}

if (pTags[0].classList.value === "apple") {
  cat.textContent = "dog";
}

apple.classList.add("red");
