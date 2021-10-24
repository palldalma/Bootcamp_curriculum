const asteroid = document.querySelector("div");

console.log(asteroid.classList.value);

console.log("asteroid?", asteroid.classList.contains("asteroid"));
console.log("planet?", asteroid.classList.contains("planet"));

asteroid.classList.add("new-class");
asteroid.classList.remove("asteroid");
console.log("still asteroid?", asteroid.classList.contains("asteroid"));
