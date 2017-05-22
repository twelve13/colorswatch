const mongoose = require("mongoose");

const SwatchSchema = new mongoose.Schema(
	{
		name: String,
		color1: String,
		color2: String,
		color3: String
	});

const Swatch = mongoose.model("Swatch", SwatchSchema);
mongoose.connect("mongodb://localhost/colorswatch");
mongoose.connection.on("error", function(err){
	console.log(err)
});
mongoose.connection.once("open", function() {
	console.log("connected to db")
});
module.exports = {Swatch};