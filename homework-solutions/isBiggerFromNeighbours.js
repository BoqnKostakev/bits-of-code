// Write a function that checks if the element at given 
// position in given array of integers is bigger than its 
// two neighbors (when such exist).

var numbers = [23,54,-7,76,6,23,3,65,1111111111,23,1,54,89,-3,111,70,5,3,4,-111,123123,2,65,45,23,6,96];

function isBiggerFromNeighbours (arr, position) {
	var isBigger = false,
		previousNeighbour = position - 1,
		nextNeighbour = position + 1;

	if (position > arr.length - 1) {
		return 'No such element';
	}

	if ((arr[position] > arr[previousNeighbour]) && (arr[position] > arr[nextNeighbour])) {
		isBigger = true;
	}

	return isBigger + ', Integer: ' + arr[position] + ', position: ' + position;
}

console.log(isBiggerFromNeighbours(numbers, 3));