// Activity 1
function checkNumber(number) {
  if (number > 0) console.log("positive");
  else if (number < 0) console.log("negative");
  else console.log("zero");
}

checkNumber(12);
checkNumber(-12);
checkNumber(0);

// Activity 2

let a = 10;
let b = 20;
let c = 4;

if (a > b && a > c) {
  console.log("a is greater");
} else if (b > a && b > c) {
  console.log("b is greater");
} else {
  console.log("C is gretaer");
}

//Activity 3

function dayOfWeek(number) {
  switch (number) {
    case 1:
      console.log("Monday");
      break;
    case 2:
      console.log("Tuesday");
      break;
    case 3:
      console.log("Wednesday");
      break;
    case 4:
      console.log("Thursday");
      break;
    case 5:
      console.log("Friday");
      break;
    case 6:
      console.log("Saturday");
      break;
    case 7:
      console.log("Sunday");
      break;
    default:
      console.log("number should be between 1-7");
      break;
  }
}

dayOfWeek(3);
dayOfWeek(8);
dayOfWeek(7);

// Activity 4

let numb = 4;
console.log(numb % 2 == 0 ? "even" : "odd");

// Activity 5

function leapYearorNot(year) {
  if (year % 4 == 0) {
    if (year % 100 == 0 && year % 400) {
      console.log("Leap year");
    } else {
      console.log("Leap Year");
    }
  } else {
    console.log("Not a Leap year");
  }
}

leapYearorNot(300);
