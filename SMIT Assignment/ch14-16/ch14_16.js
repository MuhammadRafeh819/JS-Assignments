// Q1
// var students = [];

// Q2
// var students = new Array();


// Q3
// var fruits = ["Apple", "Banana", "Mango"];


// Q4
// var numbers = [10, 20, 30, 40];


// Q5
// var flags = [true, false, true];

// Q6

// var mixed = ["Ali", 25, true, null];


// QUESTION 8
// var qualifications = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M.Phil", "PhD"];

// document.write("<h3>Qualifications in Pakistan</h3>");
// for (var i = 0; i < qualifications.length; i++) {
//   document.write((i + 1) + ") " + qualifications[i] + "<br>");
// }


// QUESTION9
// var students = ["RAFEH", "SALAH", "NAVEED"];
// var scores = [420, 380, 460];
// var totalMarks = 500;

// for (var i = 0; i < students.length; i++) {
//   var percentage = (scores[i] / totalMarks) * 100;
//   document.write(
//     "Score of " + students[i] + " is " + scores[i] +
//     ". Percentage: " + percentage + "%<br>"
//   );
// }


// QUESTION10
// var colors = ["Red", "Green", "Blue"];
// document.write(colors + "<br>");


// var addStart = prompt("Color to add at beginning:");
// colors.unshift(addStart);
// document.write(colors + "<br>");


// var addEnd = prompt("Color to add at end:");
// colors.push(addEnd);
// document.write(colors + "<br>");


// colors.unshift("Purple", "Orange");
// document.write(colors + "<br>");


// colors.shift();
// document.write(colors + "<br>");


// colors.pop();
// document.write(colors + "<br>");


// var indexAdd = +prompt("Index to add color:");
// var colorName = prompt("Color name:");
// colors.splice(indexAdd, 0, colorName);
// document.write(colors + "<br>");


// var indexDel = +prompt("Index to delete color(s):");
// var delCount = +prompt("How many colors to delete:");
// colors.splice(indexDel, delCount);
// document.write(colors + "<br>");



// QUESTION 12
// var cities = ["Karachi", "Lahore", "Islamabad", "Quetta", "Peshawar"];
// var selectedCities = cities.slice(0, 3);

// document.write("Cities: " + cities + "<br>");
// document.write("Selected Cities: " + selectedCities);


// var arr = ["This ", " is ", " my ", " cat"];
// var sentence = arr.join("");
// document.write(sentence);

// QUESTION13
// var fifo = [];
// fifo.push("Keyboard");
// fifo.push("Mouse");
// fifo.push("Printer");

// document.write(fifo.shift() + "<br>");
// document.write(fifo.shift() + "<br>");
// document.write(fifo.shift() + "<br>");

// QUESTION14
// var lifo = [];
// lifo.push("Keyboard");
// lifo.push("Mouse");
// lifo.push("Printer");

// document.write(lifo.pop() + "<br>");
// document.write(lifo.pop() + "<br>");
// document.write(lifo.pop() + "<br>");


