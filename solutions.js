// Part 1:

// 1. Differences Between var, let, and const
// var is limited to the function it is defined in.
// let and const are block-scoped, meaning they only exist inside the immediate curly braces {} where they are declared (like loops or if statements).
// Variables created with var and let can have their values overwritten at any time. const variables cannot be reassigned after their initial definition.

// 2. Primitive Data Types vs. Reference Types
// String: Textual data (e.g., "Hello").
// Number: Double-precision float values (e.g., 42 or 3.14).
// BigInt: Large integers beyond the safe limit of the Number type (e.g., 9007199254740991n).
// Boolean: Logical entities (true or false).
// Undefined: A variable that has been declared but not assigned a value.
// Null: An intentional absence of any object value.
// Symbol: A unique and immutable identifier.

// Differences
// Primitives are stored directly on the stack, where the variable holds the actual value. Reference types (like arrays, objects, and functions) are stored on the heap. The variable on the stack only holds a pointer (or reference) to the memory location on the heap.

// 3. Loose Equality (==) vs. Strict Equality (===)
// Loose Equality (==): Compares two values for equality after converting both to a common type. For example, 5 == "5" evaluates to true because JavaScript automatically converts the string "5" into a number before comparing.
// Strict Equality (===): Compares both the value and the type without converting them. Using the same example, 5 === "5" evaluates to false because one is a number and the other is a string.

// 4. Logical Operators and Short-Circuit Evaluation
// Logical AND (&&): Evaluates expressions and stops at the first falsy value it encounters, returning that value. If all values are truthy, it returns the last value.
// Logical OR (||): Evaluates expressions and stops at the first truthy value it encounters, returning that value. If all values are falsy, it returns the last value.
// Logical NOT (!): Converts an operand to a boolean and flips its value (truthy becomes false, falsy becomes true).

// 5. Conditional Switch Statements
// A switch statement evaluates an expression once and matches its value against multiple case clauses. 
// if...else statements checks a single variable against many distinct values.



// Part 2: Implementation Exercises
// 1. Variables and Data Types
var fullName = "Jose Deng";
let age = 100;
const isEnrolled = true;

console.log("Value:", fullName, "| Type:", typeof fullName);
console.log("Value:", age, "| Type:", typeof age);
console.log("Value:", isEnrolled, "| Type:", typeof isEnrolled);


// 2. Operators and Type Coercion
let numericString = "5";
let number = 10;
// Addition triggers string concatenation
let additionResult = numericString + number; 
console.log(`Addition ("5" + 10):`, additionResult); // Output: "510" (String)

// Multiplication triggers numeric coercion
let multiplicationResult = numericString * number; 
console.log(`Multiplication ("5" * 10):`, multiplicationResult); // Output: 50 (Number)


// 3. Conditional Statements (if...else)
let buyerAge = 22;
if (buyerAge < 5) {
    console.log("Ticket Price: Free (Child under 5)");
} else if (buyerAge >= 5 && buyerAge <= 17) {
    console.log("Ticket Price: Child Discount Applied");
} else if (buyerAge >= 18 && buyerAge <= 64) {
    console.log("Ticket Price: Full Price");
} else {
    console.log("Ticket Price: Senior Discount Applied");
}


// 4. Conditional (Ternary) Operator
// ternary operator
let accountBalance = 15.50;
let accountStatus = accountBalance < 0 ? "Account Overdrawn" : "Account Active";
console.log(accountStatus); 


// 5. Comprehensive Challenge
let numericScore = 85; 
let finalGrade;
// Use switch(true) to evaluate conditional ranges
switch (true) {
    case (numericScore >= 90 && numericScore <= 100):
        finalGrade = "A";
        break;
    case (numericScore >= 80 && numericScore < 90):
        finalGrade = "B";
        break;
    case (numericScore >= 70 && numericScore < 80):
        finalGrade = "C";
        break;
    case (numericScore >= 60 && numericScore < 70):
        finalGrade = "D";
        break;
    case (numericScore >= 0 && numericScore < 60):
        finalGrade = "F";
        break;
    default:
        finalGrade = "Invalid Score";
}
console.log(`Score: ${numericScore} out of 100 | Final Grade: ${finalGrade}`);


