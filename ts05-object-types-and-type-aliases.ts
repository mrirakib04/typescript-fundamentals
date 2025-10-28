// 05-object-types-and-type-aliases.ts
// Object Types & Type Aliases in TypeScript

// ------------------------------
// ✅ Object Types
// ------------------------------
// You can define the structure of an object using type annotations

let user: { name: string; age: number; isStudent: boolean } = {
  name: "Rakib",
  age: 18,
  isStudent: true,
};

console.log("User Object:", user);
console.log(`${user.name} is ${user.age} years old.`);

// You can also create functions that accept objects of a specific type
function printUserInfo(person: { name: string; age: number }) {
  console.log(`Name: ${person.name}, Age: ${person.age}`);
}

printUserInfo(user);

// ------------------------------
// ✅ Type Aliases
// ------------------------------
// Type aliases let you create custom reusable types
// Instead of repeating object definitions everywhere, you can name them

type Person = {
  name: string;
  age: number;
  email?: string; // Optional property
};

let person1: Person = {
  name: "Arafat",
  age: 20,
};

let person2: Person = {
  name: "Nayeem",
  age: 19,
  email: "nayeem@example.com",
};

console.log("\nType Alias - Person:");
console.log(person1);
console.log(person2);

// ------------------------------
// ✅ Type Alias with Functions
// ------------------------------
type GreetFunction = (name: string) => string;

const greet: GreetFunction = (name) => `Hello, ${name}!`;

console.log("\nGreeting:", greet("Rakib"));

// ------------------------------
// ✅ Combining Types (Using &)
// ------------------------------
type Address = {
  city: string;
  country: string;
};

type Employee = Person & Address; // Intersection type

let employee: Employee = {
  name: "Rakibul Islam",
  age: 18,
  city: "Dhaka",
  country: "Bangladesh",
};

console.log("\nCombined Type - Employee:");
console.log(employee);
