function previousDay(prevDate){
	//return previousDay
	prevDate = new Date(prevDate.getTime() - (24*60*60*1000));
	return prevDate;
	// function to display the calender
}
function nextDay(nextDate){
	// Returns next Day
	nextDate = new Date(nextDate.getTime() + (24*60*60*1000));
	return nextDate;
	
}

function OnclickToday(){
	// Fetches all the events when Today button is clicked
	console.log("type of sample Array "+ typeof(sampleArray));
	VarDate = new Date();
	ProcessSampleData(sampleArray,VarDate);
}
function OnclickPreviousDay(){
	// Fetches all the events when PreviousDay button is clicked
	console.log("type of sample Array Previous day"+ typeof(sampleArray));
	VarDate = previousDay(VarDate);
	ProcessSampleData(sampleArray,VarDate);
}
function OnclickNextDay(){
	// Fetches all the events when NextDay button is clicked
	console.log("type of sample Array next day"+ typeof(sampleArray));
	VarDate = nextDay(VarDate);
	ProcessSampleData(sampleArray,VarDate);
}