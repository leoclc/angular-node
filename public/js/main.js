angular.module('studying', ['directives','ngAnimate','ngRoute'])
.config(function($routeProvider, $locationProvider){
	
	$locationProvider.html5Mode(true);

	$routeProvider.when('/fotos', {
		templateUrl: 'partials/main.html',
		controller: 'FotosController'
	});

	$routeProvider.otherwise({redirectTo: '/fotos'});
});