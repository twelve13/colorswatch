angular
	.module("colorswatch", [
		"ui.router",
		"ngResource"
	])
	.config([
		"$stateProvider",
		RouterFunction
	])


	function RouterFunction($stateProvider) {
		$stateProvider
		.state("welcome", {
			url: "/",
			templateUrl: "/assets/js/ng-views/welcome.html"
		})
		.state("index", {
			url: "/swatches",
			templateUrl: "/assets/js/ng-views/index.html"
		})
	}