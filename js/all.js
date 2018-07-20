$(document).ready(function() {
	$('.header .menu .open-menu').click(function(event) {
		event.preventDefault();
		$('.header .menu ul').toggleClass('open');
	});
	$('.cart-container .product_container .product ul li .img i').click(function(event) {
		event.preventDefault();
		$(this).toggleClass('like');
	});


});