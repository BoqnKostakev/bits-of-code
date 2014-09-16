define(function() {
	'use strict';
	var Item;

	Item = (function() {
		
		function Item (type, name, price) {
			this.type = type;
			this.name = name;
			this.price = price;

			return {
				type: this.type,
				name: this.name,
				price: this.price
			};
		}

		return Item;
	}());
	
	return Item;
});