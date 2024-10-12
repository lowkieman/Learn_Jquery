$(document).ready(function(){

    // hide
    $(".hideme").click(function(){
        $(this).hide(1000);
    });

    // show
    $(".showme").click(function(){
        $(".hideme").show(1000);
    })

    // toggle

    $("button").click(function(){
        $(".hideme").toggle(500);
        $(".showme").toggle(500);
    })
});
