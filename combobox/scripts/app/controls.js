define(['jquery', 'items'], function($, items) {
	
		function ComboBox (itemsSource) {
			this._itemsSource = itemsSource;
		}

		ComboBox.prototype.render = function(template) {
			var renderredItems = items.render(template, this._itemsSource);

			return renderredItems;
		};

	return {
		ComboBox: ComboBox
	};
});
