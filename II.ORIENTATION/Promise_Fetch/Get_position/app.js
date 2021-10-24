const api_key = "cc7b80dbb418710fd94b3622957cca9d";
let button = document.querySelector("button");
let iFrame = document.querySelector("iframe");

button.addEventListener("click", () => {
  let ipAddress = document.querySelector("input").value;

  fetch(`http://api.ipapi.com/${ipAddress}?access_key=${api_key}`, {
    method: "GET",
  })
    .then((response) => {
      if (response.status < 200 || response.status > 300) {
        throw new Error("No access to the requested data.");
      }
      return response;
    })
    .then((response) => response.json())
    .then((result) => {
      iFrame.setAttribute(
        "src",
        `https://www.google.com/maps/embed/v1/place?key=AIzaSyCpc-OlKPSeJq6Sc8wCRdEg-t2CzPPilXQ
      &q=${result.city}`
      );
    });
});
