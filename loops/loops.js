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
const primeNum = (num) => {};

let num = 50;
for (let i = 1; i < 50; i++) {
  if (i > 1 && i % 1 < 0 && i % i < 1) {
    console.log(i);
  }
}
