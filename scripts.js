/********************** Exercise 1  **********************/
// Describe the following code:

let wholesalePrice = 5.45;
let retailPrice = 9.99;
let quantity = 47;
let salesTotal = retailPrice * quantity;
let profit = salesTotal - (wholesalePrice * quantity);

// Where might this code be used?
"a store"

// Run this code and log the profit variable in the console. What answer do you get?
console.log(profit)
"213.38"

// How would you change this code to make the value of the quantity variable dynamic?
"A dynamic value is a string that defines how the final value should be compiled."

/********************** Exercise 2 - Operators **********************/
// Step 1: Calculate the sum of two numbers and log the result.
let num1 = 17;
let num2 = 23;

const sum = num1 + num2;

console.log('The sum of ' + num1 + ' and ' + num2 + ' is :' + sum)

// Step 2: Calculate the difference between two numbers and print the result.
let num3 = 10;
let num4 = 6;

const difference = num3 - num4

console.log("The difference between " + num3 + ' and ' + num4 + ' is:' + difference)

// Step 3: Calculate the product of two numbers and print the result.
let num5 = 3;
let num6 = 23;

const product = num5 * num6

console.log('The product of ' + num5 + ' and ' + num6 + ' is: ' + product)

// Step 4: Calculate the result of dividing two numbers and print the result. Handle division by zero.
let num7 = 17;
let num8 = 4;

const result = num7 / num8

console.log('The result of ' + num7 + ' and ' + num8 + ' is: ' + result)
// Step 5: Check if a given number is even and print the result.
let number = 36;

if(number % 2 == 0){
    console.log('The number is even.')
}
else {
    console.log('The number is odd')
}
/********************** Exercise 3 - Decades Calculator **********************/
// Store your current age into a variable.
let myAge = 38;

// Store a maximum age into a variable (10 years older than you are now).
let olderAge = 48;

// Store an estimated number of meals you should eat per day (as a number).
let mealsPerDay = 3;

// Calculate how many you would eat total for the next decade.
let mealsPerYear = 3 * 365;
console.log(mealsPerYear)

let mealsPerDecade = mealsPerYear * 10;
console.log(mealsPerDecade)

// Output the result to the screen like so: "You will need [AMOUNT] meals to last you until the age of [AGE]".
console.log('You will need ' + mealsPerDecade + ' meals to last you until the age of ' + olderAge)


/********************** Exercise 4 - PEMDAS **********************/
// You are working on an education app and you want to be able to provide the average scores for students.
// Here are the stored variables for a student and their subjects.

let mathScore = 90;
let scienceScore = 85;
let englishScore = 80;
let historyScore = 95;

// How would you get the average of their scores using JavaScript?

let averageScores = ((mathScore + scienceScore + englishScore + historyScore)/4)
console.log(averageScores)



/********************** Exercise 5 - Weather Converter **********************/
// Write a calculation that converts celsius to fahrenheit. To get the value of fahrenheit, you have to multiply the celsius value by 9/5 and then add 32. 


// Prompt the user for the value of the temperature in celcius. 

userValueCelcius = prompt ('Please enter a celcius temperature')

userValueCelcius = parseFloat (userValueCelcius)

farenheit = ((userValueCelcius * 9/5) + 32);

// Run the code so that the following is logged to the console: 25°C is equal to 77°F


/*console.log(userValueCelcius + '\u00B0 C is equal to ' + farenheit + '\u00B0 F')*/

/********************** Exercise 6 - Assigning Values  **********************/

// Prompt the user for two numbers.
userNumber1 = prompt (' Please pick a number');
userNumber2 = prompt ('Please pick another number');

// Make sure that the values of the variables (the strings) are converted to numbers. 
userNumber1 = parseFloat (userNumber1)
userNumber2 = parseFloat (userNumber2)

// Create a new variable, add the numbers, and log the value.
let userNumberSum = userNumber1 + userNumber2

console.log('The sum of ' + userNumber1 + ' and ' + userNumber2 + ' is:' + userNumberSum)

// Reassign the variable to store the values of the numbers being substracted. Log the value.
userNumberSum = (userNumber1 - userNumber2)

console.log('The difference between ' + userNumber1 + ' and ' + userNumber2 +' is: ' + userNumberSum)

// Add 100 to the variable. Log the value.
userNumberSum = (userNumber1 + userNumber2 + 100)
console.log('The sum of ' + userNumber1 + ' and ' + userNumber2 + ' plus 100 is: ' + userNumberSum)

// Divide the value of the variable by 20. Log the value.
userNumberSum = (userNumber1 + userNumber2 / 20)
console.log('The result of ' + userNumber1 + ' and ' + userNumber2 + ' divided by 20 is: ' + userNumberSum)


/********************** Exercise 7 - Math Object  **********************/
let decimalNumber = 7.8;
// Given the above variable, how would you round the value to the nearest whole number (using the Math object)?
let roundedValue = Math.round(decimalNumber);

// Console log the output to check your work.
console.log(roundedValue);


/********************** Exercise 8 - Math Object  **********************/
// Dice Game
// Create a variable that stores the value of a random number between 1 and 6

/*function getRandomNumber (min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor (Math.random () * (1 - 6) + 1);
}*/

let getRandomNumber = Math.floor (Math.random () * (1 - 6) + 1);
// Alert the user of the random number.
console.log(getRandomNumber);
alert('The random number selected for you is: ' + getRandomNumber);



/********************** Exercise 9 - NaN  **********************/
let result1 = 0 / 0;
let result2 = "hello" * 5;
let result3 = parseInt("abc");

// Log the above variables in the console. What is the output?
console.log(result1)
console.log(result2)
console.log(result3)
"All return NAN"


// Without changing the below code, how could you write some new code between the variable declarations and the log, so that the answer is logged to the console? Use JavaScript number tools, please—don't reassign a number directly, as in: `wordVersion = 4`.

let numVersion = 4;
let wordVersion = 'four';

wordVersion = wordVersion.length;

console.log("Four divided by four is: " + (numVersion / wordVersion))


// Look up the isNaN() operator in MDN. What does it do? How would you use it?
"isNAN() determines if a value is NAN, converts the number if necessary"