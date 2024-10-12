$(document).ready(function(){

    //fadeIn() used to show hidden element
    $("#fadein").click(function(){
        $(".hideme").fadeIn(1000);
    });
    //fadeOut() used to hide element
    $("#fadeout").click(function(){
        $(".hideme").fadeOut(1000);
    });

    //fadetoggle() used to toggle in and out
    $("#fadetoggle").click(function(){
        $(".hideme").fadeToggle(1000)
    });

    //fadeTo() used to toggle from certain opacity to another
    // can call off and on
    $("#fadeto").click(function(){
        $(".hideme").fadeTo(1000, 0.6)
    })
})