// Write a JavaScript function to check if in a given 
// expression the brackets are put correctly. 
// Example of correct expression: ((a+b)/5-d). 
// Example of incorrect expression: )(a+b)). 

var trueTest = '((a+b)/5-d)',
	wrongTest = '((()(a+b))';

function checkBrackets (expression) {
	if (!expression) {
		return 'Error! Function expects parameter';
	}

	var lastSymbol = expression.length - 1,
		input = expression.trim(),
		openBracked = 0,
		closeBracked = 0;

	// if (input[0] === ')' || input[lastSymbol] === '(') {
	// 	return 'Wrong bracket position';
	// }

	for (var i = 0; i < input.length; i++) {
			if (input[i] === '(') {
				openBracked += 1;
			} else if(input[i] === ')') {
				closeBracked += 1;
			}
	}

	return (openBracked === closeBracked)? true : 'Wrong bracket position';
}

console.log(checkBrackets(wrongTest));