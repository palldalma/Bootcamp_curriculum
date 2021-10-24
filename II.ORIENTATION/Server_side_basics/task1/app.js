const express = require("express");

let app = express();

app.use("/assets", express.static("assets"));

app.get("/", function (request, response) {
  response.sendFile(__dirname + "/index.html");
});

const port = 3000;
app.listen(port, () => {
  console.log(`listening to ${port}`);
});
