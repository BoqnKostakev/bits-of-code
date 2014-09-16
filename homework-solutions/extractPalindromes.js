var str = 'this is a fuckin string with exe emails@mail.com for ' +
			'telerik@gmail.com ABBA homeworks alula wich koja@abv.bg im working on ' +
			'for training my javascript@coding.com lamal';

function extractPalindromes (input) {
	input = input.toLowerCase().split(' ');
	var result = [];

	for (var i = 0; i < input.length; i++) {
		var reverse = input[i].split('').reverse(),
			converted = reverse.join('');
		 
		if (input[i] === converted) {
			result.push(input[i]);
		}
	}

	return result;
}


console.log(extractPalindromes(str));