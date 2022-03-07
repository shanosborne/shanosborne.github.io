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

// Set "See More" button to work on desktop or mobile using touchstart
$(document).ready(function() {
    $('#see-more-btn').on('click touchstart', function() {
        window.location.href='#about';
      });
});