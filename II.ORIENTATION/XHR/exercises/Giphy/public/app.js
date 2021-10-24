const api_key = "sDk0nx6RWrVYlwcp9FQiQWEpeAPd8CnK";
const xhr = new XMLHttpRequest();

xhr.open(
  "GET",
  `https://api.giphy.com/v1/gifs/search?api_key=${api_key}&q=cat&limit=10&offset=0&rating=g&lang=en`,
  true
);
xhr.send();

xhr.onload = () => {
  const result = JSON.parse(xhr.responseText);
  console.log(result);
  let body = document.querySelector("body");

  for (let i = 0; i < result.data.length; i++) {
    let picture = document.createElement("img");
    picture.src = result.data[i].images["480w_still"].url;
    body.appendChild(picture);
    picture.addEventListener("click", () => {
      picture.src = result.data[i].images.original.url;
    });
  }
};

xhr.onerror = (err) => {};

// const stillURL = result.data[i].images["480w_still"].url;
// const gifURL = result.data[i].images.original.url;
