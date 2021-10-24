"use strict";

const asteroidList = document.querySelector("ul.asteroids");

const newAsteroid = document.createElement("li");
newAsteroid.id = "b555";
newAsteroid.textContent = "The Green Fox";
asteroidList.appendChild(newAsteroid);

const businessAsteroid = document.querySelector(".b328");
asteroidList.removeChild(businessAsteroid);
