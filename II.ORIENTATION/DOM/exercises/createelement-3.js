const kids = [
  { petName: "Wattled crane", owner: "Bryant" },
  { petName: "Devil, tasmanian", owner: "Alejandro" },
  { petName: "Mynah, common", owner: "Nelie" },
  { petName: "Dolphin, common", owner: "Mariele" },
  { petName: "Gray duiker", owner: "Maddalena" },
  { petName: "Crab (unidentified)", owner: "Lucine" },
  { petName: "Ant (unidentified)", owner: "Lorianna" },
  { petName: "Bison, american", owner: "Tommie" },
  { petName: "Yellow mongoose", owner: "Vivyan" },
  { petName: "Carpet snake", owner: "Veda" },
  { petName: "Lesser mouse lemur", owner: "Isidor" },
];
// 1) Create an <article> element for each kid
// 2) Create a <h3> and a <p> element for each article and append them as a child to the <article>
//     - The H3 should contain the owner's name
//     - The p should contain the pet's name
//3) Add the article to the pets main.

kids.forEach((kid) => {
  let newArticle = document.createElement("article");
  document.body.appendChild(newArticle);
});

const articles = document.getElementsByTagName("article");

for (let i = 0; i < articles.length; i++) {
  let newHeading = document.createElement("h3");
  articles[i].appendChild(newHeading);
  newHeading.textContent = kids[i].owner;
  let pet = document.createElement("p");
  articles[i].appendChild(pet);
  pet.textContent = kids[i].petName;

  document.querySelector("main").appendChild(articles[i]);
}
