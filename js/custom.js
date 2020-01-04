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

