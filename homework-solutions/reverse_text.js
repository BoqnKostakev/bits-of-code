var test = 'sample in the dark forest';

function reverseText (text) {
	text = text.split('');

	var output = text.reverse();

	return output.join('');	
}

console.log(reverseText(test));