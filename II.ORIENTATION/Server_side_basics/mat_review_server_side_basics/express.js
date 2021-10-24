const express = require("express");

let app = express();

app.get("/" /*route*/, function (request, response) {
  response.send("this is the homepage"); //content-type not needed in the header because express is clever enough to figure it out
});
app.listen(3000);

//MIDDLEWARE

app.use("/assets", function (request, response, next) {
  console.log(req.url); //middleware = code between request and response
  next();
});

app.use(
  "/assets" /*matches up the route*/,
  express.static(
    "assets"
  ) /*maps to the directory where all the static files are stored*/
);
