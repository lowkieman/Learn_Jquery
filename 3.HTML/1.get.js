$(document).ready(function(){
    /*
    * GET METHODS INCLUDE
    * text() = $(selector).text()
    * html() = $(selector).html()
    * val() =  $(selector).val()
    * attr() = $(selector).attr()
    */
   $(".btn1").click(function(){
    alert("text: " + $("#test").text())
   });

   $(".btn2").click(function(){
    alert("HTML: " + $("#test").html())
   });

   $(".btn3").click(function(){
    alert("value: " + $("#text").val())
   });

   $("btn4").click(function(){
    alert($("#text").attr("name"));
   })
})