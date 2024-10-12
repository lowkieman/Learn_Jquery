$(document).ready(function(){
    $("#hideme").click(function(){
        $("p").hide();
    });

    $("#showme").click(function(){
        $("P").show()
    });

    $("h1").mouseenter(function(){
        document.getElementById("h1").innerHTML = 
        "You entered h1 element";
    })

    $("#showme").mousedown(function(){
        document.getElementById("showme").style.background = "red";
    });

    $("#showme").mouseup(function(){
        document.getElementById("showme").style.background = "lime";
    });

    //hover takes two  functions
    $("#hideme").hover(function(){
        document.getElementById("hideme").style.border = "2px solid red"
    },

    function(){
        document.getElementById("hideme").style.border = "2px solid green";
        $(this).css("background-color", "lime")
        $(this).css("color","white")
    })

    $("input").focus(function(){
        $(this).css("background-color","limegreen")
    });

    $("input").blur(function(){
        $(this).css("background-color", "orange")
    })
})

/* 
* EVENTS
* $(document).ready()
* click()
* dblclick()
* mouseenter()
* mouseleave()
* mousedown()
* hover()
* focus()
* blur()
*/