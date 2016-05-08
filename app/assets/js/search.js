(function () {
    var app = angular.module ('app', []);
    app.controller('UsersController', ['$scope', '$http', function ($scope, $http) {
        $http.get('../dist/data/zabytki.json').success(function (data) {
            $scope.zabytki = data;
        });

        $scope.$watch('selectedMonumentId', function () {
            var filtered = $scope.zabytki.filter(function (item) {
                return item.id  === $scope.selectedMonumentId;
            });

            $scope.selectedMonument = filtered.length > 0 ? filtered[0] : null;
        });
    }]);
})();
