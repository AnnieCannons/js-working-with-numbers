/********************** Exercise 1  **********************/
// Describe the following code:

let wholesalePrice = 5.45;
let retailPrice = 9.99;
let quantity = 47;
let salesTotal = retailPrice * quantity;
let profit = salesTotal - (wholesalePrice * quantity);

// It's crunching the numbers to quantify the profit 


// Where might this code be used?
// In accounting software


// Run this code and log the profit variable in the console. What answer do you get?
console.log('$' + profit)
//213.38

// How would you change this code to make the value of the quantity variable dynamic?


/********************** Exercise 2 - Operators **********************/
// Step 1: Calculate the sum of two numbers and log the result.
let num1 = 10
let num2 = 12

const sum = num1 + num2
console.log(sum)

// Step 2: Calculate the difference between two numbers and print the result.
const diff = num1 - num2
console.log(diff)

// Step 3: Calculate the product of two numbers and print the result.
const product = num1 * num2
console.log(product)

// Step 4: Calculate the result of dividing two numbers and print the result. Handle division by zero.
const div = num1 / num2
console.log(div)

// Step 5: Check if a given number is even and print the result.
function isEven(number) {
    return number % 2 === 0;
}

console.log(isEven(num1));
console.log(isEven(num2));

/********************** Exercise 3 - Decades Calculator **********************/
// Store your current age into a variable.
// Store a maximum age into a variable (10 years older than you are now).
// Store an estimated number of meals you should eat per day (as a number).
// Calculate how many you would eat total for the next decade.
// Output the result to the screen like so: "You will need [AMOUNT] meals to last you until the age of [AGE]".
let currentAge = 33
let maxAge = currentAge + 10
let mealsPerDay = 3

const yearsInDecade = 10;
const totalMeals = yearsInDecade * 365 * mealsPerDay

console.log('You will need ' +(totalMeals)+ ' meals to last you until the age of ' +(maxAge)+ '.')


/********************** Exercise 4 - PEMDAS **********************/
// You are working on an education app and you want to be able to provide the average scores for students.
// Here are the stored variables for a student and their subjects.

let mathScore = 90;
let scienceScore = 85;
let englishScore = 80;
let historyScore = 95;

// How would you get the average of their scores using JavaScript?


function calculateAverage(numbers) {
    if (numbers.length === 0) {
      return 0; // Handle the case of an empty array.
    }

const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
const average = sum / numbers.length;

    return average;
}

const values = [mathScore, scienceScore, englishScore, historyScore];
const average = calculateAverage(values);
console.log(average)

/********************** Exercise 5 - Weather Converter **********************/
// Write a calculation that converts celsius to fahrenheit. To get the value of fahrenheit, you have to multiply the celsius value by 9/5 and then add 32. 


// Prompt the user for the value of the temperature in celcius. 


// Run the code so that the following is logged to the console: 25°C is equal to 77°F


//const celsius = parseFloat(prompt("Enter the temperature in Celsius:"));

//if (!isNaN(celsius)) {

//const fahrenheit = (celsius * 9/5) + 32;

//console.log(`${celsius}°C is equal to ${fahrenheit}°F`);
//} else {
//console.log("Invalid input. Please enter a valid number.");
//}


/********************** Exercise 6 - Assigning Values  **********************/

// Prompt the user for two numbers and convert them to numbers
//const input1 = parseFloat(prompt("Enter the first number:"));
//const input2 = parseFloat(prompt("Enter the second number:"));

// Check if the inputs are valid numbers
//if (!isNaN(input1) && !isNaN(input2)) {
  // Create a new variable and add the numbers
//let result = input1 + input2;
//console.log(`Addition result: ${result}`);

  // Reassign the variable to store the values of the numbers being subtracted
//result = input1 - input2;
//console.log(`Subtraction result: ${result}`);

  // Add 100 to the variable
//result += 100;
//console.log(`After adding 100: ${result}`);

  // Divide the value of the variable by 20
//result /= 20;
//console.log(`After dividing by 20: ${result}`);
//}

/********************** Exercise 7 - Math Object  **********************/
let decimalNumber = 7.8;
// Given the above variable, how would you round the value to the nearest whole number (using the Math object)?
let wholeNumber = Math.round(decimalNumber);
// Console log the output to check your work.

console.log(wholeNumber)


/********************** Exercise 8 - Math Object  **********************/
// Dice Game
// Create a variable that stores the value of a random number between 1 and 6
//let diceGame = Math.floor(Math.random() * 6)

// Alert the user of the random number.
//alert(diceGame)





/********************** Exercise 9 - NaN  **********************/
let result1 = 0 / 0;
let result2 = "hello" * 5;
let result3 = parseInt("abc");

// Log the above variables in the console. What is the output?
console.log(result1);
console.log(result2);
console.log(result3);
//NaN for all

// Without changing the below code, how could you write some new code between the variable declarations and the log, so that the answer is logged to the console? Use JavaScript number tools, please—don't reassign a number directly, as in: `wordVersion = 4`.

let numVersion = 4;
let wordVersion = 'four';

wordVersion = numVersion

console.log("Four divided by four is: " + (numVersion / wordVersion))


// Look up the isNaN() operator in MDN. What does it do? How would you use it?
