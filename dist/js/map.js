/**
 * Created by Konrad on 2016-04-20.
 */
var marker;
var marker1;
var marker2;
var marker3;
var marker4;
var marker5;

function init_map(){var myOptions = {
    zoom:13,center:new google.maps.LatLng(54.3496712,18.646688499999982),
    mapTypeId: google.maps.MapTypeId.ROADMAP};
    map = new google.maps.Map(document.getElementById('map'), myOptions);
    marker = new google.maps.Marker({map: map,position: new google.maps.LatLng(54.3650775,18.641028600000027)});
    marker1 = new google.maps.Marker({map: map,position: new google.maps.LatLng(54.350646,18.657539000000043)});
    marker2 = new google.maps.Marker({map: map,position: new google.maps.LatLng(54.34888899999999,18.653610999999955)});
    marker3 = new google.maps.Marker({map: map,position: new google.maps.LatLng(54.3553334,18.64448429999993)});
    marker4 = new google.maps.Marker({map: map,position: new google.maps.LatLng(54.3498348,18.653284699999972)});
    marker5 = new google.maps.Marker({map: map,position: new google.maps.LatLng(54.34854499999999,18.653229499999952)});

    google.maps.event.addListener(marker, 'click', function(){
        $('div.zabytek.photo_stocznia').show();
        $('div.zabytek.photo_zuraw').hide();
        $('div.zabytek.photo_dwor_artusa').hide();
        $('div.zabytek.photo_gdanski_dworzec').hide();
        $('div.zabytek.photo_fontanna_neptuna').hide();
        $('div.zabytek.photo_bazylika_mariacka  ').hide();
    });
    google.maps.event.addListener(marker1, 'click', function(){
        $('div.zabytek.photo_zuraw').show();
        $('div.zabytek.photo_stocznia').hide();
        $('div.zabytek.photo_dwor_artusa').hide();
        $('div.zabytek.photo_gdanski_dworzec').hide();
        $('div.zabytek.photo_fontanna_neptuna').hide();
        $('div.zabytek.photo_bazylika_mariacka  ').hide();
    });
    google.maps.event.addListener(marker2, 'click', function(){
        $('div.zabytek.photo_dwor_artusa').show();
        $('div.zabytek.photo_zuraw').hide();
        $('div.zabytek.photo_stocznia').hide();
        $('div.zabytek.photo_gdanski_dworzec').hide();
        $('div.zabytek.photo_fontanna_neptuna').hide();
        $('div.zabytek.photo_bazylika_mariacka  ').hide();
    });
    google.maps.event.addListener(marker3, 'click', function(){
        $('div.zabytek.photo_gdanski_dworzec').show();
        $('div.zabytek.photo_dwor_artusa').hide();
        $('div.zabytek.photo_zuraw').hide();
        $('div.zabytek.photo_stocznia').hide();
        $('div.zabytek.photo_fontanna_neptuna').hide();
        $('div.zabytek.photo_bazylika_mariacka  ').hide();

    });
    google.maps.event.addListener(marker4, 'click', function(){
        $('div.zabytek.photo_bazylika_mariacka').show();
        $('div.zabytek.photo_gdanski_dworzec').hide();
        $('div.zabytek.photo_dwor_artusa').hide();
        $('div.zabytek.photo_zuraw').hide();
        $('div.zabytek.photo_stocznia').hide();
        $('div.zabytek.photo_fontanna_neptuna').hide();

    });
    google.maps.event.addListener(marker5, 'click', function(){
        $('div.zabytek.photo_fontanna_neptuna').show();
        $('div.zabytek.photo_bazylika_mariacka').hide();
        $('div.zabytek.photo_gdanski_dworzec').hide();
        $('div.zabytek.photo_dwor_artusa').hide();
        $('div.zabytek.photo_zuraw').hide();
        $('div.zabytek.photo_stocznia').hide();
    });

}
    google.maps.event.addDomListener(window, 'load', init_map);

