angular.module('market-front').controller('adminController', function ($scope, $http, $location) {
    const contextPath = 'http://localhost:5555/core/';

    $scope.createProduct = function () {
        if ($scope.new_product == null) {
            alert('Форма не заполнена');
            return;
        }
        $http.post(contextPath + 'api/v1/products', $scope.new_product)
            .then(function successCallback(response) {
                $scope.new_product = null;
                alert('Продукт успешно создан');
                $location.path('/store');
            }, function failureCallback(response) {
                console.log(response);
                alert(response.data.messages);
            });
    }

    $scope.checkRole = function () {
        $http({
            url: contextPath + 'api/v1/admin/check',
            method: 'GET'
        }).then(function successCallback(response) {
        }, function errorCallback(response) {
            $location.path('/');
        });
    }

    $scope.checkRole();
});