let raceNumber = Math.floor(Math.random() * 1000);

var registeredEarly = false;
var runnerAge = 25;

if(registeredEarly && runnerAge > 18){
  raceNumber += 1000;
}

if(registeredEarly && runnerAge > 18){
  console.log(`${raceNumber}, your race will begin at 9:30 am!`);
} 
else if(!registeredEarly && runnerAge > 18){
  console.log(`${raceNumber}, your race will begin at 11:00 am!`);
}
else if(runnerAge < 18){
  console.log(`${raceNumber}, all youth races will take place at 12:30 pm!`);
}
else{
  console.log("Please see us at the registration desk!");
}
