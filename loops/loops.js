const doSum = (num1, num2) => {
  let result = 0;
  if (typeof num1 && typeof num2 === "number") {
    if (num1 < num2) {
      for (num1; num1 <= num2; num1++) {
        result += num1;
      }
    } else {
      return `First number should be smaller then the 2nd Number to get the sum of the number`;
    }
  } else {
    return `Enter a valid number please to do the sum `;
  }
  return result;
};

// this function return the sum of numbers staring from num1 to num2
// console.log(doSum("stsfsdf", 40));

let test = 10;
// console.log(typeof test);

// let num = 10;
// for (num; num >= 0; num--) {
//   console.log(num);
//   continue;
// }

// Write a program that prints all prime numbers between 1 and 50 using a loop.
const primeNum = (num) => {
  if (num < 2) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

let prime = [];
for (let i = 2; i <= 50; i++) {
  if (primeNum(i)) {
    prime.push(i);
  }
}

// console.log(Math.sqrt(49));

const isPrime = (n) => {
  if (n < 2) {
    return false;
  }
  for (let i = 2; i <= n - 1; i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
};

const test2 = [];
for (let i = 1; i <= 50; i++) {
  if (isPrime(i)) {
    test2.push(i);
  }
}
console.log(test2);

// console.log(Math.sqrt(7));

// generate random passwords with mutiple letter symbol number etc.
