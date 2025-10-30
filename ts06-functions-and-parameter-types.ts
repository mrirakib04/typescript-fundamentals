// 06-functions-and-parameter-types.ts
// Functions and Parameter Types in TypeScript

// ------------------------------
// ✅ Basic Function with Type Annotations
// ------------------------------
function add(a: number, b: number): number {
  return a + b;
}

console.log("Sum:", add(10, 5));

export {};
// ------------------------------
// ✅ Function with Default Parameters
// ------------------------------
function greet(name: string = "Guest"): string {
  return `Hello, ${name}!`;
}

console.log(greet("Rakib"));
console.log(greet()); // Uses default value

// ------------------------------
// ✅ Function with Optional Parameters
// ------------------------------
function showInfo(name: string, age?: number): void {
  if (age) console.log(`${name} is ${age} years old.`);
  else console.log(`${name}'s age is not provided.`);
}

showInfo("Arafat", 20);
showInfo("Nayeem");

// ------------------------------
// ✅ Function with Return Type `void`
// ------------------------------
// `void` means the function does not return anything

function logMessage(message: string): void {
  console.log("Log:", message);
}

logMessage("This is a TypeScript function!");

// ------------------------------
// ✅ Function Type (as a variable)
// ------------------------------
let multiply: (x: number, y: number) => number;

multiply = (x, y) => x * y;

console.log("Multiplication:", multiply(4, 6));

// ------------------------------
// ✅ Function with Rest Parameters
// ------------------------------
function sumAll(...numbers: number[]): number {
  return numbers.reduce((acc, curr) => acc + curr, 0);
}

console.log("Sum of all numbers:", sumAll(1, 2, 3, 4, 5));
