$(document).ready(function(){
    //children() method
    //find()
    $("body").children().css({
        "width" : "200px",
        "height" : "200px",
        "margin" : "20px auto",
        "background-color": "blue"
    });

    $(".sibling1").children("p").css({
        "width":"100px",
        "height": "100px",
        "margin" :"10px",
        "background-color":"wheat"
    });

    //find() method
    $("div").find("a").css({
        "text-decoration" : "none",
        "font-size" : "20px",
        "padding" : "10px",
        "display" : "block"
        
    })
})