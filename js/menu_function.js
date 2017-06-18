$(document).ready(function() {

	/* MAIN MENU */
	$('#main-menu > li:has(ul.menu_sub-menu)').addClass('menu_parent');
	$('ul.menu_sub-menu > li:has(ul.menu_sub-menu) > a').addClass('menu_parent');

	$('#menu-toggle').click(function() {
		$('#main-menu').slideToggle(300);
		return false;
	});

	$(window).resize(function() {
		if ($(window).width() > 700) {
			$('#main-menu').removeAttr('style');
		}
	});

});