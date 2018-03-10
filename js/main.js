(function($) {
	"use strict"

	///////////////////////////
	// Preloader
	$(window).on('load', function() {
		$("#preloader").delay(600).fadeOut();
	});

	///////////////////////////
	// Scrollspy
	$('body').scrollspy({
		target: '#nav',
		offset: $(window).height() / 2
	});

	///////////////////////////
	// Smooth scroll
	$("#nav .main-nav a[href^='#']").on('click', function(e) {
		e.preventDefault();
		var hash = this.hash;
		$('html, body').animate({
			scrollTop: $(this.hash).offset().top
		}, 600);
	});

	$('#back-to-top').on('click', function(){
		$('body,html').animate({
			scrollTop: 0
		}, 600);
	});

	///////////////////////////
	// Btn nav collapse
	$('#nav .nav-collapse').on('click', function() {
		$('#nav').toggleClass('open');
	});

	///////////////////////////
	// Mobile dropdown
	$('.has-dropdown a').on('click', function() {
		$(this).parent().toggleClass('open-drop');
	});

	///////////////////////////
	// On Scroll
	$(window).on('scroll', function() {
		var wScroll = $(this).scrollTop();

		// Fixed nav
		wScroll > 1 ? $('#nav').addClass('fixed-nav') : $('#nav').removeClass('fixed-nav');

		// Back To Top Appear
		wScroll > 700 ? $('#back-to-top').fadeIn() : $('#back-to-top').fadeOut();
	});

	///////////////////////////
	// magnificPopup
	$('.work').magnificPopup({
		delegate: '.lightbox',
		type: 'image'
	});

	///////////////////////////
	// Owl Carousel
	$('#about-slider').owlCarousel({
		items:1,
		loop:true,
		margin:15,
		nav: true,
		navText : ['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
		dots : true,
		autoplay : true,
		animateOut: 'fadeOut'
	});




	///////////////////////////
	// Load reviews
	// function getReview(image, name, timeDesc, content){
	// 	return '<div class="testimonial"><div class="testimonial-meta"><img src="{'+ image + 
	// 	'}" alt=""><h3 class="white-text">'+ name +
	// 	'</h3><span>'+timeDesc+
	// 	'</span></div><p class="white-text">'+ content + '</p></div>'
	// }

	// let map = new google.maps.Map(document.getElementById("map"));
	// let service = new google.maps.places.PlacesService(map);
	// let request = {
  	// 	placeId: "ChIJEScmSr7EmUcRB4zGVhKuy4E"
	// };
 	// service.getDetails(request, function(place, status) {
    //         if (status == google.maps.places.PlacesServiceStatus.OK) {
	// 			let slider = $("#testimonial-slider");
	// 			for (const review in place.reviews) {
	// 					slider.push(getReview(review.profile_photo_url,
	// 						review.author_name,
	// 						review.relative_time_description,
	// 						review.text))
					
	// 			}
    //         }
	// 	});

	$(document).ready(function() {
    
		/* Every time the window is scrolled ... */
		$(window).scroll( function(){
		
			/* Check the location of each desired element */
			$('.fader').each( function(i){
				
				var bottom_of_object = $(this).offset().top + 200;
				var bottom_of_window = $(window).scrollTop() + $(window).height();
				
				/* If the object is completely visible in the window, fade it it */
				if( bottom_of_window > bottom_of_object ){
					
					$(this).animate({'opacity':'1'},1000);
						
				}
				
			}); 
		
		});
		
	});


	////////////////////////
	////Reset form
	$(".reset-form").click(function() {
		let form = $(this).closest('form');
		form.find("input[type=text], textarea").val("");
		form.find("input[type=checkbox]").attr('checked', false);
	});

})(jQuery);
