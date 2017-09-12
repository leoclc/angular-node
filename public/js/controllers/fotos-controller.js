// public/js/controllers/fotos-controller.js

angular.module('studying').controller('FotosController', function($scope, $http) {
    $scope.fotos = [];
    $scope.filtro = '';
    var promise = $http.get('/v1/fotos'); 
    promise.success(function(data) {
        $scope.fotos = data;
    })
    .error(function(error) {
        console.log(error);
    });
});