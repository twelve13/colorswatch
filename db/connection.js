const mongoose = require("mongoose");

const SwatchSchema = new mongoose.Schema(
	{
		color1: String,
		color2: String,
		color3: String
	});

mongoose.model("Swatch", SwatchSchema);
mongoose.connect("mongodb://localhost/colorswatch");

mongoose.exports = mongoose;