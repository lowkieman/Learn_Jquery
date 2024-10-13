$(document).ready(function(){
    $("div").first().css({
        "background" : "purple"
    })
    $("div").last().css({
        "background" : "purple"
    })

    $("div").eq("1").css({
        "background" : "yellow"
    })

    $("div").filter("a").css({
        "background" : "purple"
    })

    $("div").not("child1").css({
        "background" : "lime"
    })
})