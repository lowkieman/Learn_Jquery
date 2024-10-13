$(document).ready(function(){
    $(".dime").click(function(){
        var text = "";
        text += "Width: " + 
        $(".add").outerWidth() + "<br>";
        
        text += "Height: " + 
        $(".add").outerHeight();
        $(".add").html(text);
    })
})