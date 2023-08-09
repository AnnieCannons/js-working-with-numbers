/********************** Exercise 1  **********************/
// Describe the following code://

let wholesalePrice = 5.45;
console.log(wholesalePrice);
let retailPrice = 9.99;
console.log(retailPrice);
let quantity = 47;
console.log(quantity);
let salesTotal = retailPrice * quantity;
console.log(salesTotal);
let profit = salesTotal - (wholesalePrice * quantity);
console.log(profit);

// Where might this code be used?

// On an Ecommerce site or the code might be used to generate budget sheets for a company.


// Run this code and log the profit variable in the console. What answer do you get?

//Profit is 213.38


// How would you change this code to make the value of the quanitity variable dynamic?

userInput = prompt("Enter an amount");
let dynamicQuantity = parseFloat(userInput);
console.log(dynamicQuantity); 


/********************** Exercise 2 - Operators **********************/
// Step 1: Calculate the sum of two numbers and log the result.

let total = 7 + 5;
console.log(total);


// Step 2: Calculate the difference between two numbers and print the result.
difference = 81 - 54;
console.log(difference);




// Step 3: Calculate the product of two numbers and print the result.

product = 7 * 7;
console.log(product);


// Step 4: Calculate the result of dividing two numbers and print the result. Handle division by zero.

division = 54 / 9;
console.log(division);
division2 = 9 / 0;
console.log(division2);


// Step 5: Check if a given number is even and print the result.

let num = 47;
num % 2;
console.log( num % 2);
// num is odd
let num2 = 46;
num2 % 2;
console.log(num2 % 2);
// num2 is even




/********************** Exercise 3 - Decades Calculator **********************/
// Store your current age into a variable.
// Store a maximum age into a variable (10 years older than you are now).
// Store an estimated number of meals you should eat per day (as a number).
// Calculate how many you would eat total for the next decade.
// Output the result to the screen like so: "You will need [AMOUNT] meals to last you until the age of [AGE]".

let currentAge = 28;
let futureAge = 38;
let mealsPerDay = 2;
let mealsPerYear = mealsPerDay * 365;
console.log(mealsPerYear);
let mealsPerDecade = mealsPerYear * 10;
console.log("You will need " +  mealsPerDecade + " meals to last you until the age of " + futureAge); 





/********************** Exercise 4 - PEMDAS **********************/
// You are working on an education app and you want to be able to provide the average scores for students.
// Here are the stored variables for a student and their subjects.

let mathScore = 90;
let scienceScore = 85;
let englishScore = 80;
let historyScore = 95;

// How would you get the average of their scores using JavaScript?

//From my research, it looks like there are some more advanced methods to do this such as using arrays, loops, and the .reduce method, but I do not fully understand them yet. The simplest way for now would be to:

let totalScore = mathScore + scienceScore + englishScore + historyScore;
let numberOfScores = 4;
let averageScore = totalScore / numberOfScores;
console.log(" The average score for this student is " + averageScore);






/********************** Exercise 5 - Weather Converter **********************/
// Write a calculation that converts celsius to fahrenheit. To get the value of fahrenheit, you have to multiply the celsius value by 9/5 and then add 32. 


// Prompt the user for the value of the temperature in celsius. 

userInputCelsius = prompt("enter a temperature in degrees celsius")

userInputCelsius = parseFloat(userInputCelsius);

fahrenheit = ((userInputCelsius * 9/5) + 32);

console.log(userInputCelsius + "°C" + " is equal to " + fahrenheit + "°F");


// Run the code so that the following is logged to the console: 25°C is equal to 77°F



/********************** Exercise 6 - Assigning Values  **********************/

// Prompt the user for two numbers.

let userNumberInput = prompt("Enter a number");
let userNumberInput2 = prompt("Enter another number");

// Make sure that the values of the variables (the strings) are converted to numbers. 

userNumberInput = parseFloat(userNumberInput);
userNumberInput2 = parseFloat(userNumberInput2);

// Create a new variable, add the numbers, and log the value.

let userNumberTotal = userNumberInput + userNumberInput2
console.log("The sum of the two numbers is " + userNumberTotal)

// Reassign the variable to store the values of the numbers being substracted. Log the value.

userNumberTotal = userNumberInput - userNumberInput2;
console.log("The difference of the two numbers is " + userNumberTotal);

// Add 100 to the variable. Log the value.

userNumberTotal = userNumberInput + userNumberInput2 + 100;
console.log(userNumberTotal);


// Divide the value of the variable by 20. Log the value.

userNumberTotal = (userNumberInput + userNumberInput2) / 20;
console.log(userNumberTotal);






/********************** Exercise 7 - Math Object  **********************/
let decimalNumber = 7.8;
// Given the above variable, how would you round the value to the nearest whole number (using the Math object)?
let roundedNumber = Math.round(decimalNumber)
console.log(roundedNumber);

// Console log the output to check your work.





/********************** Exercise 8 - Math Object  **********************/
// Dice Game
// Create a variable that stores the value of a random number between 1 and 6

let randomNumber = Math.floor((Math.random() * 6) + 1);

alert("Your random number is " + randomNumber);

// Alert the user of the random number.






/********************** Exercise 9 - NaN  **********************/
let result1 = 0 / 0;
console.log(result1);
let result2 = "hello" * 5;
console.log(result2);
let result3 = parseInt("abc");
console.log(result3);

// Log the above variables in the console. What is the output?

//The output is NaN, which means it is not a number. JS cannot produce a result using math to calculate a string and a number.

// Without changing the below code, how could you write some new code between the variable declarations and the log, so that the answer is logged to the console? Use JavaScript number tools, please—don't reassign a number directly, as in: `wordVersion = 4`.

let numVersion = 4;
let wordVersion = 'four';



console.log("Four divided by four is: " + (numVersion / wordVersion))


// Look up the isNaN() operator in MDN. What does it do? How would you use it?
// isNan() is a property that can be used to test whether a value is a number or not. The output "true" would be returned if the value is NOT a number (NaN). If it is a numerical value, the output "false" would be returned. For example,

let testVariable = 37;
isNaN(testVariable);

//The output displayed is "false"

let testVariable2 = "hello";
isNaN(testVariable2);

//The output displayed is "true"


