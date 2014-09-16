(function(){

	require.config({
		paths: {
			'jquery': '../libs/jquery',
			'handlebars': '../libs/handlebars',
			'controls': 'controls'
		}
	});

	require(['jquery','controls'], function($, controls) {

		var people = [
					{ id: 1, name: "Doncho Minkov", age: 18, avatarUrl: "img/profile.png" }, 
					{ id: 2, name: "Georgi Georgiev", age: 19, avatarUrl: "img/profile.png" },
					{ id: 3, name: "Boban Zdavkovich", age: 19, avatarUrl: "img/profile.png" },
					{ id: 4, name: "Pavel Kolev", age: 19, avatarUrl: "img/profile.png" }];

		
		var comboBox = new controls.ComboBox(people);
		var template = $("#person-template").html();
		var comboBoxHtml = comboBox.render(template);

		$('#container').html(comboBoxHtml);

		$('#container').find($('.selected')).on('click', function() {
			$('.person-item').slideToggle('fast');
		});

		$('.person-item').on('click', function() {
			$this = $(this);
			$('#container').find($('.selected')).empty();
			$('#container').find($('.selected')).html($this.html());
			$('#container').find($('.person-item')).slideUp('fast');

		});


		
	});

}());