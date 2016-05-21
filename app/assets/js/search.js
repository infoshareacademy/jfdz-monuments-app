var app = angular.module('app', []);

app.controller('UsersController', ['$scope', '$http', function ($scope, $http) {
    $scope.zabytki = {};
    $http.get('../dist/data/zabytki_2.csv').success(function (data) {
        $scope.kategorieZabytkow = [
            {title: 'Kościoły', searchString: 'kościół'},
            {title: 'Spichlerze', searchString: 'spichlerz'},
            {title: 'Pałace', searchString: 'pałac'},
            {title: 'Stocznie', searchString: 'stoczn'},
            {title: 'Bramy', searchString: 'brama'},
            {title: 'Cmentarze', searchString: 'cmentarz'}
        ];

        $scope.arr = CSVToArray(data, ';');

        $scope.kategorieZabytkow.forEach(function (kategoria, index) {
            var mojeZabytyki = $scope.arr.filter(function (item) {
                return item[3].indexOf(kategoria.searchString) !== -1;
            });

            mojeZabytyki = mojeZabytyki.map(function (item) {
                return {
                    OPIS: item[3],

                    ADRES: item[1] + ' ' + item[2]

                }
            });
            $scope.zabytki[index] = mojeZabytyki;
        });
    });

}]);
