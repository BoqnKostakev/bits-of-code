// Write a script that finds the max and min number 
// from a sequence of numbers

var numbers = [23,54,-7,76,23,65,1111111111,23,1,54,89,-3,111,70,5,3,4,-111,123123,2,65,45,6,96];
var max = 0;
var min = numbers[0];
for (var i = 0; i < numbers.length; i++) {
	if (numbers[i] > max) {
		max = numbers[i];
	}

	if (min > numbers[i]) {
		min = numbers[i];
	}
	// min = numbers[i];
	// for (var j = 0; j < numbers.length; j++) {
	// 	if (numbers[j] < min) {
	// 		min = numbers[j];
	// 	}
	// }
}


console.log(min);