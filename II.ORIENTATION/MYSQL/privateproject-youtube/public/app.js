window.onload = () => {
  let songRequest = new XMLHttpRequest();
  songRequest.open("GET", "http://localhost:3000/songs");
  songRequest.send();

  songRequest.onload = (response) => {
    //az onload saját magát adja vissza, vagyis a response itt kitörölhető paraméter és a köv sorban írhatnám let resultObject=JSON.parse(songRequest.response)
    let resultObject = JSON.parse(response.target.response); //ez itt még egy olyan resultObject, amiben sok songObject van
    resultObject.forEach((song) => {
      document
        .querySelector(".mainContainer")
        .appendChild(createSongIframe(song));
    });
  };
};
const createSongIframe = (songObject) => {
  let currentIframe = document.createElement("iframe");
  currentIframe.width = "320";
  currentIframe.height = "200";
  currentIframe.allow =
    "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
  currentIframe.src = songObject.url;

  currentIframe.classList.add("video");
  return currentIframe;
};
