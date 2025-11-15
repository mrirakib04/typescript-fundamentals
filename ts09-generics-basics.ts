// 09-generics-basics.ts
// Generics (Basics) in TypeScript

export {}; // make this file a module

// ------------------------------
// ✅ What Are Generics?
// ------------------------------
// Generics allow reusable and type-safe code.
// Same function/class can work with different types
// while preserving the actual type information.

// ------------------------------
// ✅ Generic Function
// ------------------------------
function identity<T>(value: T): T {
  return value;
}

console.log("Identity String:", identity<string>("Rakib"));
console.log("Identity Number:", identity<number>(18));
console.log("Identity Inferred:", identity(true)); // TypeScript auto-detects type

// ------------------------------
// ✅ Generic Function with Arrays
// ------------------------------
function getFirst<T>(items: T[]): T {
  return items[0];
}

console.log("First String:", getFirst(["A", "B", "C"]));
console.log("First Number:", getFirst([10, 20, 30]));

// ------------------------------
// ✅ Generic Interface
// ------------------------------
interface Box<T> {
  value: T;
}

const stringBox: Box<string> = { value: "Hello TS" };
const numberBox: Box<number> = { value: 101 };

console.log("String Box:", stringBox.value);
console.log("Number Box:", numberBox.value);

// ------------------------------
// ✅ Generic Class
// ------------------------------
class StorageData<T> {
  private items: T[] = [];

  add(item: T): void {
    this.items.push(item);
  }

  remove(item: T): void {
    this.items = this.items.filter((i) => i !== item);
  }

  getAll(): T[] {
    return this.items;
  }
}

const textStore = new StorageData<string>();
textStore.add("Rakib");
textStore.add("Arafat");
textStore.remove("Arafat");
console.log("Text Store:", textStore.getAll());

const numberStore = new StorageData<number>();
numberStore.add(50);
numberStore.add(100);
console.log("Number Store:", numberStore.getAll());

// ------------------------------
// ✅ Generic Constraints
// ------------------------------
function getLength<T extends { length: number }>(item: T): number {
  return item.length;
}

console.log("String Length:", getLength("TypeScript"));
console.log("Array Length:", getLength([1, 2, 3]));
// getLength(10); // ❌ Error: number has no length
