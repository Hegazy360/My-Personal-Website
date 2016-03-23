$(function() {
  smoothScroll(300);
  mobileNav();
});

function mobileNav() {
  $('.mobile-nav-toggle').on('click', function() {
    var status = $(this).hasClass('is-open');
    if (status) {
      $('.mobile-nav-toggle, .mobile-nav').removeClass('is-open');
    } else {
      $('.mobile-nav-toggle, .mobile-nav').addClass('is-open');
    }
  });
}

function smoothScroll (duration) {
	$('a[href^="#"]').on('click', function(event) {

	    var target = $( $(this).attr('href') );

	    if( target.length ) {
	        event.preventDefault();
	        $('html, body').animate({
	            scrollTop: target.offset().top
	        }, duration);
	    }
	});
}


$(window).scroll(function() {
  youtubeVidScroll();
});


function youtubeVidScroll() {

  var wScroll = $(window).scrollTop();

  $('.video-strip').css('background-position', 'center -' + wScroll + 'px');
}
