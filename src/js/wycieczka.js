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


var model = {monuments:
    [{name: "Żuraw"},
    {name: "Stocznia Gdańska"},
    {name: "Dwór Artusa"},
    {name: "Fontanna Neptuna"},
    {name: "Gdański Dworzec"},
    {name: "Bazylika Mariacka"}]};

var touristApp = angular.module("touristApp", []);
touristApp.controller("touristCtrl", function ($scope) {
    $scope.todo = model;
});