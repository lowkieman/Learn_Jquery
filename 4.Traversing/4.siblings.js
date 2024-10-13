$(document).ready(function(){
    //sibling()
    $(".sibling").siblings().css({
        "text-transform" : "capitalize"
    });

    //next()
    $(".sibling").next().css({
        "color" : "gold"
    });

    $(".sibling").nextAll().css({
        "background-color" : "green",
        "margin": "5px 0 0 0"
    });

    $(".sibling").nextUntill(".prevall").css({
        "color": "white"
    })
})