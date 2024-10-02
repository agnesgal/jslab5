// Challenge 1: getCelsius() Function
const getCelsius = (fahrenheit) => (fahrenheit - 32) * 5 / 9;

console.log(`The temperature is ${getCelsius(32).toFixed(2)} \xB0C`);
// The temperature is 0.00 °C

// Challenge 2: minMax() Arrow Function
const minMax = (arr) => ({ min: Math.min(...arr), max: Math.max(...arr) });

console.log(minMax([1, 2, 3, 4, 5]));
// { min: 1, max: 5 }

// Challenge 3: IIFE (Immediately Invoked Function Expression) with user input
(function(length, width) {
    const area = length * width;
    console.log(`The area of a rectangle with a length of ${length} and a width of ${width} is ${area}.`);

    // Get user input
    const userLength = parseInt(prompt("Enter the length of the rectangle:"));
    const userWidth = parseInt(prompt("Enter the width of the rectangle:"));

    // Calculate and log area with user input
    if (!isNaN(userLength) && !isNaN(userWidth)) {
        const userArea = userLength * userWidth;
        console.log(`The area of the rectangle with user-provided dimensions is ${userArea}.`);
    } else {
        console.log("Invalid input. Please enter valid numbers for length and width.");
    }
})(10, 5);
// The area of a rectangle with a length of 10 and a width of 5 is 50.