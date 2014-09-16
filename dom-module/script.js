var domModule = (function () {

	var buffer = {},
		self;

	function appendElement (child, parent) {
		var parentNode = document.querySelector(parent);

		if (parentNode && child) {
			parentNode.appendChild(child);
		}
	}

	function removeElement (child, parent) {
		var parentNode = document.querySelector(parent),
			childNode = parentNode.querySelector(child);

		if (parentNode && childNode) {
			parentNode.removeChild(childNode);
		}
	}

	function attachEvent (evTarget, evType, evHandler) {
		var eventTarget = document.querySelectorAll(evTarget),
			eventTargetLen = eventTarget.length;

		for (var i = 0; i < eventTargetLen; i++) {
			eventTarget[i].addEventListener(evType, evHandler);
		}
		
	}

	function appendToBuffer (parent, element) {

		var parentNode = document.querySelector(parent);

		if (!buffer[parent]) {
			buffer[parent] = [];
		}
		
		buffer[parent].push(element);

		if (buffer[parent].length >= 10) {
			var len = buffer[parent].length,
				fragment = document.createDocumentFragment();

			for (var i = 0; i < len; i++) {
				fragment.appendChild(buffer[parent][i]);
			}

			parentNode.appendChild(fragment);
		}

	}

	

	 self = {
		appendElement: appendElement,
		removeElement: removeElement,
		attachEvent: attachEvent,
		appendToBuffer: appendToBuffer
	};

	return self;

}());

// UL & OL
var lists = document.getElementsByClassName('list-wrapp'),
	listItem = document.createElement('li'),
	listItemText = document.createTextNode('List Item');

listItem.appendChild(listItemText);

lists[0].addEventListener('click', function(ev) {
	
	if (ev.target.id === 'add-to-ul') {
		domModule.appendElement(listItem.cloneNode(true), 'ul');
	}
	if (ev.target.id === 'remove-from-ul') {
		domModule.removeElement('li:last-child', 'ul');
	}
});

lists[1].addEventListener('click', function(ev) {
	
	if (ev.target.id === 'add-to-ol') {
		domModule.appendElement(listItem.cloneNode(true), 'ol');
	}
	if (ev.target.id === 'remove-from-ol') {
		domModule.removeElement('li:last-child', 'ol');
	}
});

// add divs to buffer
var divElement = document.createElement('div');
divElement.style.width = '100px';
divElement.style.height = '100px';
divElement.style.background = 'red';
divElement.style.border = '1px solid #000';
divElement.style.float = 'left';
divElement.className = 'generatedDiv';

var mainWrapper = document.getElementById('wrapper'),
	divsBtn = mainWrapper.getElementsByClassName('divsBtn');

divsBtn[0].addEventListener('click', function() {
	domModule.appendToBuffer('#wrapper', divElement.cloneNode(true));
});

// add callback fn to ul


domModule.attachEvent('button.changeListsBg', 'click', randBackground);

function randBackground () {
	var ul = document.querySelector('ul'),
		ol = document.querySelector('ol');
	ul.style.background = randomRgbColor();
	ol.style.background = randomRgbColor();
}

function randomInt(min,max,unit) {
    var number = Math.floor(Math.random() * (max - min) + min);

    return number + unit;
}

function randomFloat () {
    var number = randomInt(1,10,'');
    return number / 10;
}

function randomRgbColor () {
    var r = randomInt(0, 255, ''),
        g = randomInt(0, 255, ''),
        b = randomInt(0, 255, '');

    return 'rgba('+ r +', '+ g +', ' + b +', '+ randomFloat() +')';
}








