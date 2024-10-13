$(document).ready(function(){
    // load() method
    // $(selector).load(url,data,callback function)
    $(".two").click(function(){
        $("#one").load("templates/html.html img",
            function(){
                $(".two").text("Image has loaded")
            }
        )
    })
    

})