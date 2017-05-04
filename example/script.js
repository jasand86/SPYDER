$(document).ready(function() {

	$('.toggles-wrap button').on('click', function() {
		
		$('.toggles-wrap button').removeClass('active');
		$(this).addClass('active');

		var toggle = $(this).data('view');

		$('section').removeClass('is-visible').addClass('animated');
		$('section[data-view="'+ toggle +'"]').addClass('fadeIn is-visible');		
	});
	// -------------
	// STICKY HEADER
	// -------------
	// $(window).scroll(function () {
	// 	var height = $(window).height();
	// 	var scrollTop = $(window).scrollTop();

	// 	if(scrollTop > 80) {
	// 		$('.sticky-content').css({ 'position': 'fixed', 'top' : '0' });
	// 		$('.main-nav').addClass('scroll');
	// 		$('.showcase, .main-content#contact').not('.showcase#mobile').css('marginTop', '50px');
	// 	}
	// 	else {
	// 		$('.sticky-content').css({ 'position': 'static', 'top': '80px'});
	// 		$('.main-nav').removeClass('scroll');
	// 		$('.showcase, .main-content#contact').css('marginTop', '0px');
	// 	}
	// });






});

// triggers animations when objects hits a certain distance (px) from the top of window

// $(window).scroll(function() {
// 	$('.start-anim').each(function(){
// 		var imagePos = $(this).offset().top;
// 		var topOfWindow = $(window).scrollTop();

// 		if (imagePos < topOfWindow+500) {
// 			$(this).children('.left').addClass("animated fadeInLeft");
// 			$(this).children('.right').addClass("animated fadeInRight");
// 		}
// 	});
// });