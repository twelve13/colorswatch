const express = require("express");
const app = express();
const bodyParser = require("body-parser");

const hbs = require("hbs");
const models = require("./db/connection");

app.set("view engine", "hbs");
// app.engine(".hbs", hbs({
//   extname:        ".hbs",
//   partialsDir:    "views/",
//   layoutsDir:     "views/",
//   defaultLayout:  "layout-main"
// }));
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: true })); 
app.use("/assets", express.static("public"));

app.get("/", (req, res) => {
	res.render("swatches")
});

app.get("/swatches", (req, res) => {
	models.Swatch.find({}).then(function(swatches) {
		res.json(swatches)
		console.log("swatches are" + swatches)
	});
});



app.listen(4000, () => {
	console.log("listening on 4000")
});