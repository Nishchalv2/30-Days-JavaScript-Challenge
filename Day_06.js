// Activity 1

// Task 1
let arr1 = [1, 2, 3, 4, 5];
console.log(arr1);

//Task 2
let arr2 = [10, 30, 43, 12, 34];
console.log(arr2[0], arr2[arr2.length - 1]);

// Activity 2

let arr3 = [10, 20, 30];

// Task 3
arr3.push(21);
console.log(arr3);

// Task 4
arr3.pop();
console.log(arr3);

// Task 5
arr3.shift();
console.log(arr3);

// Task 6
arr3.unshift(23);
console.log(arr3);

// Activity 3

let arr4 = [1, 2, 3, 4, 5];

console.log(arr4.map((num) => num * 2));

console.log(
  arr4.filter((num) => {
    return num % 2 == 0;
  })
);

console.log(arr4.reduce((acc, curr) => acc + curr, 0));

// Activity 4
let arr5 = [1, 2, 3, 4, 5];

for (let i = 0; i < 5; i++) {
  console.log(arr5[i]);
}

arr5.forEach(function (num) {
  console.log(num);
});

// Activty 5

let arr6 = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

console.log(arr6);

console.log(arr6[0][2]);
