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
// app.use(bodyParser.json()); 
app.use(bodyParser.json({ extended: true })); 
app.use("/assets", express.static("public"));

app.get("/", (req, res) => {
	res.render("swatches")
});

app.get("/swatches", (req, res) => {
	models.Swatch.find({}).then(function(swatches) {
		res.json(swatches)
	});
});

app.get("/swatches/:name", (req, res) => {
	models.Swatch.findOne(req.params).then(function(swatch) {
		res.json(swatch);
	});
});

app.post("/swatches", (req, res) => {
	models.Swatch.create(req.body).then(function(swatch) {
		res.json(swatch);
	})
})

app.put("/swatches/:name", (req, res) => {
	models.Swatch.findOneAndUpdate({name: req.params.name}, req.body, {new: true}).then(function(swatch){
		res.json(swatch);
	})
})

app.delete("/swatches/:name", (req, res) => {
	models.Swatch.findOneAndRemove({name: req.params.name}).then(function(){
		res.json({success: true})
	})
})

app.listen(4000, () => {
	console.log("listening on 4000")
});