define(['handlebars'], function(handlebars) {

	function render (template, itemsSource) {
        var generateTemplate = Handlebars.compile(template);

		return generateTemplate(itemsSource);
	}

	return {
		render: render
	};
});