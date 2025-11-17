// 12-working-with-dom.ts
// Working with DOM in TypeScript

export {}; // keep file isolated as a module

// --------------------------------------------------
// ✅ Selecting DOM Elements
// --------------------------------------------------

// Basic element selection
const heading = document.getElementById("main-title");

// TypeScript considers this: HTMLElement | null
// So before using it, we check for null:

if (heading) {
  heading.innerText = "Updated Title from TypeScript!";
}

// --------------------------------------------------
// ✅ Using Type Assertions for precise element types
// --------------------------------------------------

// Input element
const nameInput = document.getElementById("name-input") as HTMLInputElement;

// Button element
const submitBtn = document.getElementById("submit-btn") as HTMLButtonElement;

// Now TypeScript knows input has `.value` and button has `.disabled`
submitBtn.addEventListener("click", () => {
  console.log("User Entered:", nameInput.value);
});

// --------------------------------------------------
// ✅ Query Selectors
// --------------------------------------------------

const paragraph = document.querySelector("p");

// querySelector returns: Element | null
if (paragraph) {
  paragraph.textContent = "Paragraph updated!";
}

// --------------------------------------------------
// ✅ Creating Elements Dynamically
// --------------------------------------------------
const list = document.getElementById("user-list") as HTMLUListElement;

function addUser(name: string) {
  const li = document.createElement("li");
  li.textContent = name;
  list.appendChild(li);
}

addUser("Rakib");
addUser("Arafat");

// --------------------------------------------------
// ✅ Handling Events with TypeScript
// --------------------------------------------------

const form = document.getElementById("user-form") as HTMLFormElement;

form.addEventListener("submit", (event: Event) => {
  event.preventDefault();

  const input = document.getElementById("user-name") as HTMLInputElement;

  if (input.value.trim() === "") {
    console.log("Name cannot be empty.");
    return;
  }

  addUser(input.value);
  input.value = "";
});

// --------------------------------------------------
// Summary
// --------------------------------------------------
// ✔ Always assert types when working with DOM
// ✔ Use HTMLInputElement, HTMLButtonElement etc.
// ✔ Check for null before accessing properties
// ✔ Use event types like 'Event', 'MouseEvent', 'KeyboardEvent'
