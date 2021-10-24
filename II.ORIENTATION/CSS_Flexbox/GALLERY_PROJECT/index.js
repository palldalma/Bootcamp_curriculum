const thumbnail = document.querySelector(".thumbnail");
const thumbnails = document.querySelector(".thumbnails");

for (let index = 0; index < 8; index++) {
  const clonedThumbnail = thumbnail.cloneNode(true);
  thumbnails.appendChild(clonedThumbnail);
}

const images = document.querySelectorAll(".thumbnail-inner");

const projected = document.getElementById("projector");

let currentPicturePosition = 0;

for (let i = 0; i < images.length; i++) {
  images[i].style.backgroundImage = `url(assets/${[i]}.jpg)`;
  projected.style.backgroundImage = `url(assets/${[0]}.jpg)`;
  images[i].addEventListener("click", () => {
    projected.style.backgroundImage = images[i].style.backgroundImage;
    currentPicturePosition = i;
  });
}

const right = document.getElementById("right");

right.addEventListener("click", () => {
  if (currentPicturePosition !== images.length - 1) {
    projected.style.backgroundImage =
      images[currentPicturePosition + 1].style.backgroundImage;
    currentPicturePosition++;
  } else {
    currentPicturePosition = 0;
    projected.style.backgroundImage =
      images[currentPicturePosition].style.backgroundImage;
  }
});

const left = document.getElementById("left");

left.addEventListener("click", () => {
  if (currentPicturePosition !== 0) {
    projected.style.backgroundImage =
      images[currentPicturePosition - 1].style.backgroundImage;
    currentPicturePosition--;
  } else {
    currentPicturePosition = images.length - 1;
    projected.style.backgroundImage =
      images[currentPicturePosition].style.backgroundImage;
  }
});
