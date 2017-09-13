angular.module('studying').controller('FotoController', function($scope, $http, $routeParams) {
    $scope.foto = {};
    $scope.message = '';

    if($routeParams.fotoId) {
		$http.get('/v1/fotos/' + $routeParams.fotoId)
        .success(function(foto) {
            $scope.foto = foto;
        })
        .error(function(error) {
            console.log(error);
            $scope.message = 'Could not fetch the fotos'
        });
    }

    $scope.submit = function() {
		if ($scope.form.$valid) {
            if($routeParams.fotoId) {
                $http.put('/v1/fotos/' + $scope.foto._id, $scope.foto)
                .success(function() {
                    $scope.message = 'Successfully updated';

                })
                .error(function(erro) {
                    console.log(erro);
                    $scope.message = 'Could not update the foto'+ $scope.foto._id;
                });
            }else{            	
	            $http.post('/v1/fotos', $scope.foto)
	            .success(function() {
	                $scope.foto = {};
	                $scope.message = 'Foto Successfully Added';
	            })
	            .error(function(error) {
	                console.log(error);
	                $scope.message = 'Could not Add this foto';
	            })
	        }
        }
    };

});