var fs = require('fs');
// var myArgs = process.argv[]
fs.readFile('./people1.json', 'utf-8', function(err, people1){
	if(err) {
		console.log(`an error occured: ${err}`);
		throw err;
	}
	var parsedPeople1 = JSON.parse(people1);

	return parsedPeople1
	// for (var i = 0; i < people1.length; i++) {
	// 	var peopleObject = people1[i]
	// 	if(myArgs === people1[i].name){
	// 		console.log(people1[i].name)
	// 	}

	// }
})