// Header's scrolling effect
$(document).ready(function(){
    $('.header').height($(window).height());
    
   })

// Navbar button's scroll
$(".navbar a").click(function(){
    $("html, body").animate({
     scrollTop:$("#" + $(this).data("value")).offset().top
    },1000)
    
    })