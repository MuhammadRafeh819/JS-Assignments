// Q1
// var firstName = prompt("Enter your first name:");
// var lastName = prompt("Enter your last name:");
// var fullName = firstName + " " + lastName;
// alert("Hello, " + fullName + "!");


// Q2
// var mobile = prompt("Enter your favorite mobile phone model:");
// alert("Length of input: " + mobile.length);


// Q3
// var word = "Pakistani";
// var indexN = word.indexOf("n");
// alert("Index of 'n': " + indexN);


// Q4
// var str = "Hello World";
// var lastIndexL = str.lastIndexOf("l");
// alert("Last index of 'l': " + lastIndexL);


// Q5
// var word = "Pakistani";
// var charAt3 = word.charAt(3);
// alert("Character at index 3: " + charAt3);


// Q6
// var firstName = prompt("Enter your first name:");
// var lastName = prompt("Enter your last name:");
// var fullName = firstName.concat(" ", lastName);
// alert("Hello, " + fullName + "!");


// Q7
// var city = "Hyderabad";
// var newCity = city.replace("Hyder", "Islam");
// alert("Updated city: " + newCity);


// Q8
// var message = "Ali and Sami are best friends. They play cricket and football together.";
// var newMessage = message.replace(/and/g, "&");
// alert(newMessage);


// Q9
// var str = "472";
// var num = Number(str);
// alert("Value: " + num + "  Type: " + typeof num);


// Q10
// var input = prompt("Enter something:");
// alert("Uppercase: " + input.toUpperCase());


// Q11
// var input = prompt("Enter something:");
// var titleCase = input.toLowerCase().split(" ").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");
// alert("Title Case: " + titleCase);


// Q12
// var num = 35.36;
// var str = num.toString().replace(".", "");
// alert("Result: " + str);


// Q13
// var username = prompt("Enter a username:");
// while (/[@!.,]/.test(username)) {
//     username = prompt("Invalid username! Please enter a valid username without [@ . , !]:");
// }
// alert("Valid username: " + username);


// Q14
// var items = ["cake", "apple pie", "cookie", "chips", "patties"];
// var search = prompt("Enter item to search:").toLowerCase();
// var found = items.some(item => item.toLowerCase() === search);
// if (found) {
//     alert(search + " is available in the list.");
// } else {
//     alert(search + " is not available in the list.");
// }

// Q17
// var input = prompt("Enter something:");
// alert("Last character: " + input.charAt(input.length - 1));


// Q18
// var str = "The quick brown fox jumps over the lazy dog";
// var count = (str.toLowerCase().match(/the/g) || []).length;
// alert("Number of occurrences of 'the': " + count);

