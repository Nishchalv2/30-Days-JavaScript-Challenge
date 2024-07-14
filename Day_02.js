// Activity 1

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

console.log(add(20, 10));
console.log(subtract(20, 10));
console.log(multiply(20, 10));
console.log(divide(20, 10));

// Activity 2

let num = 10;
let num1 = (num += 1);
console.log(num1);
let num2 = (num -= 1);
console.log(num2);

// Activity 3

let a = 11;
let b = 12;

console.log(a > b ? "true" : "false");
console.log(a < b ? "true" : "false");
console.log(a === b ? "true" : "false");

// Activity 4

let c = 11;
let d = 20;

console.log(c < d && c === d ? "true" : "false");
console.log(c < d || c === d ? "true" : "false");
console.log(!(c < d || c === d) ? "true" : "false");
