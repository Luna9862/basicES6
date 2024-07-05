// Step 1: Create arrays
let numbers1 = [1, 2, 3, 4, 5];
let numbers2 = [6, 7, 8, 9, 10];

// Step 2: Use spread operator to combine arrays
let numbers = [...numbers1, ...numbers2];

// Step 3: Define square function
const square = (num) => num * num;

// Step 4: Use map to create squares array
let squares = numbers.map((num) => square(num));

// Step 5: Define isEven function
const isEven = (num) => num % 2 === 0;

// Step 6: Use filter to create evenSquares array
let evenSquares = squares.filter((num) => isEven(num));

// Step 7: Destructuring assignment
let [firstEvenSquare, secondEvenSquare] = evenSquares;

// Step 8: Use template literals to log results
console.log(`Original Numbers: ${numbers}`);
console.log(`Squares: ${squares}`);
console.log(`Even Squares: ${evenSquares}`);
console.log(`Extracted Even Squares: ${firstEvenSquare}, ${secondEvenSquare}`);
