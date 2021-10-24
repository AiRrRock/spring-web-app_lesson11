angular.module('market-front').controller('profileController', function ($scope, $http) {
    $scope.loadOrders = function () {
        $http({
            url: 'http://localhost:5555/core/api/v1/orders',
            method: 'GET'
        }).then(function (response) {
            $scope.orders = response.data;
        });
    };

    $scope.loadMyProfile = function () {
        $http({
            url: 'http://localhost:5555/auth/api/v1/users/me',
            method: 'GET'
        }).then(function (response) {
            $scope.userProfile = response.data;
        });
    };

    $scope.loadOrders();
    $scope.loadMyProfile();
});