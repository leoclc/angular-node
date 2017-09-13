// public/js/controllers/fotos-controller.js

angular.module('studying').controller('FotosController', function($scope, $http) {
    $scope.fotos = [];
    $scope.filtro = '';
    $scope.message = '';
    var promise = $http.get('/v1/fotos'); 
    promise.success(function(data) {
        $scope.fotos = data;
    })
    .error(function(error) {
        console.log(error);
    });

    $scope.remove = function(foto) {
        $http.delete('/v1/fotos/' + foto._id)
        .success(function() {
        	var index = $scope.fotos.indexOf(foto);
        	$scope.message = 'Foto ' + foto.titulo + ' removed!';
        	$scope.fotos.splice(index, 1);
        })
        .error(function(erro) {
            $scope.message = 'Error deleting' + foto.titulo;
        });
    };
});