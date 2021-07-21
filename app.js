$(document).ready(function(){
	$('.menu__icon').click(function(event){
		$('.menu__icon, .menu__block').toggleClass('_active');
		$('body').toggleClass('_lock');
	});


	/* Collapse */

	$("[data-collapse]").on("click", function(event){
		event.preventDefault();

		var $this = $(this),
		blockId = $this.data("collapse");
		$this.toggleClass("active");


		$(blockId).slideToggle();
	});


	/* Slider */

	$("[data-slider]").slick({
		dots: true,
		adaptiveHeight: true,
		slidesToShow: 3,
		slidesToScroll:3,
		speed: 1000,
		autoplay: true,
		draggable: false
	});

});