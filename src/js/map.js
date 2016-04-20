/**
 * Created by Konrad on 2016-04-20.
 */
function init_map(){var myOptions = {
    zoom:15,center:new google.maps.LatLng(54.3496712,18.646688499999982),
    mapTypeId: google.maps.MapTypeId.ROADMAP};
    map = new google.maps.Map(document.getElementById('map'), myOptions);
    marker = new google.maps.Marker({map: map,position: new google.maps.LatLng(54.3496712,18.646688499999982)});
    marker1 = new google.maps.Marker({map: map,position: new google.maps.LatLng(54.3596712,18.646688499999982)});
    infowindow = new google.maps.InfoWindow({content:'<strong>LOZA</strong><br>Gdansk, Targ Weglowy 1<br>'});
    google.maps.event.addListener(marker, 'click', function(){infowindow.open(map,marker);});
    infowindow.open(map,marker);}google.maps.event.addDomListener(window, 'load', init_map);
    google.maps.event.addListener(marker1, 'click', function(){
        document.getElementById('plan_wycieczki').innerHTML('jestem tutaj');

    });