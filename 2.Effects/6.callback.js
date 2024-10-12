$(document).ready(function(){
    $(".stop").click(function(){
        $(".animate").hide(100, function(){
            alert("The animation button is now hidden")
        })
    })
})