const models = require("./connection.js");
const seedData = require("./seeds");



models.Swatch.remove({}, function(err, data){
	if(err) {
		console.log("error" + err);
	}else{
		models.Swatch.collection.insert(seedData).then((data) => {
			console.log("inserted" + data);
			process.exit();
		});
	}

})