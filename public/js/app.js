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
		"SwatchFactory",
		indexControllerFunction
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
			contollerAs: "vm"
		})
	}

function SwatchFactoryFunction ($resource) {
	return $resource("/swatches/:name", {}, {
		update: {method: "PUT"}
	});
}

function indexControllerFunction (SwatchFactory) {
	// this.swatches = SwatchFactory.query()
	console.log("inside the index controller function")
}
