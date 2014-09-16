// Write a function that finds all the occurrences of 
// word in a text

var text = 'Perspiciatis, maiores commodi tenetur dolorem / mobich nemo Java-script jaba accusamus Bobich nesciunt dolores voluptatum / doloribus Bobich placeat autem ratione';

function searchText (text ,word) {
	var wordLength = word.length,
		firstLetter = word[0].toLowerCase(),
		lastLetter = word.slice(-1),
		hits = '',
		regex = new RegExp(word, "g"),
		result;

	for (var i = 0; i < text.length; i++) {
		if (text[i].toLowerCase() === firstLetter) {		
			for (var j = i; j < (i + word.length); j++) {
				hits +=text[j];
			}
		}	
	}

	
	if (hits.match(regex)) {
		result = hits.match(regex);
		return result.join(', ');
	} else {
		return 'Not found.';
	}
}

console.log(searchText(text, 'Java-script'));