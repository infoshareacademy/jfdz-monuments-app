var touristApp = angular.module("touristApp", ['ui.sortable']);


var monuments = [
    {id: 'marker', name: "Stocznia Gdańska", street: "ul. Nabrzeże 5a"},
    {id: 'marker1', name: "Żuraw", street: "ul. Witosa 33"},
    {id: 'marker2', name: "Dwór Artusa", street: "ul. Długa 12"},
    {id: 'marker3', name: "Gdański Dworzec", street: "ul. Grunwaldzka 2"},
    {id: 'marker4', name: "Bazylika Mariacka", street: "ul. Piwna 41"},
    {id: 'marker5', name: "Fontanna Neptuna", street: "ul. Długa 19"}
];

touristApp.controller("touristCtrl", function ($scope) {
    $scope.monuments = [];

    $scope.dodajZabytek = function (zabytekId) {
        var filteredList = monuments.filter(function (monument) {
            return monument.id == zabytekId;
        });
        if( filteredList.length > 0 ){
            var exists = $scope.monuments.filter(function (monument) {
                return monument.id == zabytekId;

            });
            console.log(exists);
            if( exists.length == 0 ) {
                $scope.monuments.push(filteredList[0]);
            }
        }
    };

    $scope.usunZabytki = function () {
        $scope.monuments.length = 0;
    };

    $scope.usunZabytek = function (monument) {
        var index = $scope.monuments.indexOf(monument);
        $scope.monuments.splice(index, 1);
    }
});
