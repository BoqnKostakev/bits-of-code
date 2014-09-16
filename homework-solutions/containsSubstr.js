// Write a JavaScript function that finds how many 
// times a substring is contained in a given text 
// (perform case insensitive search). 
//  Example: The target substring is "in". The text is as 
// follows:
// "We are living in an yellow submarine. We don't 
//  have anything else. Inside the submarine is very 
//  tight. So we are drinking all the day. We will 
//  move out of it in 5 days."
// result is 9

var test = 'We are living in an yellow submarine. We don\'t have anything else. Inside the submarine is very tight. So we are drinking all the day. We will move out of it in 5 days.';

function containsSubstr (str, substr) {
	str = str.toLowerCase();
	substr = substr.toLowerCase();
	var count = 0,
		index = 0;

	// indexOf returns -1 if no match found
	while (index !== -1) {
		if (index === 0) {
			index = str.indexOf(substr, 0);
		} else {
			index = str.indexOf(substr, index + 1);
		}

		if (index !== -1) {
			count += 1;
		}
	}

	return count;
}

console.log(containsSubstr(test, 'yellow'));