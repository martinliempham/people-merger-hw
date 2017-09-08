var fs = require('fs');
// var names = process.argv[2]
var parsedPeople1 = require('./people1.json');
var parsedPeople2 = require('./people2.json');
var parsedPeople = parsedPeople1.concat(parsedPeople2)
// var parsedPeople.sort()
parsedPeople.sort()



fs.writeFile('./sorted_people.txt',parsedPeople, function(err){
	if (err){
		console.log(`there was an problem writing: ${err}`);
		throw err;
	}
	console.log('content written');
	console.log(parsedPeople);
})

