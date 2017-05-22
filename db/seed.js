const mongoose = require("./connection");
const seedData = require("./seeds");

const Swatch = mongoose.model("Swatch");

Swatch.remove({}).then(() => {
	Swatch.collection.insert(seedData).then(() => {
		process.exit();
	});
});