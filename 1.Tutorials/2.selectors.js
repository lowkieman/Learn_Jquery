$(document).ready(function(){
    $("#hideme").click(function(){
        $("p").hide();
    })

    $("#showme").click(function(){
        $("p").show();
    })
});

//all selectors start with dollar sign $ ie
$("p") // selects all paragraphs
$(".box")
$("#box")
