// 02-type-annotations.ts
// Type Annotations in TypeScript

// String type
let nameStr: string = "Rakib";
console.log("Name:", nameStr);

// Number type
let age: number = 18;
console.log("Age:", age);

// Boolean type
let isStudent: boolean = true;
console.log("Is Student:", isStudent);

// Any type (can hold any value, use carefully)
let randomValue: any = 42;
console.log("Random Value (any):", randomValue);
randomValue = "Now I'm a string!";
console.log("Random Value (any):", randomValue);

// Unknown type (safer alternative to any)
let unknownValue: unknown = "Hello unknown";
console.log("Unknown Value:", unknownValue);

// Type checking required before using unknown
if (typeof unknownValue === "string") {
  console.log("Length of unknown string:", unknownValue.length);
}

// Type inference example (TypeScript infers the type automatically)
let country = "Bangladesh"; // inferred as string
console.log("Country:", country);
