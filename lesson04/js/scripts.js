function toggleMenu() {
  document.getElementById("primaryNav").classList.toggle("hide");
}

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


var weekday = new Array(7);
weekday[0] = "Sunday";
weekday[1] = "Monday";
weekday[2] = "Tuesday";
weekday[3] = "Wednesday";
weekday[4] = "Thursday";
weekday[5] = "Friday";
weekday[6] = "Saturday";

var n = weekday[d.getDay()];


document.getElementById("fullDate").innerHTML = n + ', ' + date + ' ' + month + ' ' + year; 
document.getElementById("currentYear").innerHTML = year;