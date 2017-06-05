
$(function() {

	$("#menu a").click(function() {
		var element = $(this).attr('href');

        if(element == '#feature') {
            $('html, body').animate({
                scrollTop: 500
            }, 2000);
        } else {
            $('html, body').animate({
                scrollTop: $(element).offset().top
            }, 2000);
        }
	});

    $('.slider').slick({
    	infinite: true,
    	dots: true,
    	arrows: true,
    });

    $('.review').slick({
    	infinite: true,
    	dots: false,
    	arrows: true,
    });


    // ===== Scroll to Top ==== 
    $(window).scroll(function() {
        if ($(this).scrollTop() >= 50) {        // If page is scrolled more than 50px
            $('#return-to-top').fadeIn(200);    // Fade in the arrow
        } else {
            $('#return-to-top').fadeOut(200);   // Else fade out the arrow
        }
    });
    
    $('#return-to-top').click(function() {      // When arrow is clicked
        $('body,html').animate({
            scrollTop : 0                       // Scroll to top of body
        }, 500);
    });
    
});