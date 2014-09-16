define(function() {
	'use strict';
	var Store;

	Store = (function() {
		
		function Store (name) {
			this.name = name;
			this._allItems = [];
			this._smartPhones = [];
			this._accessories = [];
			this._notebooks = [];
			this._computers = [];
			this._tablets = [];
			
		}

		Store.prototype.addItem = function(item) {
			this._allItems.push(item);

			switch (item.type) {
				case 'smart-phone':
    				this._smartPhones.push(item);
    				break;
    			case 'accessory':
    				this._accessories.push(item);
    				break;
    			case 'notebook':
    				this._notebooks.push(item);
    				break;
    			case 'pc':
    				this._computers.push(item);
    				break;
    			case 'tablet':
    				this._tablets.push(item);
    				break;
    		}
			return this;
		};

		Store.prototype.getAll = function() {
			var copiedItems = this._allItems.slice();

				copiedItems.sort(function(a,b) {
					return a.name.localeCompare(b.name); 
				});

			return copiedItems;
		};

		Store.prototype.getSmartPhones = function() {
			var copiedItems = this._smartPhones.slice(),
				sortedItems;

				sortedItems = copiedItems.sort(function(a,b) {
					return a.name.localeCompare(b.name); 
				});

			return sortedItems;
		};

		Store.prototype.getMobiles = function() {
			var copiedSmartPhoneItems = this._smartPhones.slice(),
				copiedTabletItems = this._tablets.slice(),
				allItems = [],
				sortedItems;

				copiedSmartPhoneItems.map(function(item) {
					allItems.push(item);
				});

				copiedTabletItems.map(function(item) {
					allItems.push(item);
				});

				sortedItems = allItems.sort(function(a,b) {
					return a.name.localeCompare(b.name); 
				});

			return sortedItems;
		};

		Store.prototype.getComputers = function() {
			var copiedComputerItems = this._computers.slice(),
				copiedNoteBooks = this._notebooks.slice(),
				allItems = [],
				sortedItems;

				copiedComputerItems.map(function(item) {
					allItems.push(item);
				});

				copiedNoteBooks.map(function(item) {
					allItems.push(item);
				});

				sortedItems = allItems.sort(function(a,b) {
					return a.name.localeCompare(b.name); 
				});

			return sortedItems;
		};

		Store.prototype.filterItemsByType = function(filterType) {
			var copiedItems = this._allItems.slice(),
				len = copiedItems.length,
				filteredItems = [],
				sortedItems,
				i;

				for (i = 0; i < len; i += 1) {
					if (copiedItems[i].type === filterType) {
						filteredItems.push(copiedItems[i]);
					}
				}
				
				sortedItems = filteredItems.sort(function(a,b) {
					return a.name.localeCompare(b.name); 
				});

			return sortedItems;
		};

		Store.prototype.filterItemsByPrice = function(options) {
			options = options || Infinity;
			var max = (options.max)? options.max : Infinity,
				min = (options.min)? options.min : 0,
				copiedItems = this._allItems.slice(),
				filteredItems = [],
				sortedItems = [],
				maxPrice;
			
			copiedItems.map(function(item) {
				if (item.price > min && item.price < max) {
					filteredItems.push(item);
				}
			});

			sortedItems = filteredItems.sort(function(a,b) {
					return parseFloat(a.price) - parseFloat(b.price);
			});

			return sortedItems;
		};

		Store.prototype.countItemsByType = function() {
			
			var smarthPhonesCount = this._smartPhones.length,
				tabletsCount = this._tablets.length,
				notebooksCount = this._notebooks.length,
				accessoriesCount = this._accessories.length,
				computersCount = this._computers.length;

			return {
				'smart-phones': smarthPhonesCount,
				tablets: tabletsCount,
				notebooks: notebooksCount,
				accessories: accessoriesCount,
				computers: computersCount
			};
		};

		Store.prototype.filterItemsByName = function(partOfName) {
			
		};

		return Store;
	}());

	return Store;
});