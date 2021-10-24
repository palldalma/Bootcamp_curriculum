const navbar = document.querySelector("nav");
const imageInspector = document.querySelector(".img-inspector");
let positionX = 0; //left, right
let positionY = 0; //up, down
let backgroundSize = 100;

navbar.addEventListener("click", (e) => {
  const direction = e.target.dataset.direction;
  if (direction === "up") {
    imageInspector.style.backgroundPositionY = `${(positionY -= 10)}px`;
  }
  if (direction === "down") {
    imageInspector.style.backgroundPositionY = `${(positionY += 10)}px`;
  }
  if (direction === "left") {
    imageInspector.style.backgroundPositionX = `${(positionX -= 10)}px`;
  }
  if (direction === "right") {
    imageInspector.style.backgroundPositionX = `${(positionX += 10)}px`;
  }
  if (direction === "in" && backgroundSize < 200) {
    imageInspector.style.backgroundSize = `${(backgroundSize += 10)}%`;
  }
  if (direction === "out" && backgroundSize > 10) {
    imageInspector.style.backgroundSize = `${(backgroundSize -= 10)}%`;
  }
});
