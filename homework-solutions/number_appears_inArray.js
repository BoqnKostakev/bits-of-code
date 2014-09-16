// Write a function that counts how many times given 
// number appears in given array. Write a test function 
// to check if the function is working correctly.

var numbers = [23,54,-7,76,96,23,3,65,1111111111,23,1,54,89,-3,111,70,5,3,4,-111,123123,2,65,45,23,6,96];

function countNumberAppearance (arr, number) {
	var count = 0;
	for (var i = 0; i < arr.length; i++) {
		if (arr[i] === number) {
			count += 1;
		}
	}
	return count;
}

// console.log(countNumberAppearance(numbers, 23));


function testFunction (arr, number) {
	console.log('The number \'' + number + '\' appears ' + countNumberAppearance(arr, number) + ' times in the array.');
}


console.log(testFunction(numbers, 23));