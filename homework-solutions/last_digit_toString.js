// Write a function that returns the last digit of given 
// integer as an English word. Examples: 512  "two", 
// 1024  "four", 12309  "nine"

var number = Math.floor(Math.random() * 100);

function lastDigitToString (number) {
	number = number.toString();
	var lastDigit = number.charAt(number.length-1),
	result;
	
	switch(lastDigit) {
		case '1': result = 'One';
		break;
		case '2': result = 'Two';
		break;
		case '3': result = 'Three';
		break;
		case '4': result = 'Four';
		break;
		case '5': result = 'Five';
		break;
		case '6': result = 'Six';
		break;
		case '7': result = 'Seven';
		break;
		case '8': result = 'Eigth';
		break;
		case '9': result = 'Nine';
		break;
		case '10': result = 'Ten';
		break;
		case '0': result = 'Zero';
		break;
	}

	return result;
}

console.log(number);
console.log(lastDigitToString(number));