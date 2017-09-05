// public/js/controllers/fotos-controller.js

angular.module('studying').controller('FotosController', function($scope, $http) {
    $scope.fotos = [];
    var promise = $http.get('/v1/fotos'); 
    promise.then(function(retorno) {
        $scope.fotos = retorno.data;
    });
});