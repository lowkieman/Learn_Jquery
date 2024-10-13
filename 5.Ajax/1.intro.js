$(document).ready(function(){
    $("body").css({
        "background-color": "teal",
        "color" : "white"

    })
    $(".one").click(function(){
        $("#one").load("templates/demo_test.txt")
    })
})