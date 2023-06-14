// Smooth scrolling for navigation links
$(document).ready(function() {
    $(document).on('click', 'a.nav-link', function(event) {
        event.preventDefault();
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 800, 'easeInOutExpo');
    });
});
