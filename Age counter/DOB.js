console.log("WEll Come to AGE Calculator");
var yrs = Number(prompt("Enter your DOB YEAR: "));
var month = Number(prompt("Enter Month 0= jan 11 = Dec: "));
var date = Number(prompt("Enter Exact Date: "));
var DOB = new Date();
DOB.setFullYear(yrs);
DOB.setMonth(month);
DOB.setDate(date);

var now = new Date();

var age = now.getTime() - DOB.getTime();

var yrs = age/(1000 *60*60*24*30.44*12);
console.log("YEARS: " + yrs.toFixed(2));

var months = age/(1000 *60*60*24*30.44);
console.log("MONTHS: " + months.toFixed(1));

var weeks = age/(1000 *60*60*24*7);
console.log("WEEKS: " + weeks.toFixed(1));

var days = age/(1000 *60*60*24);
console.log("DAYS: " + days.toFixed(1));

var hrs = age/(1000 *60*60);
console.log("HOURS: " + hrs.toFixed(1));




