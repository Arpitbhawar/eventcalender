function previousDay(prevDate){
	prevDate = new Date(prevDate.getTime() - (24*60*60*1000));
	return prevDate;
	// function to display the calender
}
function nextDay(nextDate){
	nextDate = new Date(nextDate.getTime() + (24*60*60*1000));
	return nextDate;
	
}

function Today(){
	console.log("type of sample Array "+ typeof(sampleArray));
	VarDate = new Date();
	ProcessSampleData(sampleArray,VarDate);
}
function PreviousDay(){
	console.log("type of sample Array Previous day"+ typeof(sampleArray));
	VarDate = previousDay(VarDate);
	ProcessSampleData(sampleArray,VarDate);
}
function NextDay(){
	console.log("type of sample Array next day"+ typeof(sampleArray));
	VarDate = nextDay(VarDate);
	ProcessSampleData(sampleArray,VarDate);
}