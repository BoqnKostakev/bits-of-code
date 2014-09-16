// Write a function that groups an array of persons by 
// age, first or last name. The function must return an 
// associative array, with keys - the groups, and values -
// arrays with persons in this groups
//  Use function overloading (i.e. just one function)

// var persons = {…};
// var groupedByFname = group(persons, 'firstname');
// var groupedByAge= group(persons, 'age');

var persons = [
{ firstname : 'Ivan', lastname: 'Petkov', age: 27 }, 
{ firstname : 'Asen', lastname: 'Hristov', age: 28},
{ firstname : 'Asen', lastname: 'Baleikin', age: 28 },
{ firstname : 'Ivan', lastname: 'Dobrev', age: 28 },
{ firstname : 'Boqn', lastname: 'Petkov', age: 27 },
{ firstname : 'Stoqn', lastname: 'Bodurov', age: 26 },
{ firstname : 'Hristo', lastname: 'Hristov', age: 37 }];



function groupBy(arr, property) {
	var groupList = {},
		current;

	for (var i = 0; i < arr.length; i++) {
		if (arr[i] === current) {
			continue;
		}

		current = arr[i][property];
		groupList[current] = [];
	}

	for (var j = 0; j < arr.length; j++) {
		var prop = arr[j][property];
		groupList[prop].push(arr[j].firstname, arr[j].lastname, arr[j].age + '; ');
	}

	for(var group in groupList) {
		console.log(group + ' ' + groupList[group].slice(' ').toString());
	}

	console.log(groupList);
}


groupBy(persons, 'age');
groupBy(persons, 'firstname');
groupBy(persons, 'lastname');