// 10-modules-and-namespaces.ts
// Modules and Namespaces in TypeScript

// NOTE: This file explains both concepts separately.
// Modern TypeScript recommends **Modules**, not Namespaces.

export {}; // keep this file scoped

// --------------------------------------------------
// ✅ PART 1: MODULES (Recommended in modern TypeScript)
// --------------------------------------------------
// A module is any file that contains import or export.
// Each module has its own scope.

// ----------------------
// 👉 Example: mathUtils.ts
// ----------------------
// export function add(a: number, b: number): number {
//   return a + b;
// }

// export const PI = 3.1416;

// ----------------------
// 👉 Example: app.ts (importing from module)
// ----------------------
// import { add, PI } from "./mathUtils";
// console.log(add(10, 20));
// console.log("PI:", PI);

// ----------------------
// 👉 Default export example
// ----------------------
// export default function greet(name: string) {
//   return `Hello, ${name}`;
// }

// In another file:
// import greet from "./greet";
// console.log(greet("Rakib"));

// Modules = Clean, modern, supports bundlers, works in Node + Browser.

// --------------------------------------------------
// ✅ PART 2: NAMESPACES (Old system, not recommended now)
// --------------------------------------------------
// Namespaces were used before ES module support existed in JS.
// Still useful for grouping code inside one file.

namespace Utility {
  export function print(message: string): void {
    console.log("Utility Print:", message);
  }

  export const version: string = "1.0";
}

Utility.print("Hello from Namespace");
console.log("Namespace Version:", Utility.version);

// ------------------------------
// Nested namespaces
// ------------------------------
namespace App {
  export namespace Services {
    export function serviceInfo() {
      console.log("App Service Running...");
    }
  }
}

App.Services.serviceInfo();

// --------------------------------------------------
// ✅ Summary:
// --------------------------------------------------
// ✔ Modules (import/export) → Modern, best practice
// ✔ Namespaces → Old-style internal grouping
// ✔ Never mix both in one file
