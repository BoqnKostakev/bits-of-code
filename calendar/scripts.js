function createCalendar (selector, events) {
	var calendarContainer = document.getElementById('calendar-container'),
		fragment = document.createDocumentFragment(),
		weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat'],
		currentDay = -1;

	calendarContainer.style.width = '900px';
	
	for (var i = 0; i < 30; i++) {
		var	day = document.createElement('div'),
			titleWrap = document.createElement('span'),
			title;

			currentDay += 1;
			if (currentDay === 7) {
				currentDay = 0;
			}

			title = document.createTextNode(weekDays[currentDay]+ ' ' + (i + 1) + ' June 2014');

			day.style.width = '120px';
			day.style.height  ='120px';
			day.style.float = 'left';
			day.style.border = '1px solid black';
			day.className += 'monthDay';
			
			titleWrap.style.background = '#ccc';
			titleWrap.style.textAlign = 'center';
			titleWrap.style.display = 'block';
			titleWrap.style.borderBottom = '1px solid black';


			titleWrap.appendChild(title);
			day.appendChild(titleWrap);
			fragment.appendChild(day);
	}

	calendarContainer.appendChild(fragment);


	calendarContainer.addEventListener('mouseover', function(ev) {
		var dayBoxTitle = ev.target.children[0];
		if (ev.target.className === 'monthDay') {
			if (dayBoxTitle.style.background !== 'rgb(238, 238, 238)') {
				dayBoxTitle.style.background = 'orange';
			}
		}
	});

	calendarContainer.addEventListener('mouseout', function(ev) {
		var dayBoxTitle = ev.target.children[0];
		if (ev.target.className === 'monthDay') {
			if (dayBoxTitle.style.background !== 'rgb(238, 238, 238)') {
				dayBoxTitle.style.background = '#ccc';
			}
		}
	});

	calendarContainer.addEventListener('click', function(ev) {
		removeSelected();
		if (ev.target.className === 'monthDay') {
			var dayBoxTitle = ev.target.children[0];
			if (dayBoxTitle.style.background === 'rgb(238, 238, 238)') {
				dayBoxTitle.style.background = 'orange';
			} else {
				dayBoxTitle.style.background = 'rgb(238, 238, 238)';
			}
		}
	});

	function removeSelected () {
		var span = document.getElementsByTagName('span');
			spanLen = span.length;

		for (var i = 0; i < spanLen; i++) {
			span[i].style.background = '#ccc';
		}
	}

	function appendEvents (events) {
		var days = document.getElementsByClassName('monthDay'),
			daysLen = days.length,
			eventsLen = events.length;

		for (var i = 0; i < daysLen; i++) {
			for (var j = 0; j < eventsLen; j++) {
				if ((i + 1) === parseInt(events[j].date)) {
					//console.log((i + 1) + ': ' + parseInt(events[j].date));
					var text = document.createTextNode(events[j].title + ' ' + events[j].hour),
						textWrap = document.createElement('p');

					textWrap.style.margin = '3px 0 3px 3px';
					textWrap.appendChild(text);
					days[i].appendChild(textWrap);
				}
			}
		}

	}

	appendEvents(events);
}