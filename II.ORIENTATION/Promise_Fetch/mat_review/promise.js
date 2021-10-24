fetch(
  `https://api.giphy.com/v1/gifs/search?api_key=${api_key}&q=cat&limit=16&offset=${offsetValue}&rating=g&lang=en`,
  {
    method: "GET",
  }
)
  .then((response) => {
    if (response.status < 200 || response.status > 300) {
      throw new Error("No access to the requested data.");
    }
    return response;
  })
  .then((response) => response.json())
  .then((result) => {
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
  })
  .catch((err) => {
    console.log("The requested data could not be fetched.");
  });
