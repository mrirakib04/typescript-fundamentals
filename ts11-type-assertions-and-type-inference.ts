// 11-type-assertions-and-type-inference.ts
// Type Assertions & Type Inference in TypeScript

export {}; // keep this file a module

// --------------------------------------------------
// ✅ TYPE INFERENCE
// --------------------------------------------------
// TypeScript automatically detects (infers) the type from the value.

let username = "Rakib"; // inferred as string
// username = 20; ❌ Error: number not assignable to string

let age = 18; // inferred as number
let isActive = true; // inferred as boolean

console.log("Username:", username);
console.log("Age:", age);
console.log("Active:", isActive);

// Type inference in functions
function add(a: number, b: number) {
  // return type inferred as number
  return a + b;
}

console.log("Add Result:", add(10, 20));

// Inference in arrays
let numbers = [10, 20, 30]; // inferred as number[]
// numbers.push("Hello"); ❌ not allowed

// --------------------------------------------------
// ✅ TYPE ASSERTIONS
// --------------------------------------------------
// When you (the developer) tell TypeScript what type a value should be.
// Useful when TS cannot automatically infer type.

// Two syntax styles:

// 1️⃣ Using "as" syntax (recommended)
let value: unknown = "Hello TypeScript";

let length1 = (value as string).length; // telling TS: treat value as string
console.log("Length1:", length1);

// 2️⃣ Using angle bracket syntax (not allowed in .tsx)
let length2 = (<string>value).length;
console.log("Length2:", length2);

// --------------------------------------------------
// Example: Working with DOM elements
// --------------------------------------------------

// Without assertion, TypeScript considers this as HTMLElement | null
// let input = document.getElementById("my-input");

// With assertion:
let input = document.getElementById("my-input") as HTMLInputElement;

// Now TS knows input.value exists
// console.log(input.value);

// --------------------------------------------------
// Example: Converting unknown → specific type
// --------------------------------------------------
function getData(data: unknown) {
  // TS won't allow: data.toUpperCase();

  if (typeof data === "string") {
    console.log("Uppercase:", data.toUpperCase());
  }

  // forcefully treat data as number (not recommended unless sure)
  let forcedNumber = data as number;
  console.log("Forced Number:", forcedNumber);
}

getData("Rakib");
getData(123);

// --------------------------------------------------
// Summary:
// --------------------------------------------------
// ✔ Type Inference → TS guesses the type automatically
// ✔ Type Assertion → You tell TS the exact type
// ✔ Use assertions only when you are 100% sure about the type
// ✔ Prefer "as" syntax
