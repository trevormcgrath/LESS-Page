/*
function myFunction() {
    document.getElementsByClassName("topnav")[0].classList.toggle("responsive");
}*/

$(document).ready(function() {

	console.log("jQuery v1.12.0 loaded");
	var size = window.innerWidth;
	console.log(size);

	$('.nav-handle').click(function() {
		$('.main-nav').toggleClass('show-nav');	
	});
	

});