// Q1
var city = prompt("Enter city name:");
city = city.toLowerCase();
if (city === "karachi") {
    alert("Welcome to city of lights");
}

// Q2
var gender = prompt("Enter your gender:");
gender = gender.toLowerCase();
if (gender === "male") {
    alert("Good Morning Sir.");
} else if (gender === "female") {
    alert("Good Morning Ma'am.");
}


// Q3
var color = prompt("Enter traffic signal color:");
color = color.toLowerCase();
if (color === "red") {
    alert("Must Stop");
} else if (color === "yellow") {
    alert("Ready to move");
} else if (color === "green") {
    alert("Move now");
}

// Q4
var fuel = parseFloat(prompt("Enter remaining fuel in car:"));
if (fuel < 0.25) {
    alert("Please refill the fuel in your car");
}
else{
    alert("keep calm we have sufficient amount of fuel");
}


// Q6 HTML file
// Q7
var secretNum = 7; 
var guess = parseInt(prompt("Guess the secret number (1-10):"));

if (guess === secretNum) {
    alert("Correct answer");
} else if (guess + 1 === secretNum) {
    alert("you are Close ");
}


// Q8
var num3 = parseInt(prompt("Check divisibility by 3:"));
if (num3 % 3 === 0) 
    { alert("The number is divisible by 3"); }

// Q9
var evenOdd = parseInt(prompt("Check Num Even or Odd:"));
if (evenOdd % 2 === 0) 
    { alert("It is an even number");
     }
else { alert("It is an odd number"); }

// Q10
var temp = parseInt(prompt("Temperature:"));
if (temp > 40) { alert("It is too hot outside."); }
else if (temp > 30) { alert("The Weather today is Normal."); }
else if (temp > 20) { alert("Today's Weather is cool."); }
else if (temp > 10) { alert("OMG! Today's weather is so Cool."); }

// Q11
var num1 = parseFloat(prompt("Enter first number:"));
var num2 = parseFloat(prompt("Enter second number:"));
var opr = prompt("Enter operation (+, -, *, /, %):");

if (opr === "+") 
    { alert(num1 + num2); }
else if (opr === "-") 
    { alert(num1 - num2); }
else if (opr === "*") 
    { alert(num1 * num2); }
else if (opr === "/") 
    { alert(num1 / num2); }
else if (opr === "%") 
    { alert(num1 % num2); }