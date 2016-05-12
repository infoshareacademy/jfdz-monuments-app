/**
 * Created by Konrad on 2016-04-26.
 */
//$(document).ready(function () {
//    $('.zwiedzany_zabytek1').hide();
//    $('.zwiedzany_zabytek2').hide();
//    $('.zwiedzany_zabytek3').hide();
//    $('.zwiedzany_zabytek4').hide();
//    $('.zwiedzany_zabytek5').hide();
//    $('.zwiedzany_zabytek6').hide();
//});
//
//$(document).ready(function () {
//  $('.btn.btn-success').click(function () {
//      $('.zwiedzany_zabytek2').show();
//  })
//});

//angular mvc dla planu wycieczki

var touristApp = angular.module("touristApp", []);

//var model = {monuments:
//    [{name: "Żuraw"},
//    {name: "Stocznia Gdańska"},
//    {name: "Dwór Artusa"},
//    {name: "Fontanna Neptuna"},
//    {name: "Gdański Dworzec"},
//    {name: "Bazylika Mariacka"}]};
//touristApp.controller("touristCtrl", function ($scope) {
//    $scope.todo = model;
//});

var monuments = [
    {id: 'marker',  name: "Stocznia Gdańska"},
    {id: 'marker1', name: "Żuraw"},
    {id: 'marker2', name: "Dwór Artusa"},
    {id: 'marker3', name: "Gdański Dworzec"},
    {id: 'marker4', name: "Bazylika Mariacka"},
    {id: 'marker5', name: "Fontanna Neptuna"}
];

touristApp.controller("touristCtrl", function ($scope) {
    $scope.monuments = [];

    $scope.dodajZabytek = function (zabytekId) {
        var filteredList = monuments.filter(function (monument) {
            return monument.id == zabytekId;
        })

        if (filteredList.length > 0) {
            $scope.monuments.push(filteredList[0]);
        }
    }

});