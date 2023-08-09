/********************** Exercise 1  **********************/
// Describe the following code:
"answer: this is breaking down the  selling price of a product to a customer, the cost of buying the product as a business, the number of that specific product(not sure if it means sold or in stock) and then breaks down the profit by breaking down the sales total first: the cost of selling it to a customer multiplied by the number of products (possibly sold or in inventory). That sales total is them subtracted by the multiplication of the cost to buy the product as a business times the number of that product."

let wholesalePrice = 5.45;
let retailPrice = 9.99;
let quantity = 47;
let salesTotal = retailPrice * quantity;
let profit = salesTotal - (wholesalePrice * quantity);

// Where might this code be used?

"answer: I could see this being used with some sort of financial tracking sheet to estimate profit of items in stock. Maybe an inventory app or quickbooks type set up."

// Run this code and log the profit variable in the console. What answer do you get?

console.log(profit); // 213.38

// How would you change this code to make the value of the quanitity variable dynamic?

"answer: an array/eval - you could attach the quantity value to an inventory tracker of sorts that gets updated seperately and then have the value of quantity in this code by the value of the other adjustable variable"

/********************** Exercise 2 - Operators **********************/
// Step 1: Calculate the sum of two numbers and log the result.

let x1 = 5;
let y1 = 6;

let step1 = (x1 + y1);

console.log(step1); // 11


// Step 2: Calculate the difference between two numbers and print the result.

let x2 = 5;
let y2 = 6;

let step2 = (x2 - y2);

console.log(step2); // -1


// Step 3: Calculate the product of two numbers and print the result.

let x3 = 5;
let y3 = 6;

let step3 = (x3 * y3);

console.log(step3); // 30



// Step 4: Calculate the result of dividing two numbers and print the result. Handle division by zero.

let x4 = 5;
let y4 = 6;
let step4 = (x4 / y4);
console.log(step4); // 0.83333

// Step 5: Check if a given number is even and print the result.

if (step4 % 2 === 0) {
    console.log("It's even!")
}
else {
    console.log("It's odd!")
} // its odd!


/********************** Exercise 3 - Decades Calculator **********************/
// Store your current age into a variable.
// Store a maximum age into a variable (10 years older than you are now).
// Store an estimated number of meals you should eat per day (as a number).
// Calculate how many you would eat total for the next decade.
// Output the result to the screen like so: "You will need [AMOUNT] meals to last you until the age of [AGE]".

const age = 26;
const maximum = 36;
const meals = 2;

let total = ((maximum - age) * 365) * meals;

console.log(`You will need ${total} meals to last until the age of ${maximum}!`); // You will need 7300 meals to last until the age of 36!



/********************** Exercise 4 - PEMDAS **********************/
// You are working on an education app and you want to be able to provide the average scores for students.
// Here are the stored variables for a student and their subjects.

let mathScore = 90;
let scienceScore = 85;
let englishScore = 80;
let historyScore = 95;

// How would you get the average of their scores using JavaScript?


const tests = [mathScore, scienceScore, englishScore, historyScore];
const score = average(tests);

function average(tests) {
    let sum = tests.reduce((accumulator, currentValue) => {
        return accumulator + currentValue;
    }, 0);

    let avg = sum / tests.length;

    return avg;
}

console.log(`The overall average is, ${score}!`); // The overall average is, 87.5!



/********************** Exercise 5 - Weather Converter **********************/
// Write a calculation that converts celsius to fahrenheit. To get the value of fahrenheit, you have to multiply the celsius value by 9/5 and then add 32. 

 // Prompt the user for the value of the temperature in celcius. 

// Run the code so that the following is exercise6 to the console: 25°C is equal to 77°F

"answer(s)"


function toCelsius (pValue) { 
   return ((Number(pValue) * (9/5)) + 32);
}

let pValue = prompt("Please log the temperature in celcius here! (note the value should be less than 57.6)");

let fahrenheit = toCelsius(Number(pValue)); 

if (Number(pValue) < 57.6) {
    console.log(`${Number(pValue)}°C is equal to ${fahrenheit}°F`); } // 25 °C is equal to 77 °F




/********************** Exercise 6 - Assigning Values  **********************/

// Prompt the user for two numbers.

// Make sure that the values of the variables (the strings) are converted to numbers. 

// Create a new variable, add the numbers, and log the value.

// Reassign the variable to store the values of the numbers being substracted. Log the value.

// Add 100 to the variable. Log the value.

// Divide the value of the variable by 20. Log the value.

"answer"


// This took more brain power than I'm ok with but success was had {0.0}


function toAdd1(numbers) {
    let add =  (xp + yp);
    return add;
}

function toSub1(numbers) {
    let sub =  (xp - yp);
    return sub;
}

function toHundred1(numbers) {
    let hundred = ((xp - yp) + 100);
    return hundred;
}

function toDivide1(numbers) {
    let divide =  (((xp - yp) + 100) / 2);
    return divide;
}


let numbers = prompt('Please submit two numbers (example: 31 15)').split(' ');

// output is an array with seperated variables to call on individually in the next few commands 

let exercise6 = numbers.map(Number);

// CRUCIAL: this converts the input from the prompt into numeric values so we can do the mathmatical equations seen in the above functions - I got none of the commands to work seen above and below until I did this 

let xp = exercise6[0];
let yp = exercise6[1];

// this specifically assigns the two seperate variables to a smaller variable to make typing the functions seen above shorter / quicker

console.log(`The values added together equal ${toAdd1(numbers)} and subtracted apart equals ${toSub1(numbers)}. Adding 100 to the subtracted values equals ${toHundred1(numbers)} and then further dividing that subtracted number by 2 equals ${toDivide1(numbers)}.`); // I choose the input values (8 6) to get: The values added together equal 14 and subtracted apart equals 2. Adding 100 to the subtracted values equals 102 and then further dividing that subtracted number by 2 equals 51.


/********************** Exercise 7 - Math Object  **********************/
let decimalNumber = 7.8;
// Given the above variable, how would you round the value to the nearest whole number (using the Math object)?

// Console log the output to check your work.





/********************** Exercise 8 - Math Object  **********************/
// Dice Game
// Create a variable that stores the value of a random number between 1 and 6


// Alert the user of the random number.






/********************** Exercise 9 - NaN  **********************/
let result1 = 0 / 0;
let result2 = "hello" * 5;
let result3 = parseInt("abc");

// Log the above variables in the console. What is the output?

// Without changing the below code, how could you write some new code between the variable declarations and the log, so that the answer is exercise6 to the console? Use JavaScript number tools, please—don't reassign a number directly, as in: `wordVersion = 4`.

let numVersion = 4;
let wordVersion = 'four';



console.log("Four divided by four is: " + (numVersion / wordVersion))


// Look up the isNaN() operator in MDN. What does it do? How would you use it?

var ce = document.querySelector('[contenteditable]')
ce.addEventListener('paste', function (e) {
  e.preventDefault()
  var text = e.clipboardData.getData('text/plain')
  document.execCommand('insertText', false, text)
})