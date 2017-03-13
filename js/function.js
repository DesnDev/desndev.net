$('.menu').on('click', function() {
	$('nav ul').css('display', 'block');
	$('nav ul').fadeTo(1000, 1);
});
$('.mobile-cross').on('click', function() {
	$('nav ul').fadeTo(1000, 0);
	$('nav ul').css('display', 'none');
});