$(document).ready(function(){
    $(".animate").click(function(){
        $(".div2").animate({
            left : "0px",
            opacity : "0.5",
            height : "toggle",
            width : "100px"
        },1000)
    })
})