// JS LOOPS AND FUNCTIONS

// SHORT-CIRCUIT LOGIC
let userInput = ""; // Falsy
let username = userInput || "Guest"; 
console.log(username); // Output: "Guest"
// Note: If userInput had been "john", the execution would short-circuit immediately, and username would be set to "john".


// CONDITIONAL ANLYSIS
const x = 5;
const y = 5;
if (x == y && typeof x === "string") {
    console.log("Result A");
} else if (x === y || x > 0) {
    console.log("Result B");
} else {
    console.log("Result C");
}


// NESTED CONDITIONALS
let userRole = "admin";
let isVerified = true;
let accessStatus;

if (userRole === "admin") {
    if (isVerified) {
        accessStatus = "Full Access";
    } else {
        accessStatus = "Verification Pending";
    }
} else {
    accessStatus = "Restricted Access";
}
console.log(`User Role: ${userRole} | Verified: ${isVerified} | Access Status: ${accessStatus}`);


// REFACTORED USING TERNARY OPERATOR
// let accessStatus = (userRole === "admin") 
//     ? (isVerified ? "Full Access" : "Verification Pending") 
//     : "Restricted Access";
// console.log(`User Role: ${userRole} | Verified: ${isVerified} | Access Status: ${accessStatus}`);



// Part 2: Iteration (For & While Loops)
// Theoretical Mastery

// Loop lifecycle
// initialization: Runs exactly once before the loop begins to set up the iterator variable.
// condition: Evaluated before every iteration. If it is truthy, the loop body runs; if falsy, the loop terminates.
// final-expression: Executes at the very end of each iteration, immediately after the code block inside the loop body finishes running, and right before the condition is evaluated for the next cycle.

// Loop Invariant: A logical condition or property that remains true before and after each iteration of a loop.
// Ensuring Termination: To prevent an infinite loop, the body of a while loop must evaluate to false. 
// break: Immediately terminates the entire loop execution.
// continue: Halts the current iteration's code execution and jumps straight to the next iteration cycle.
// 

// ARRAY TRAVERSAL
const numbers = [3, 7, 10, 5, 8, -2, 14, 9];
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] < 0) {
        break;  // terminates the entire loop if a negative number is encountered
    }
    // Skip even numbers
    if (numbers[i] % 2 === 0) {
        continue; // skips the currenet iteration and moves to the next
    }
    console.log("Processing odd number:", numbers[i]);
}


//NESTED LOOPS
let count = 0;
for (let i = 0; i < 3; i++) {
    for (let j = 3; j > i; j--) {
        count++;
    }
}
console.log(count);
// The final value of count is 6.
// Outer Loop i = 0
// j = 3 (3 > 0 is true) -- count becomes 1
// j = 2 (2 > 0 is true) -- count becomes 2
// j = 1 (1 > 0 is true) -- count becomes 3
// j = 0 (0 > 0 is false) -- inner loop ends

// Outer Loop i = 1
// j = 3 (3 > 1 is true) -- count becomes 4
// j = 2 (2 > 1 is true) -- count becomes 5
// j = 1 (1 > 1 is false) -- inner loop ends

// Outer Loop i = 2
// j = 3 (3 > 2 is true) -- count becomes 6
// j = 2 (2 > 2 is false) -- inner loop ends


// WHILE VS DO-WHILE LOOP
let conditionState = false;
// Standard While Loop
while (conditionState) {
    console.log("This will NEVER log because the condition is false from the start.");
}

// Do...While Loop
do {
    console.log("This will log EXACTLY ONCE despite the condition being false.");
} while (conditionState);


// Part 3: Functions (Anatomy & Execution)

