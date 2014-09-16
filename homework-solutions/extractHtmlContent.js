// Write a function that extracts the content of a html 
// page given as text. The function should return 
// anything that is in a tag, without the tags:

// <html><head><title>Sample 
// site</title></head><body><div>text<div>more 
// text</div>and more...</div>in body</body></html>

var html = '<html><head><title>Sample ' +
			'site</title></head><body><div>text<div>more ' +
			'text</div>and more...</div>in body</body></html>';

function extractHtmlContent (html) {
	var flag = false,
		result = '';

	for (var i = 0; i < html.length; i++) {
		if (html[i] === '<') {
			flag = true;
			continue;
		} else if(html[i] === '>') {
			flag = false;
			continue;
		}

		if (!flag) {
			result += html[i];
		}
	}

	return result;
}

console.log(extractHtmlContent(html));