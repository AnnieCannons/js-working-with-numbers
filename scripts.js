/********************** Exercise 1  **********************/
// Describe the following code:
"answer: this is breaking down the  selling price of a product to a customer, the cost of buying the product as a business, the number of that specific product(not sure if it means sold or in stock) and then breaks down the profit by breaking down the sales total first: the cost of selling it to a customer multiplied by the number of products (possibly sold or in inventory). That sales total is them subtracted by the multiplication of the cost to buy the product as a business times the number of that product."

const wholesalePrice = 5.45;
const retailPrice = 9.99;
const quantity = 47;
const salesTotal = retailPrice * quantity;
const profit = salesTotal - (wholesalePrice * quantity);

// Where might this code be used?

"answer: I could see this being used with some sort of financial tracking sheet to estimate profit of items in stock. Maybe an inventory app or quickbooks type set up."

// Run this code and log the profit variable in the console. What answer do you get?

"answer: 213.38"

// How would you change this code to make the value of the quanitity variable dynamic?

"answer: an array/eval - you could attach the quantity value to an inventory tracker of sorts that gets updated seperately and then have the value of quantity in this code by the value of the other adjustable variable"

/********************** Exercise 2 - Operators **********************/
// Step 1: Calculate the sum of two numbers and log the result.

let x = 5;
let y = 6;

let step1 = (x + y);

console.log(step1); // 11


// Step 2: Calculate the difference between two numbers and print the result.

let x = 5;
let y = 6;

let step2 = (x / y);

console.log(step2); // 0.8333


// Step 3: Calculate the product of two numbers and print the result.

let x = 5;
let y = 6;

let step3 = (x * y);

console.log(step3); // 30



// Step 4: Calculate the result of dividing two numbers and print the result. Handle division by zero.

let x = 5;
let y = 6;
let step4 = (x / y);
console.log(step4);

// Step 5: Check if a given number is even and print the result.

if (step3 % 2 === 0) {
    console.log("It's even!")}
    else {
        console.log("It's odd!")
    }


/********************** Exercise 3 - Decades Calculator **********************/
// Store your current age into a variable.
// Store a maximum age into a variable (10 years older than you are now).
// Store an estimated number of meals you should eat per day (as a number).
// Calculate how many you would eat total for the next decade.
// Output the result to the screen like so: "You will need [AMOUNT] meals to last you until the age of [AGE]".


const age = 26;
const maximum = 36;
const meals = 2;

let decade = (age * 10);

console.log(`You will need ${decade} meals to last until the age of ${age}!`);



/********************** Exercise 4 - PEMDAS **********************/
// You are working on an education app and you want to be able to provide the average scores for students.
// Here are the stored variables for a student and their subjects.
const mathScore = 90;
const scienceScore = 85;
const englishScore = 80;
const historyScore = 95;
// How would you get the average of their scores using JavaScript?






/********************** Exercise 5 - Weather Converter **********************/
// Write a calculation that converts celsius to fahrenheit. To get the value of fahrenheit, you have to multiply the celsius value by 9/5 and then add 32. 

// Prompt the user for the value of the temperature in celcius. 


// Run the code so that the following is logged to the console: 25°C is equal to 77°F


/********************** Exercise 6 - Assigning Values  **********************/

// Prompt the user for two numbers.

// Make sure that the values of the variables (the strings) are converted to numbers. 

// Create a new variable, add the numbers, and log the value.

// Reassign the variable to store the values of the numbers being substracted. Log the value.

// Add 100 to the variable. Log the value.

// Divide the value of the variable by 20. Log the value. 






/********************** Exercise 7 - Math Object  **********************/
const decimalNumber = 7.8;
// Given the above variable, how would you round the value to the nearest whole number (using the Math object)?

// Console log the output to check your work.





/********************** Exercise 8 - Math Object  **********************/
// Dice Game
// Create a variable that stores the value of a random number between 1 and 6

// Alert the user of the random number.






/********************** Exercise 9 - NaN  **********************/
const result1 = 0 / 0; 
const result2 = "hello" * 5; 
const result3 = parseInt("abc"); 

// Log the above variables in the console. What is the output?

// Run the following code. How would you edit the following code so that it runs properly, while keeping the second value a string?
const value = 4 / 'four';

// Look up the isNaN() operator in MDN. What does it do? How would you use it?
