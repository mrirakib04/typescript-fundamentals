// 04-enums.ts
// Enums in TypeScript

// ------------------------------
// ✅ What are Enums?
// ------------------------------
// Enums allow you to define a set of named constants.
// They make your code more readable and meaningful.

// ------------------------------
// Numeric Enums (Default)
// ------------------------------
enum Direction {
  Up, // 0
  Down, // 1
  Left, // 2
  Right, // 3
}

console.log("Numeric Enum - Direction:");
console.log(Direction.Up); // 0
console.log(Direction[0]); // Up

// You can also assign custom starting values
enum StatusCode {
  Success = 200,
  NotFound = 404,
  ServerError = 500,
}

console.log("\nCustom Numeric Enum - StatusCode:");
console.log(StatusCode.Success); // 200
console.log(StatusCode[404]); // NotFound

// ------------------------------
// String Enums
// ------------------------------
enum Roles {
  Admin = "ADMIN",
  User = "USER",
  Guest = "GUEST",
}

console.log("\nString Enum - Roles:");
console.log(Roles.Admin); // ADMIN
console.log(Roles.User); // USER

// ------------------------------
// Heterogeneous Enum (Mixed)
// ------------------------------
// Not recommended, but possible
enum MixedExample {
  No = 0,
  Yes = "YES",
}

console.log("\nMixed Enum Example:");
console.log(MixedExample.No); // 0
console.log(MixedExample.Yes); // YES

// ------------------------------
// Example Usage
// ------------------------------
function getUserRole(role: Roles): string {
  switch (role) {
    case Roles.Admin:
      return "Full Access Granted.";
    case Roles.User:
      return "Limited Access Granted.";
    case Roles.Guest:
      return "Guest Access Only.";
    default:
      return "Unknown Role.";
  }
}

console.log("\nRole Access Example:");
console.log(getUserRole(Roles.Admin));
console.log(getUserRole(Roles.Guest));
