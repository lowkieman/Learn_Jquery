$(document).ready(function(){
    /* 
    * ancestor si a parent, grandparent,
    * great-grandparent, and so on
    * 
    * parent()
    * parents()
    * parentsUntil()
    */
   // .parent() method selects direct parent 
   $("a").parent().css({
    "text-transform": "capitalize",
    "height": "200px",
    "background-color" : "lime"
   });

   // .parents() selects the html parent an ancestor
   $("a").parents("body").css({
    "background-color": "red"
   });
   //.parentsUntill() method
   $("span").parentsUntil("div").css({
    "background-color": "white"
   })
})