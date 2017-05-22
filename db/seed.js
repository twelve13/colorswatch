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

//this is the same
// models.Swatch.remove({}).then(function(){
// 	models.Swatch.collection.insert(seedData).then(function(){
// 		process.exit();
// 	})
// })