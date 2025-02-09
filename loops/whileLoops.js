/***
1. task 1
"I will invest at least 6 hrs every single day for next 60 days!" this message 60 times. So display this.
 */

let i = 0;
while (i < 60) {
  // if i use increment here the log will stat from 1 and end in 60;
  //   console.log(
  //     `${i}. I will invest at least 6 hrs every single day for next 60 days!`
  //   );
  i++; // here you can see the result it star form 0 to 59. both arr 60times.
}

// Subtask-1:
// Find all the odd numbers from 61 to 100.
let num = 78;
while (num <= 100) {
  if (num % 2 !== 0) {
    // console.log(`${num} is a odd number.`);
  }
  num++;
}
while (num <= 100) {
  // console.log(num);
  num += 2;
}

/***
Subtask-2:
Find all the even numbers from 78 to 98.
 */
let n = 78;
while (n <= 98) {
  if (n % 2 === 0) {
    // console.log(`${n} is a even number.`);
  }
  n++;
}

/***
Subtask-1:
Display sum of all the odd numbers from 81 to 131.
 */
let x = 81;
let sum = 0;
while (x <= 131) {
  if (x % 2 !== 0) {
    sum += x;
  }
  x++;
}
// console.log(sum);
/***
Subtask-2:
Display sum of all the even numbers from 206 to 311.
 */
let y = 206;
let total = 0;
while (y <= 311) {
  if (y % 2 === 0) {
    total += y;
  }
  y++;
}
// console.log(total);

/***
As Ersa is learning now, she wants to explore more and more. Tell Ersa to generate a multiplication table for number 5
 */
let number = 1;
while (number <= 10) {
  console.log(`${number} * 5 :  ${number * 5}`);
  number++;
}

// this return all the multiplication table from 1 to 10;

let num2 = 1;
while (num2 <= 10) {
  let n = num2;
  while (n <= 10) {
    // console.log(`${num2} * ${n} : ${num2 * n}`);
    n++;
  }
  num2++;
}

/***
Implement a countdown timer that counts down from 21 to 15.
 */

let count = 21;
while (count >= 15) {
  // console.log(count);
  count--;
}
