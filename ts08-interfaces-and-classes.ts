// 08-interfaces-and-classes.ts
// Interfaces and Classes in TypeScript

export {}; // isolate scope for this file

// ------------------------------
// ✅ Interfaces
// ------------------------------
// Interfaces define the structure of an object — like a contract or blueprint.

interface User {
  name: string;
  age: number;
  email?: string; // optional property
}

const user1: User = {
  name: "Rakib",
  age: 18,
  email: "rakib@example.com",
};

const user2: User = {
  name: "Arafat",
  age: 20,
};

console.log("User 1:", user1);
console.log("User 2:", user2);

// ------------------------------
// ✅ Interface with Methods
// ------------------------------
interface Vehicle {
  brand: string;
  speed: number;
  move(): void;
}

const car: Vehicle = {
  brand: "Toyota",
  speed: 120,
  move() {
    console.log(`${this.brand} is moving at ${this.speed} km/h`);
  },
};

car.move();

// ------------------------------
// ✅ Interfaces in Classes
// ------------------------------
// A class can "implement" an interface, meaning it must follow that interface's structure.

interface Person {
  name: string;
  age: number;
  greet(): void;
}

class Student implements Person {
  name: string;
  age: number;
  studentId: number;

  constructor(name: string, age: number, studentId: number) {
    this.name = name;
    this.age = age;
    this.studentId = studentId;
  }

  greet(): void {
    console.log(`Hello, I'm ${this.name}, ${this.age} years old.`);
  }

  showId(): void {
    console.log(`My Student ID is ${this.studentId}`);
  }
}

const rakib = new Student("Rakib", 18, 1001);
rakib.greet();
rakib.showId();

// ------------------------------
// ✅ Interface Inheritance (Extending Interfaces)
// ------------------------------
// One interface can extend another

interface Employee extends Person {
  position: string;
  salary: number;
}

const developer: Employee = {
  name: "Nayeem",
  age: 22,
  position: "Frontend Developer",
  salary: 40000,
  greet() {
    console.log(`Hi, I'm ${this.name}, a ${this.position}`);
  },
};

developer.greet();
console.log("Employee Info:", developer);
