// Write a function that finds the youngest person in a 
// given array of persons and prints his/hers full name
//  Each person have properties firstname, lastname and 
// age, as shown:

var persons = [
{ firstname : 'Gosho', lastname: 'Petrov', age: 27 }, 
{ firstname : 'Bay', lastname: 'Ivan', age: 58},
{ firstname : 'Pesho', lastname: 'Georgiev', age: 23 },
{ firstname : 'Misho', lastname: 'Ivanov', age: 36 } ];



function findYoungest (list) {
	var youngest,
		current = list[0].age;
	for(var person in list) {
		if (current > list[person].age) {
			current = list[person].age;
		}

		for(var i in list) {
			if (list[i].age === current) {
				youngest = list[i];
			}
		}
	}
	console.log(youngest.firstname + ' ' + youngest.lastname + ' ' + youngest.age);
}


findYoungest(persons);

//////////////////////////////////////////////////// REFACTORED ////////////////////////////////////////////////////

function findYoungest2 (list) {
	var index = 0,
		youngest = list[0].age;

	for (var i = 1; i < list.length; i++) {
		if (list[i].age < youngest) {
			youngest = list[i].age;
			index = i;
		}	
	}

	return list[index].firstname + ' ' + list[index].lastname + ' ' + list[index].age;
}

console.log(findYoungest2(persons));