$(document).ready(function(){
    $(".text1").click(function(){
        $(".get").text("Hello world! using .text()")
    });

    $(".html1").click(function(){
        $(".get").html("hello world again using html()")
    });

    $(".val").click(function(){
        $("#text").val("Wilfred Tinega");
    });

    $("attr1").click(function(){
        $("#test").attr("href", function(i, origValue){
            return origValue + "/jquery/"
        })
    })
    
})