$(document).ready(function(){
    $(".slidedown").click(function(){
        $(".div1").slideDown(1000);
    });

    $(".slideup").click(function(){
        $(".div1").slideUp("fast")
    });
    // toggles up and down
    $(".slidetoggle").click(function(){
        $(".div1").slideToggle(1000)
    })
})