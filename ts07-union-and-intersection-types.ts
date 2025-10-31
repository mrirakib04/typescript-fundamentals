// 07-union-and-intersection-types.ts
// Union & Intersection Types in TypeScript

export {}; // to make this file a module (avoid global name conflicts)

// ------------------------------
// ✅ Union Types
// ------------------------------
// Union type allows a variable to hold values of multiple types.

let userId: string | number;
userId = 101; // number
console.log("User ID (number):", userId);

userId = "rakib101"; // string
console.log("User ID (string):", userId);

// Function with union type parameter
function printId(id: string | number): void {
  if (typeof id === "string") {
    console.log("Your ID (string):", id.toUpperCase());
  } else {
    console.log("Your ID (number):", id);
  }
}

printId(123);
printId("abc123");

// Union type with arrays
let data: (string | number)[] = ["Rakib", 18, "Arafat", 20];
console.log("Mixed Array:", data);

// ------------------------------
// ✅ Intersection Types
// ------------------------------
// Intersection combines multiple types into one — meaning the variable/object must include all properties from both.

type Person = {
  name: string;
  age: number;
};

type Contact = {
  email: string;
  phone: string;
};

// Combine both Person & Contact using intersection (&)
type Employee = Person & Contact;

const employee1: Employee = {
  name: "Rakib",
  age: 18,
  email: "rakib@example.com",
  phone: "017xxxxxxxx",
};

console.log("Employee Details:", employee1);

// Another example with functions
function displayEmployee(emp: Employee): void {
  console.log(`${emp.name} (${emp.age}) — ${emp.email}, ${emp.phone}`);
}

displayEmployee(employee1);
