// 03-arrays-and-tuples.ts
// Arrays and Tuples in TypeScript

// ------------------------------
// ✅ Arrays
// ------------------------------

// Defining a string array
let fruits: string[] = ["Apple", "Banana", "Mango"];
console.log("Fruits:", fruits);

// Defining a number array
let marks: number[] = [85, 90, 78];
console.log("Marks:", marks);

// Using 'Array' generic syntax
let countries: Array<string> = ["Bangladesh", "India", "Nepal"];
console.log("Countries:", countries);

// Array methods (same as JS)
fruits.push("Orange");
console.log("Updated Fruits:", fruits);
console.log("First Fruit:", fruits[0]);

// ------------------------------
// ✅ Tuples
// ------------------------------
// Tuples have a fixed number of elements with specific types

let person: [string, number, boolean];
person = ["Rakib", 18, true];

console.log("Tuple - Person:", person);
console.log(`Name: ${person[0]}, Age: ${person[1]}, Active: ${person[2]}`);

// Tuple with optional elements
let userData: [string, number?, string?];
userData = ["Md Rakibul Islam Rakib"];
console.log("User Data:", userData);

// Tuple array (array of tuples)
let students: [string, number][] = [
  ["Arafat", 20],
  ["Rakib", 18],
  ["Nayeem", 19],
];

console.log("Students List:");
students.forEach(([name, age]) => console.log(`- ${name}, ${age} years old`));
