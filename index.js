const express = require("express");
const app = express();

app.listen(4000, () => {
	console.log("listening on 4000")
});

app.get("/", (req, res) => {
	res.send("Welcome to Colorswatch")
});

app.set("view engine", "hbs");
