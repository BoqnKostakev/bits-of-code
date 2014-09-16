// You are given a text. Write a function that changes 
// the text in all regions: 
//  <upcase>text</upcase> to uppercase. 
//  <lowcase>text</lowcase> to lowercase 
//  <mixcase>text</mixcase> to mix casing(random) 

// We are <mixcase>living</mixcase> in a <upcase>yellow 
// submarine</upcase>. We <mixcase>don't</mixcase> have 
// <lowcase>anything</lowcase> else.

// Result:
// We are LiVinG in a YELLOW SUBMARINE. We dOn'T have 
// anything else. 



var text = 'We are <mixcase>living</mixcase> in a <upcase>yellow submarine</upcase>.' +
			'We <mixcase>don\'t</mixcase> have <lowcase>ANYTHING</lowcase> else.';

function htmlTagsTransform (text) {
	
	return text.replace(/<upcase>(.*?)<\/upcase>/g, function(i) {
			return i.toUpperCase();
		}).replace(/<lowcase>(.*?)<\/lowcase>/g, function(i) {
			return i.toLowerCase();
		}).replace(/<mixcase>(.*?)<\/mixcase>/g, function(i) {
			return camelCaseIt(i);
		});

	
}

function camelCaseIt(string) {
	string = string.toLowerCase();
	var	camelCased = '';

	for (var i = 0; i < string.length; i++) {
		var rule = Math.floor(Math.random() * 10);
		if (rule < 5) {
			camelCased += string[i].toUpperCase();
		} else {
			camelCased += string[i];
		}
	}

	return camelCased;
}

document.write(htmlTagsTransform(text));
