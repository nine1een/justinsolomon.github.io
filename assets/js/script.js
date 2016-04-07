// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        return false;
    });
});

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
  if ($(this).attr('class') != 'dropdown-toggle active' && $(this).attr('class') != 'dropdown-toggle') {
    $('.navbar-toggle:visible').click();
  }
});

/* Photography Scripts */

/* show div's on scroll */
$(document).ready(function() {
    
    
    /* Check the location of each desired element */
        $('.p-container + .p-container').each( function(i){
            
            var bottom_of_object = $(this).offset().top + $(this).height() - 200;
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            /* If the object is completely visible in the window, fade it it */
            if( bottom_of_window > bottom_of_object ){
                $(this).addClass('animate_fadeIn');
            }
            
        });
    
    /* Every time the window is scrolled ... */
    $(window).scroll( function(){
        
        /* Check the location of each desired element */
        $('.p-container + .p-container').each( function(i){
            
            var bottom_of_object = $(this).offset().top + $(this).height() - 200;
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            /* If the object is completely visible in the window, fade it it */
            if( bottom_of_window > bottom_of_object ){
                $(this).addClass('animate_fadeIn');
            }
            
        }); 
    
    });
    
});





