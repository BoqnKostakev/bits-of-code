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
{ firstname : 'Hristo', lastname: 'Kaloferov', age: 28 },
{ firstname : 'Boqn', lastname: 'Petkov', age: 27 },
{ firstname : 'Stoqn', lastname: 'Bodurov', age: 26 },
{ firstname : 'Hristo', lastname: 'Hristov', age: 37 }];



function groupBy(arr, property) {
	var groupList = {},
		current;

	// Adding arr keys as propertyes to the groupList object if the property already exist continue
	for (var i = 0; i < arr.length; i++) {
		if (arr[i] === current) {
			continue;
		}

		// Adding exactly the specified key search as a property in groupList and creating array attached to it
		current = arr[i][property];
		groupList[current] = [];
	}

	// Adding values to the properties of groupList obj wich are arrays
	for (var j = 0; j < arr.length; j++) {
		// example: at the first iteration will be arr[0][firstname]
		var prop = arr[j][property];
		console.log(prop);
		
		groupList[prop].push(arr[j].firstname, arr[j].lastname, arr[j].age + ', ');
	}

	document.write('Grouped by: <b>' + property + '</b><br>');

	for(var group in groupList) {
		document.write('<b>' + group + '</b>: ' + groupList[group].join(' ') + '<br>');
	}

	document.write('******************************************* <br>');
	console.log(groupList);
}



groupBy(persons, 'firstname');

// groupBy(persons, 'lastname');

// groupBy(persons, 'age');