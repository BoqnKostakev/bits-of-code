$.fn.tabs = function () {
	var $tabsContainer = $(this);
	$tabsContainer.addClass('tabs-container');

	var selected = $tabsContainer.find('.tab-item').first().addClass('current');
	selected.siblings().find('.tab-item-content').hide();

	$tabsContainer.on('click', '.tab-item', function() {
		var $tabItem = $(this);
		$tabsContainer.find('.tab-item').removeClass('current');
		$tabItem.addClass('current');

		$tabItem.siblings().find('.tab-item-content').hide();
		
		$tabItem.children().fadeIn();

	});

};