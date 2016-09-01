$(document).ready(function(){
 $('#collapse-navbar ul li a').click(function(event){
 	if (event.target.innerText === 'ABOUT') {
 		$('html, body').animate({
 			scrollTop : $(".intro").offset().top
 		}, 1000);
 	}
 	if (event.target.innerText === 'PORTFOLIO') {
 		$('html, body').animate({
 			scrollTop : $(".portfolio").offset().top
 		}, 1000);
 	}
 	if (event.target.innerText === 'CONTACT') {
 		$('html, body').animate({
 			scrollTop : $(".contact").offset().top
 		}, 1000);
 	}
 });
 $('.navbar-right li').click(function(event) {
 		console.log(this);
 		$('.navbar-right li').removeClass('selected');
 	  $(this).addClass('selected');
 })
});