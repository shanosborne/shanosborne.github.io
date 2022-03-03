// Add scroll effect to header
$(document).ready(function(){
    $('.header').height($(window).height());
    
   })

// Add button scroll to navbar
$(".navbar a").click(function(){
    $("html, body").animate({
     scrollTop:$("#" + $(this).data("value")).offset().top
    },1000)
    
    })