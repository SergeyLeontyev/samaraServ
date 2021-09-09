$(document).ready(function () {
	var link = $('.burger-menu');
	var menu = $('.block-nav');
	var menuNav = $('.header-nav__li a');
	var noScroll = $('#scroll');


	link.click(function () {
		link.toggleClass('burger-menu-active');
		menu.toggleClass('block-nav-active');
		noScroll.toggleClass('no-scroll');
	});
	menuNav.click(function () {
		link.removeClass('burger-menu-active');
		menu.removeClass('block-nav-active');
		noScroll.removeClass('no-scroll');
	});
});