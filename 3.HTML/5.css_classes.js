$(document).ready(function(){
    /*$(".css_class").mouseeenter(function(){
        $(".add").addClass("box")
    });
    $(".css_class").mouseeleave(function(){
        $(".add").removeClass("box")
    });
*/
    $(".css_class").click(function(){
        $(".add").toggleClass("box")
    })
})