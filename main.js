function currentTime() {
 /* assigning variables */
  var date = new Date();
  var hour = date.getHours();
  var min = date.getMinutes();
  var sec = date.getSeconds();
  var midday = "AM";

  midday = (hour >= 12) ? "PM" : "AM"; /* assigning AM/PM  various internet sources to add this element*/
  hour = (hour == 0) ? 12 : ((hour > 12) ? (hour - 12) : hour); 
  hour = changeTime(hour);
  min = changeTime(min);
  sec = changeTime(sec);

  /*Display of time */
  document.getElementById("time").innerText = hour + " : " + min + " : " + sec + " " + midday; 

/* Assigning variables for date */
  var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

  var curWeekDay = days[date.getDay()]; // get day
  var curDay = date.getDate();  // get date
  var curMonth = months[date.getMonth()]; // get month
  var curYear = date.getFullYear(); // get year
  var date = curWeekDay + ",    " + curMonth + "  " + curDay + " , " + curYear; // Display today's date
  document.getElementById("dateToday").innerHTML = date;

  var t = setTimeout(currentTime, 1000); /* setting the timer */
}

function changeTime(k) { /* appending 0 before time elements if less than 10 */
  if (k < 10) {
    return "0" + k;
  }
  else {
    return k;
  }
}

currentTime();
