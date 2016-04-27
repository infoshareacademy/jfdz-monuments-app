/**
 * Created by Konrad on 2016-04-26.
 */
$(document).ready(function () {
    $('.zwiedzany_zabytek1').hide();
    $('.zwiedzany_zabytek2').hide();
    $('.zwiedzany_zabytek3').hide();
    $('.zwiedzany_zabytek4').hide();
    $('.zwiedzany_zabytek5').hide();
    $('.zwiedzany_zabytek6').hide();
});

$(document).ready(function () {
  $('.btn.btn-success').click(function () {
      $('.zwiedzany_zabytek2').show();
  })
});

//angular mvc dla planu wycieczki

var myApp = angular.module("touristApp", []);

var model = [{monument: "Żuraw"},
    {monument: "Stocznia Gdańska"},
    {monument: "Dwór Artusa"},
    {monument: "Stocznia Gdańska"},
    {monument: "Gdański Dworzec"},
    {monument: "Bazylika Mariacka"}];

touristApp.controller("touristCtrl", function ($scope) {
    $scope.todo = model;
})