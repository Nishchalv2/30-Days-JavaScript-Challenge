// Activity 1

function evenOrOdd(n) {
  return n % 2 === 0 ? "Even" : "False";
}

console.log(evenOrOdd(3));

function squareOfN(n) {
  return n ** 2;
}

console.log(squareOfN(5));

// Activity 2

function largestOf2(a, b) {
  return a > b ? "a is greater" : "b is graeter";
}

console.log(largestOf2(10, 20));

function concatenationOfString(str1, str2) {
  return str1 + str2;
}

console.log(concatenationOfString("Nishchal", " Verma"));

// Activity 3

const fun = (num1, num2) => {
  return num1 + num2;
};

console.log(fun(5, 10));

const validateString = (str, char) => {
  return str.includes(char);
};

console.log(validateString("Nishchal", "j"));

// Activity 4

const findProduct = (num1, num2 = 10) => {
  return num1 * num2;
};

console.log(findProduct(15));

const greetingMessage = (name, age = 18) => {
  return `Hi ${name}, Happy ${age}th birthday`;
};

console.log(greetingMessage("Anubhav"));

// Activity 5 - Higher order function

function fun1(fn, num) {
  for (let i = 0; i < num; i++) {
    fn();
  }
}

function sayHello() {
  console.log("Hi High Order Function");
}

fun1(sayHello, 5);
