
/*var socket = io();
socket.on('connect', function () {
	console.log('Conncted to socket.io server!');
	socket.emit('my other event', { my: 'data' });
});
*/

$(window).scroll(function(){
	if($('.navbar').offset().top > 50){
		$('.navbar-fixed-top').addClass('top-nav-collapse');
	} else {
		$('.navbar-fixed-top').removeClass('top-nav-collapse');
	}
});

$(function(){
	$('.page-scroll a').bind('click', function(){
		var $anchor = $(this);
		$('html, body').stop().animate({
			scrollTop: $($anchor.attr('href')).offset().top
		}, 1500, 'easeInOutExpo');
		event.preventDefault();
	});

	$('.navbar-nav a').on('click', function(){
    	$('.navbar-toggle').click() //bootstrap 3.x by Richard
    });
});