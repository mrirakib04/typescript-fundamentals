// 01-introduction.ts
// Introduction to TypeScript

// TypeScript is a superset of JavaScript that adds static typing.
// This means you can define variable types, which helps catch errors early.

// Example 1: Basic variable types
let message: string = "Hello, TypeScript!";
let year: number = 2025;
let isActive: boolean = true;

console.log(message);
console.log("Year:", year);
console.log("Is Active:", isActive);

// Example 2: TypeScript also supports type inference
// You don’t always need to specify the type explicitly
let city = "Dhaka"; // inferred as string
let population = 10000000; // inferred as number

console.log(`${city} has around ${population} people.`);

// Example 3: Function with types
function greet(name: string): string {
  return `Welcome, ${name}!`;
}

console.log(greet("Rakib"));

// Example 4: Compiling TypeScript
// Run the following commands:
// tsc 01-introduction.ts   → Compiles to JavaScript
// node 01-introduction.js  → Runs the compiled file
