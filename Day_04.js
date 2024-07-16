// Acttivity 1

function printTillN(n) {
  for (let i = 1; i <= n; i++) {
    console.log(i);
  }
}

printTillN(10);

function table(n) {
  for (let i = 1; i <= 10; i++) {
    console.log(n, " * ", i, " = ", i * n);
  }
}
table(5);

// Activity 2

function sumOfN(n) {
  let i = 1;
  let sum = 0;
  while (i <= n) {
    sum += i;
    i++;
  }
  console.log(sum);
}

sumOfN(10);

function printNTo1(n) {
  while (n >= 1) {
    console.log(n);
    n--;
  }
}

printNTo1(10);

// Actiivity 3
function printPattern(n) {
  for (let i = 1; i <= n; i++) {
    let result = "";
    for (let j = 1; j <= i; j++) {
      result += "* ";
    }
    console.log(result);
  }
}

printPattern(5);

// Activity 5

for (let i = 1; i <= 10; i++) {
  if (i === 5) continue;
  else console.log(i);
}

for (let i = 1; i <= 10; i++) {
  if (i === 7) break;
  else console.log(i);
}
