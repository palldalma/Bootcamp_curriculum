// Add an item that says 'The Green Fox' to the asteroid list.
// Add an item that says 'The Lamplighter' to the asteroid list.
// Add a heading saying 'I can add elements to the DOM!' to the .container.
// Add an image, any image, to the container.

const asteroidList = document.querySelector("ul.asteroids");

const newAsteroid = document.createElement("li");
newAsteroid.textContent = "The Green Fox";

const newAsteroid2 = document.createElement("li");
newAsteroid2.textContent = "The Lamplighter";

asteroidList.appendChild(newAsteroid);
asteroidList.appendChild(newAsteroid2);

const newHeading = document.createElement("h1");
newHeading.textContent = "I can add elements to the DOM.";
const container = document.querySelector(".container");
container.appendChild(newHeading);

const newImage = document.createElement("img");
newImage.src = "https://love-eskuvo.hu/images/mainwtm-cache/15985200093561.jpg";
container.appendChild(newImage);
