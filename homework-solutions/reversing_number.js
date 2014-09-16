// Write a function that reverses the digits of given 
// decimal number. Example: 256  652
var input = 123;

function reverse (number) {
	number = number.toString();
	var numberArray = [];

	for(var digit in number) {
		numberArray.unshift(number[digit]);
	}

	return Number(numberArray.join(''));
}

console.log(reverse(input));
console.log(reverse(input) + 1);