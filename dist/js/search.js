(function () {
    var app = angular.module('app', []);
    app.controller('UsersController', ['$scope', '$http', function ($scope, $http) {
        $http.get('../dist/data/zabytki_2.csv').success(function (data) {
            $scope.zabytki = data;

            var arr = CSVToArray(data, ';');

            var mojeZabytyki = arr.filter(function (item) {
                for (var i = 0; i < item.length; i++) {
                    if (item[i].indexOf('kościół') != -1) {
                        return true;
                    }
                }

                return false;
            });

            mojeZabytyki = mojeZabytyki.map(function (item) {
                return {
                    address: item[1] + ' ' + item[2],
                    description: item[3]
                }
            });

            console.log(mojeZabytyki);

            //$scope.$watch('selectedMonumentId', function () {
            //    var filtered = $scope.zabytki.filter(function (item) {
            //        return item.id  === $scope.selectedMonumentId;
            //    });
            //
            //    $scope.selectedMonument = filtered.length > 0 ? filtered[0] : null;
            //});
        });

    }]);
})();
