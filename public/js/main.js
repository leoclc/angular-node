angular.module('studying', ['directives','ngAnimate','ngRoute'])
.config(function($routeProvider){
	$routeProvider.when('/fotos', {
		templateUrl: 'partials/main.html',
		controller: 'FotosController'
	});
});