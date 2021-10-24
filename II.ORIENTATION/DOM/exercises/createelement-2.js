// Remove the king from the list.
// Fill the list based on the following list of objects.
// Only add the asteroids to the list.
// Each list item should have its category as a class and its content as text content.

const planetData = [
  {
    category: "inhabited",
    content: "Foxes",
    asteroid: true,
  },
  {
    category: "inhabited",
    content: "Whales and Rabbits",
    asteroid: true,
  },
  {
    category: "uninhabited",
    content: "Baobabs and Roses",
    asteroid: true,
  },
  {
    category: "inhabited",
    content: "Giant monsters",
    asteroid: false,
  },
  {
    category: "inhabited",
    content: "Sheep",
    asteroid: true,
  },
];

const asteroidList = document.querySelector("ul.asteroids");

const king = document.getElementsByTagName("li")[0];

asteroidList.removeChild(king);

for (let i = 0; i < planetData.length; i++) {
  let newElement = document.createElement("li");
  asteroidList.appendChild(newElement);
  newElement.classList.add("category");

  newElement.category = planetData[i].category;
  newElement.setAttribute("content", planetData[i].content);
  newElement.setAttribute("asteroid", planetData[i].asteroid);
}

console.log(asteroidList);

const asteroids = document.getElementsByTagName("li");
for (let i = 0; i < asteroids.length; i++) {
  if (asteroids[i].getAttribute("asteroid") === "false") {
    asteroidList.removeChild(asteroids[i]);
  }
}
