//hourOdDay is an integer from 0-23
function getGreeting(hourOfDay){
	var greeting;
	if(hourOfDay < 12){
		greeting = "Top of the morning to you!";
	}
	else if(hourOfDay < 17){
		greeting = "Good afternoon, eh?";
	}else if(hourOfDay < 20){
		greeting ="What a wonderful evening";
	}else{
		greeting = "Good night.";
	}
	return greeting;
}