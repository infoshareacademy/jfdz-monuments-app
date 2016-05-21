var app = angular.module('app', []);

app.controller('UsersController', ['$scope', '$http', function ($scope, $http) {
    $http.get('../dist/data/zabytki_2.csv').success(function (data) {
        $scope.kategorieZabytkow = ['kościół'];
        $scope.zabytki = data;

        var arr = CSVToArray(data, ';');

        var mojeZabytyki = arr.filter(function (item) {
            console.log(item[3], item[3].indexOf('kościół'));
            return item[3].indexOf('kościół') !== -1;
        });

        mojeZabytyki = mojeZabytyki.map(function (item) {
            return {
                address: item[1] + ' ' + item[2],
                description: item[3]
            }
        });

        $scope.zabytki = mojeZabytyki;

        ng repeat

        //$scope.$watch('selectedMonumentId', function () {
        //    var filtered = $scope.zabytki.filter(function (item) {
        //        return item.id  === $scope.selectedMonumentId;
        //    });
        //
        //    $scope.selectedMonument = filtered.length > 0 ? filtered[0] : null;
        //});
    });

    $scope.onCategoryChange = function () {
        console.log('zmiana kategorii, na ', $scope.selectedCategory);
    }
}]);
