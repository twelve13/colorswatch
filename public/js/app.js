console.log('is this loading')

angular
	.module("colorswatch", [
		"ui.router",
		"ngResource"
	])
	.config([
		"$stateProvider",
		RouterFunction
	])
	.factory("SwatchFactory", [
		"$resource",
		SwatchFactoryFunction
	])
	.controller("IndexController", [
		"$state",
		"SwatchFactory",
		indexControllerFunction
	])
	.controller("ShowController", [
		"$stateParams",
		"SwatchFactory",
		showControllerFunction
	])

	function RouterFunction($stateProvider) {
		$stateProvider
		.state("welcome", {
			url: "/",
			templateUrl: "/assets/js/ng-views/welcome.html"
		})
		.state("index", {
			url: "/swatches",
			templateUrl: "/assets/js/ng-views/index.html",
			controller: "IndexController",
			controllerAs: "vm"
		})
		.state("show", {
			url: "/swatches/:name",
			templateUrl: "/assets/js/ng-views/show.html",
			controller: "ShowController",
			controllerAs: "vm"
		})
	}

function SwatchFactoryFunction ($resource) {
	return $resource("/swatches/:name", {}, {
		update: {method: "PUT"}
	});
}

function indexControllerFunction ($state, SwatchFactory) {
	this.swatches = SwatchFactory.query()
	console.log("inside the index controller function")
	console.log(this.swatches)
	this.newSwatch = new SwatchFactory()
	this.create = function() {
		console.log('new swatch')
		this.newSwatch.$save().then(function(swatch){
			$state.go("show", {name: swatch.name})
		})
	}
}

function showControllerFunction ($stateParams, SwatchFactory) {
	this.swatch = SwatchFactory.get({name: $stateParams.name})
	this.message = "show test"
	console.log("inside the show controller function")
	console.log(this.swatch)
	this.update = function(){
		this.swatch.$update({name: $stateParams.name})
		console.log("updating!")
	}
}
