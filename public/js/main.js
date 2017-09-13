angular.module('studying', ['directives','ngAnimate','ngRoute'])
.config(function($routeProvider, $locationProvider){
	
	$locationProvider.html5Mode(true);

	$routeProvider.when('/fotos', {
		templateUrl: 'partials/main.html',
		controller: 'FotosController'
	});

	$routeProvider.when('/fotos/new', {
		templateUrl: 'partials/foto.html',
		controller: 'FotoController'
	});

	$routeProvider.when('/foto/edit/:fotoId', {
		templateUrl: 'partials/foto.html',
		controller: 'FotoController'
	});

	$routeProvider.otherwise({redirectTo: '/fotos'});
});