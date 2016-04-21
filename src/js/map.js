/**
 * Created by Konrad on 2016-04-20.
 */
var marker;
var marker1;
var marker2;
var marker3;
var marker4;
var marker5;
var marker6;

$(document).ready(function () {
    $('div#zabytki').hide();
});

function init_map(){var myOptions = {
    zoom:15,center:new google.maps.LatLng(54.3496712,18.646688499999982),
    mapTypeId: google.maps.MapTypeId.ROADMAP};
    map = new google.maps.Map(document.getElementById('map'), myOptions);
    marker = new google.maps.Marker({map: map,position: new google.maps.LatLng(54.3496712,18.646688499999982)});
    marker1 = new google.maps.Marker({map: map,position: new google.maps.LatLng(54.3596712,18.646688499999982)});
    infowindow = new google.maps.InfoWindow({content:'<strong>TARG WEGLOWY</strong><br>Gdansk, Targ Weglowy 1<br>'});
    //google.maps.event.addListener(marker, 'click', function(){infowindow.open(map,marker);});
    google.maps.event.addListener(marker, 'click', function(){
        $('div#zabytki').show().addClass("zabytek");
    });
    google.maps.event.addListener(marker1, 'click', function(){
        var monument2= document.getElementById('zabytek');
        monument2.innerHTML ="moja chata";
    });
    infowindow.open(map,marker);}
    google.maps.event.addDomListener(window, 'load', init_map);




//google.maps.on('click', marker, function(){
//  $('.plan_wycieczki').text('jestem tutaj');
//
//});