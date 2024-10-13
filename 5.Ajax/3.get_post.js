$.noConflict();
//or
var jq = $.noConflict(); 
$(document).ready(function(){
    // GET- Requests data from a specified resource
    // POST - Submits data to be processed to a specified resource
    $(".get").click(function(){
        $.get("templates/demo.asp", function(data, status){
            $("#one").text("Data: " + data + "\nStatus: " + status)
        });

        $(".post").click(function(){
            $.post("templates/demo.asp",{
                name: "Wilfred Tinega",
                city: "Murang'a"
            },
            function(data, status){
                alert("Data: " + data + "\nStatus: " + status);
            })
        })
    })

})