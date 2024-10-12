$(document).ready(function(){
    /* chaining allows us to run multiple jquery methods within a single 
    * statement
    */

    $("p").css("color", "red").slideUp(2000)
    .slideDown(2000)

})