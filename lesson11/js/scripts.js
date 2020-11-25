// <----------------TOGGLE MENU------------------------>


function toggleMenu() {
  document.getElementById("primaryNav").classList.toggle("hide");
}

// <----------------FOOTER DATE INFO------------------------>

var d = new Date();
var year = d.getFullYear();

var date = d.getDate();

var monthName = new Array(12);
monthName[0] = "January"
monthName[1] = "February"
monthName[2] = "March"
monthName[3] = "April"
monthName[4] = "May"
monthName[5] = "June"
monthName[6] = "July"
monthName[7] = "August"
monthName[8] = "September"
monthName[9] = "October"
monthName[10] = "November"
monthName[11] = "December" 

var month = monthName[d.getMonth()];


var day = new Array(7);
day[0] = "Sunday";
day[1] = "Monday";
day[2] = "Tuesday";
day[3] = "Wednesday";
day[4] = "Thursday";
day[5] = "Friday";
day[6] = "Saturday";

var dayOfWeek = day[d.getDay()];

document.getElementById("fullDate").innerHTML = `${dayOfWeek}, ${date} ${month} ${year}`; 
document.getElementById("currentYear").innerHTML = year;


// <----------------FRIDAY PANCAKE MESSAGE------------------------>


const todayDate = new Date();
const dayNumber = todayDate.getDay();
const element = document.getElementById('message');

if (dayNumber == 5) {
  element.classList.add("showme")
}

else {
  element.classList.add("hideme")
}