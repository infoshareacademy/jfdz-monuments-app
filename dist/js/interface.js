/**
 * Created by HANULA on 2016-05-05.
 */
$(document).ready(function(){

    (function () {
        if(! localStorage.name)  {
            $('#PopUp-wrapper').removeAttr('style', 'display:none');
        }

    }());

    $(".trigger-slide").click(function() {
        $('.menu-hidden').toggleClass('menu-show-up')
    });

    $( ".user-settings").click(function() {
        $('.user-settings-dropdown').toggle();

    });

    // skins //


    $('.motive-blue-btn').click(function(){
        $('.blue-skin').css('background-color','#5193ff');
    });

    $('.motive-red-btn').click(function(){
        $('.blue-skin').css('background-color','#CC0000');
    });

    $('.motive-green-btn').click(function(){
        $('.blue-skin').css('background-color','#73AD21');
    });

    $(function () {
        $('#userName').append(localStorage.getItem("name"));

    });


});