// Theoretical Mastery
// Function Declaration: A function defined as a standalone statement starting with the function keyword (e.g., function greet() {}).
// Function Expression: A function created inside an expression and typically assigned to a variable (e.g., const greet = function() {}).

// Function declarations are fully hoisted, meaning they can be called before they are defined in the code. 
// Function expressions are not hoisted, so they cannot be called before their definition.

// The arguments object: A built-in, array-like object available inside all non-arrow functions. It contains the values of all arguments passed to the function. 
// However, it is not a real array, meaning it lacks modern array methods like .map(), .filter(), or .forEach().

// The Rest Parameter (...args): A modern syntax that gathers all remaining user arguments into a true, native JavaScript array.

// The rest parameter is heavily favored in modern JavaScript. Because it returns a genuine array, you can immediately use any array processing method

// Return Statement: If a return keyword is used by itself without an explicit value following it, it instantly terminates the execution of the function. Any lines of code written below that return statement will be ignored.


// ARROW FUNCTION ANATOMY
function multiply(a, b) {
    return a * b;
}
// transformation into an arrow function with implicit return
const multiply = (a, b) => a * b;


// HIGHER ORDER CONCEPTS
// If Function A is passed into Function B as an argument, Function A is commonly called a callback function. 
// Function B is considered a Higher-Order Function.

// Data Flow
// Function B is invoked, and a reference to Function A is passed into it through its parameter list. At this stage, Function A has not run yet.
// When Function B calls Function A, it can inject its own internal data values as arguments directly into Function A.
// Function A executes, processes the data it received, and can optionally return a result back to the specific line inside Function B where it was called.

// Function A: Callback Function
function greet(name) {
  console.log(`Hello, ${name}!`);
  return `Greeted ${name}`;
}

// Function B: Higher-Order Function
function processUser(callback) {
  const names = ["Alice", "Bob", "Charlie"];

  for (let i = 0; i < names.length; i++) {
    const result = callback(names[i]); // Function A (greet) is called and its input is from the array within Function B
    console.log("Result from callback:", result); // Logs the return value from Function A
  }
}

// Pass Function A into Function B
processUser(greet);
// Hello, Alice!
// Result from callback: Greeted Alice

// Hello, Bob!
// Result from callback: Greeted Bob

// Hello, Charlie!
// Result from callback: Greeted Charlie


// Part 4: Scopes and Variable Lifetime
// Theoretical Mastery

// Global object is the top-level execution environment in JS. Any variable dclared outside of a function or block is automatically added to the global object. 
// Risks of polluting the global object include naming collisions, accidental overwrites, and increased difficulty in debugging.

// var (Function-Scoped): Prior to ES6, var variables were limited only by functions. If a var was declared inside an if block or a for loop, it leaked out into the enclosing function or global scope.
// let and const (Block-Scoped): Introduced in ES6, these variables are strictly locked within the nearest pair of curly braces {}.

// Variable Shadowing occurs when a variable declared within a local scope (like a function or a block) shares the exact same name as a variable in an outer scope.
// The inner variable "shadows" the outer one, making the outer variable inaccessible within that local scope. This can lead to confusion and bugs if not managed carefully.


// SCOPE TRACING
// given the code
let a = 10;
function outer() {
    let b = 20;
    if (true) {
        let a = 30; // let allows a new variable 'a' to be declared in this block scope, shadowing the outer 'a'
        var c = 40; 
        console.log(a + b); // Line 1
    }
    console.log(a);         // Line 2, outer 'a' is still accessible here, so it logs 10
    console.log(c);         // Line 3, var is function-scoped, so 'c' is accessible here and logs 40
}
outer();


// Temporal Dead Zone (TDZ)
//Accessing let vs var prior to their declaration results in different behaviors.
// var: returns undefined -- The engine hoists the variable declaration and initializes it immediately with a value of undefined.
// let: throws a ReferenceError -- The engine hoists the variable declaration but does not initialize it, leaving it in a "temporal dead zone" until the line of code where it's defined is executed.


