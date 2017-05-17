/**
 * Created by matthewaltomare on 10/05/2017.
 */

$(function(){
    $(".dropdown").hover(
        function() {
            $('.dropdown-menu', this).stop( true, true ).fadeIn("fast");
            $(this).toggleClass('open');
            $('b', this).toggleClass("caret caret-up");
        },
        function() {
            $('.dropdown-menu', this).stop( true, true ).fadeOut("fast");
            $(this).toggleClass('open');
            $('b', this).toggleClass("caret caret-up");
        });
});

//created piece by piece of other JS found online

$(document).ready(function(){
    var i = -1;
    function nextMsg() {
        if(i === messages.length - 1){
            i = -1;
        }

        i++;

        //language=JQuery-CSS
        $(`#home-splash-content-text`).html(messages[i]).fadeIn(500).delay(times[i]).fadeOut(500, nextMsg);

    }
// list of messages to display
    var messages = [
        "Shot By Matt",
        "YOUR PHOTOGRAPHER",
        "SERVICES PROVIDED BY",

    ];

//list of times
    var times = [
        2000,
        2000,
        2000
    ];

// initially hide the message
    //language=JQuery-CSS format=false
    $(`#home-splash-content-text`).hide();

// start animation
    nextMsg();
});

$(document).ready(function(){
    var i = -1;
    function nextMsg() {
        if(i === messages.length - 1){
            i = -1;
        }

        i++;

        //language=JQuery-CSS
        $('#home-splash-content-text2').html(messages[i]).fadeIn(500).delay(times[i]).fadeOut(500, nextMsg);

    }
// list of messages to display
    var messages = [

        "PHOTOGRAPHY & VIDEOGRAPHY",
        "FOR HIRE",
        "MATTHEW ALTOMARE",
    ];

//list of times
    var times = [
        2000,
        2000,
        2000,
        2000,
    ];

// initially hide the message
    //language=JQuery-CSS
    $(`#home-splash-content-text2`).hide();

// start animation
    nextMsg();
});

require([
    'PhotoSwipe/dist/photoswipe.css',
    './photoswipe-ui-default.js'
], function( PhotoSwipe, PhotoSwipeUI_Default ) {

    //  	var gallery = new PhotoSwipe( someElement, PhotoSwipeUI_Default ...
    //  	gallery.init()
    //  	...

});

