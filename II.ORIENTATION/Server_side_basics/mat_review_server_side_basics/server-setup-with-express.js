//npm init -y
//npm install express --save

const express = require("express");
const app = express();
const PORT = 3000;

app.use(express.urlencoded({ extended: false })); //middleware activation

//app.get("/", (req,res) => {
//whatever
//})

//app.post("/hey", middlewareFunction, (req,res) => {
//whatever
//})

app.listen(PORT);
