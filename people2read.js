var fs = require('fs');
// var myArgs = process.argv[]



module.exports = function(callback){
	
	fs.readFile('./people2.json', 'utf-8', function(err, people2){
	if(err) {
		console.log(`an error occured: ${err}`);
		throw err;
	}
	var parsedPeople2 = JSON.parse(people2);

	
	// for (var i = 0; i < people2.length; i++) {
	// 	var peopleObject = people2[i]
	// 	if(myArgs === people2[i].name){
	// 		console.log(people2[i].name)
	// 	}

	// }
})

}