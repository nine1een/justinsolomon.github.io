//show  navbar fter scroll
function collapseNavbar() {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("scrolled");
    } else {
        $(".navbar-fixed-top").removeClass("scrolled");
    }
}

$(window).scroll(collapseNavbar);
$(document).ready(collapseNavbar);

function lowerSectionTitle() {
    if ($(".navbar").offset().top > 300) {
        $(".section-title").addClass("lower");
    } else {
        $(".section-title").removeClass("lower");
    }
}

$(window).scroll(lowerSectionTitle);
$(document).ready(lowerSectionTitle);

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
  if ($(this).attr('class') != 'dropdown-toggle active' && $(this).attr('class') != 'dropdown-toggle') {
    $('.navbar-toggle:visible').click();
  }
});

$(function(){
    $(".typed").typed({
        strings: ["Web Developer", "C# Developer", "Photographer", "Producer"],
        typeSpeed: 50,
        loop: true,
        cursorChar: "",
        backDelay: 2000,
        startDelay: 1000,
    });
});

