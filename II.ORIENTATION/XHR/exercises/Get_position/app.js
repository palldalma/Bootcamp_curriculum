const api_key = "cc7b80dbb418710fd94b3622957cca9d";
let button = document.querySelector("button");
let iFrame = document.querySelector("iframe");

button.addEventListener("click", () => {
  let ipAddress = document.querySelector("input").value;

  let httpRequest = new XMLHttpRequest();
  httpRequest.open(
    "GET",
    `http://api.ipapi.com/${ipAddress}?access_key=${api_key}`,
    true
  );
  httpRequest.send();
  httpRequest.onload = function () {
    const result = JSON.parse(httpRequest.responseText);
    console.log(result);
    iFrame.setAttribute(
      "src",
      `https://www.google.com/maps/embed/v1/place?key=AIzaSyCpc-OlKPSeJq6Sc8wCRdEg-t2CzPPilXQ
    &q=${result.city}`
    );
  };
});
