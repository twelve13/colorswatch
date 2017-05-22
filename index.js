const express = require("express");
const app = express();
const bodyParser = require("body-parser");

const hbs = require("express-handlebars");
const models = require("./db/connection");

app.set("view engine", "hbs");
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: true })); 
app.use("/assets", express.static("public"));

app.get("/", (req, res) => {
	res.send("Welcome to Colorswatch")
});





app.listen(4000, () => {
	console.log("listening on 4000")
});