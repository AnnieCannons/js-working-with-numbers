/********************** Exercise 1  **********************/
// Describe the following code:

let wholesalePrice = 5.45;
let retailPrice = 9.99;
let quantity = 47;
let salesTotal = retailPrice * quantity;
let profit = salesTotal - (wholesalePrice * quantity);

// Where might this code be used?
// ⭐️ on an Ecommerce platform

// Run this code and log the profit variable in the console. What answer do you get?
console.log(profit); "213.38"

// How would you change this code to make the value of the quantity variable dynamic?
userInput = prompt("Enter Amount");
let dynamicQuantity = parseFloat(userInput);
console.log(dynamicQuantity);







/********************** Exercise 2 - Operators **********************/
// Step 1: Calculate the sum of two numbers and log the result.
let total = 3 + 7;
console.log(total);

// Step 2: Calculate the difference between two numbers and print the result.
difference = 88 - 33;
console.log(difference);
//⭐️55

// Step 3: Calculate the product of two numbers and print the result.
product = 2 * 2;
console.log(product);
//⭐️4

// Step 4: Calculate the result of dividing two numbers and print the result. Handle division by zero.
division = 10 / 2;
console.log(division);
let division2 = 5 / 0;
console.log(division2);

// Step 5: Check if a given number is even and print the result.
let number1 = 23;
number1 % 2;
console.log(number1 % 2);
//⭐️odd

let number2 = 64;
number2 % 2;
console.log(number2 % 2);
//⭐️true


/********************** Exercise 3 - Decades Calculator **********************/
// Store your current age into a variable.
// Store a maximum age into a variable (10 years older than you are now).
// Store an estimated number of meals you should eat per day (as a number).
// Calculate how many you would eat total for the next decade.
// Output the result to the screen like so: "You will need [AMOUNT] meals to last you until the age of [AGE]".

let currentAge = 100000000;
let futureAge = "123,000,000";
let mealsPerDay = 4;
let mealsPerYear = mealsPerDay * 365;
let mealsPerDecade = mealsPerYear * 10;
console.log( "You will need " + mealsPerDecade + " meals to last you until the age of " + futureAge + "!!!");



/********************** Exercise 4 - PEMDAS **********************/
// You are working on an education app and you want to be able to provide the average scores for students.
// Here are the stored variables for a student and their subjects.

let mathScore = 90;
let scienceScore = 85;
let englishScore = 80;
let historyScore = 95;

// How would you get the average of their scores using JavaScript?
let scoreAverage = mathScore + scienceScore + englishScore + historyScore;
let average = 4;
let averageTotal = scoreAverage / average;
console.log("The average for this student is " + averageTotal);





/********************** Exercise 5 - Weather Converter **********************/
// Write a calculation that converts celsius to fahrenheit. To get the value of fahrenheit, you have to multiply the celsius value by 9/5 and then add 32. 


// Prompt the user for the value of the temperature in celcius. 
let userInputCelcius = prompt ("Enter a temperature in a Celsius Degree");
let fahrenheit = (userInputCelcius * 9 / 5) + 32;


// Run the code so that the following is logged to the console: 25°C is equal to 77°F



/********************** Exercise 6 - Assigning Values  **********************/

// Prompt the user for two numbers.
let userNumberInput1 = prompt ("Enter a number");
let userNumberInput2 = prompt ("Enter number again");

// Make sure that the values of the variables (the strings) are converted to numbers. 
userNumberInput1 = parseFloat(userNumberInput1);
userNumberInput2 = parseFloat(userNumberInput2);

// Create a new variable, add the numbers, and log the value.
let userNumberTotal = userNumberInput1 + userNumberInput2;
console.log("The sum of these two numbers is " + userNumberTotal);


// Reassign the variable to store the values of the numbers being subtracted. Log the value.
let subtractedValues = userNumberInput1 - userNumberInput2;
console.log("The difference of the two numbers is " + userNumberTotal)

// Add 100 to the variable. Log the value.
userNumberTotal = userNumberInput1 + userNumberInput2 + 100;

// Divide the value of the variable by 20. Log the value.
userNumberTotal = ("userNameInput1" + "userNumberInput2") / 20;
console.log(userNumberTotal);




/********************** Exercise 7 - Math Object  **********************/
let decimalNumber = 7.8;
// Given the above variable, how would you round the value to the nearest whole number (using the Math object)?
let roundedNumber = Math.round(decimalNumber)
// Console log the output to check your work.
console.log(roundedNumber);




/********************** Exercise 8 - Math Object  **********************/
// Dice Game
// Create a variable that stores the value of a random number between 1 and 6
let randomNumber = Math.floor((Math.random() *6) + 1);

// Alert the user of the random number.
alert("Your random number is " + randomNumber + ' ');





/********************** Exercise 9 - NaN  **********************/
let result1 = 0 / 0;
let result2 = "hello" * 5;
let result3 = parseInt("abc");

// Log the above variables in the console. What is the output?
console.log(result1);
console.log(result2);
console.log(result3);
// ⭐️result= NaN

// Without changing the below code, how could you write some new code between the variable declarations and the log, so that the answer is logged to the console? Use JavaScript number tools, please—don't reassign a number directly, as in: `wordVersion = 4`.
let numVersion = 4;
let wordVersion = "four";

console.log("Four divided by four is: " + (numVersion / wordVersion));






// Look up the isNaN() operator in MDN. What does it do? How would you use it?

//⭐️ isNan() is a property that can be used to test whether a value is a number or not. 