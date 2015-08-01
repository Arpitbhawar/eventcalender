function addEvents(listOfEvents){
	//console.log("inside addEvents ");
	var tempDate123 = new Date(listOfEvents[0]['startTime']);
	//console.log(tempDate123.getHours());
	$('#calenderDiv').text('');
	/*
	var timingsDictionary ={'0 AM':[0,59],'1 AM':[0,59],'2 AM':[0,59],'3 AM':[0,59],'4 AM':[0,59],'5 AM':[0,59],'6 AM':[0,59],'7 AM':[0,59],'8 AM':[0,59],'9 AM':[0,59],'10 AM':[0,59],'11 AM':[0,59],'12 PM':[0,59],'13 PM':[0,59],'14 PM':[0,59],'15 PM':[0,59],'16 PM':[0,59],'17 PM':[0,59],'18 PM':[0,59],'19 PM':[0,59],'20 PM':[0,59],'21 PM':[0,59],'22 PM':[0,59],'23 PM':[0,59]};
	console.log("timigs "+timingsDictionary['0 AM']);
	*/
	var timingsDictionary = {'0':'AM','1':'AM','2':'AM','3':'AM','4':'AM','5':'AM','6':'AM','7':'AM','8':'AM','9':'AM','10':'AM','11':'AM','12':'PM','13':'PM','14':'PM','15':'PM','16':'PM','17':'PM','18':'PM','19':'PM','20':'PM','21':'PM','22':'PM','23':'PM'};
			
	for(j=0 ; j < 24 ; j++){
		var Flag = 0;
		
		var outerDiv=$("<div>").addClass("row");
		
		var outerDivWithContent = $("<div>").addClass("eventsFound");
			var timeCol=$("<div>").addClass("col-md-2").attr("timeInterval","true");
			var calenderTimeStart = $("<p>").text(j+' '+timingsDictionary[j]);
			var calenderTimeEnd = $("</p>");
			//var temp = '';
			var list = $("#details").append('<ul></ul>').find('ul');
		for (var k = 0; k < listOfEvents.length ; k++){
			
				var tempDate = new Date(listOfEvents[k]['startTime']);
				var tempEndtime = new Date(listOfEvents[k]['endTime']);
				//console.log("k = "+tempDate.getHours() + " j= "+j);
				if (tempDate.getHours() >= j && tempDate.getHours() < j+1){
				//temp = temp + listOfEvents[k].toDateString()+" , ";
				list.append('<li>'+listOfEvents[k]['title']+'<br>'+'<p>'+tempDate.getHours()+':'+tempDate.getMinutes()+' '+timingsDictionary[tempDate.getHours()]+'-'+tempEndtime.getHours()+':'+tempEndtime.getMinutes()+' '+timingsDictionary[tempEndtime.getHours()]+'</p>'+'</li>');
				console.log(j + " "+ tempDate.toDateString());
				Flag = 1;
			}
		}
			//temp = temp.slice(0,-3);
			//console.log("outside "+temp);
			//var CalenderEventsCol = $("<p>").text(temp);
			//var CalenderEventsColEnd = $("</p>");
			//console.log(list);
			var timeColEnd = $("</div>");
			var outerDivEnd = $("</div>");
			var outerDivWithContentEnd = $("</div>");
			
			var varTimeCol = timeCol.append(calenderTimeStart.append(calenderTimeEnd));
			//var varEventCol = CalenderEventsCol.append(CalenderEventsColEnd.append(timeColEnd.append(outerDivEnd)));
			var varEventCol = list.append(timeColEnd.append(outerDivEnd));

			if (Flag === 0){
			$('#calenderDiv').append(outerDiv.append(varTimeCol,varEventCol),"<hr>");
		}else{ 
			//var varEventCol = outerDivWithContent.append(CalenderEventsCol.append(CalenderEventsColEnd.append(timeColEnd.append(outerDivWithContent.append(outerDivEnd)))));
			var varEventCol = outerDivWithContent.append(list.append(timeColEnd.append(outerDivWithContent.append(outerDivWithContentEnd))));
			$('#calenderDiv').append(outerDiv.append(varTimeCol,varEventCol),"<hr>");

		}
	}

}