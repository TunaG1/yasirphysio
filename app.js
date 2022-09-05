$(document).ready(function() {


    //MOBILE ONE
    var menu = "close";
    console.log(menu)
    $(".mobile-menu-toggle").click(function() {

        
        if (menu === "close") {
              $(this).parent().next(".mobile-nav").css("transform", "translate(0, 0)");
              console.log(this)
              menu = "open";
        } else {
              $(this).parent().next(".mobile-nav").css("transform", "translate(-100%, 0)");
              menu = "close";
        }
    });
    
    });