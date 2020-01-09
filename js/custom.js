$(document).ready(function() {

	$('.menu-toggle').click(function(){
		$(this).toggleClass('active');
		$('.navigation').slideToggle(400);
	})

	$('.navigation__item a').click(function(){
	 	$(this).parents('.navigation').find('.navigation__item').removeClass('active');
		$(this).parent().addClass('active');
		if($(window).width() < 600) {
			$('.navigation').slideToggle(400);
		}
		return false
	});

	$(function() {
		$('.banner-slider').slick({
	 			arrows: false,
	 			infinite: true,
		 		dots: false,
		  		// autoplay: true,
			  	// autoplaySpeed: 4000,
			  	speed: 3000,
	 	});
	 	$('.arrow-right').on('click', function() {
	  		$('.banner-slider').slick('slickNext');
		});
	 	$('.arrow-left').on('click', function() {
	  		$('.banner-slider').slick('slickPrev');
		});
	 });
// 
});
