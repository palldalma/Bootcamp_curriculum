const { response } = require("express");

window.onload = () => {
  const form = document.querySelector("form");
  const container = document.querySelector(".container");

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const searchTerm = form.search.value;
    const URL = `https://api.giphy.com/v1/gifs/search?api_key=sDk0nx6RWrVYlwcp9FQiQWEpeAPd8CnK&q=q=${searchTerm}&limit=10&rating=g&lang=en`;
    fetch(URL)
      .then((response) => response.json())
      .then((responseBody) /* ez továbbra is a response */ => {
        responseBody.data.forEach((gifs) => {
          addImg(gifs);
        });
      })
      .catch((error) => console.log(error));
  });

  container.addEventListener("click", (event) => {
    console.log(event.target);

    const gif = {
      name: event.target.alt,
      url: event.target.src,
    };

    fetch("/gifs", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(gif),
    })
      .then((response) => response.json())
      .then((responseBody) => {
        console.log(responseBody);
      })
      .catch((error) => console.log(error));
  });

  function addImg(picture) {
    const img = document.createElement("img");
    img.src = picture.images.downsized.url;
    img.alt = picture.title;
    container.appendChild(img);
  }
};
