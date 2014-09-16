define(['jquery', 'item'], function($, item) {

	function render (template, itemsSource) {
		var $itemsContainer = $('<div />').addClass('menu-items-container'),
			$selectedOption = $('<div />'),
			currentItem,
			itemsLength = itemsSource.length,
			i;

		$selectedOption.addClass('selected');
		$selectedOption.addClass('clearfix');
		$selectedOption.text('Please choose');
		$itemsContainer.append($selectedOption);

		for(i = 0; i < itemsLength; i += 1) {
			$itemsContainer.append(item.render(template, itemsSource[i]));
		}

		return $itemsContainer;
	}

	return {
		render: render
	};
});