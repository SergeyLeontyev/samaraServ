$(document).ready(function () {
	var dropMenu = $('#dropmenu');//Языковая панель
	var dropMenuBox = $('.drop-menu');//Языковая панель

	dropMenu.click(function () {
		dropMenuBox.toggleClass('drop-menu-active');
		$(document).mouseup('click', function (e) {
			var container = $('.drop-menu');
			if (!container.is(e.target) && container.has(e.target).length === 0) {
				container.removeClass('drop-menu-active');
			}
		});
	});
});