function ProcessSampleData(sampleArray,dateArg){


var sampleDate = new Date(sampleArray[0]['startTime']);
//console.log("sampleDate " + sampleDate.toString());
//console.log(sampleDate.getFullYear());
sampleLen = sampleArray.length;
var currentTime = dateArg;

// For testing
//currentTime = new Date("Thu Jul 30 2015 01:30:00 GMT+0530 (IST)");

console.log("Current Time" + currentTime.toString());
//var yesterday = new Date(currentTime.getTime() - (24*60*60*1000));
var yesterday = previousDay(currentTime);
//console.log("yesterday" + yesterday);
//console.log(currentTime.getFullYear());



currentDate = new Date(currentTime.getFullYear(),currentTime.getMonth(),currentTime.getDate());
console.log(currentDate);
$('#date').text(currentDate.toDateString());
console.log('before for loop');
var listOfEvents = [];
for (var i = 0;i < sampleLen; i++){
	var tempDate = new Date(sampleArray[i]['startTime']);
	b = new Date(tempDate.getFullYear(),tempDate.getMonth(),tempDate.getDate());
	if (currentDate.getTime() === b.getTime()){
		//console.log(tempDate.toString());
		listOfEvents.push(sampleArray[i]);
	}


}

console.log("Going to sort array of events ");

addEvents(listOfEvents);
}