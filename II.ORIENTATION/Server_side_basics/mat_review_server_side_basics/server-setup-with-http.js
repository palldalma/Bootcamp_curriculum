//making a server
const http = require("http");

const server = http.createServer(function (request, response) {
  console.log("request was made: " + request.url);
  response.writeHead(200 /*status*/, { "Content-Type": "text/plain" });
  response.end("Hey ninjas");
});

server.listen(/*port number*/ 3000, /*ip address*/ "127.0.0.1");
console.log("now listening to port 3000");
