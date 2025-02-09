// 1. Write a loop that repeat form 1 to 200 and break the loop when you find 100.
// let num = 200;
// while (num > 0) {
//   //   console.log(num);
//   if (num === 100) {
//     break;
//   }
//   num--;
// }

// for (num; num > 0; num--) {
//   console.log(num);
//   if (num === 100) {
//     break;
//   }
// }

/* 
Write a while loop that adds numbers starting from 1, but stops (using break) as soon as the sum reaches or exceeds 100
*/

let result = 0;
let num = 1;
// while (num < 50) {
//   result += num;
//   if (result >= 100) {
//     break;
//   }
//   num++;
// }
// console.log(result);

/* 
Write a loop that goes from 1 to 100, but stops (using break) when it encounters the first square number (like 4, 9, 16, etc.)
*/
while (num < 100) {
  if (num > 1 && Math.sqrt(num) % 1 === 0) {
    console.log(`first square number is ${num}`);
    break;
  }
  console.log(num);
  num++;
}

// console.log(Math.sqrt(2));

// continue
/* 
Write a loop to print even numbers from 1 to 40. Use continue to skip odd numbers.
*/
for (let i = 1; i <= 40; i++) {
  if (i % 2 !== 0) {
    continue;
  }
  //   console.log(i);
}

/*
display odd number from 55 to 85 and skip the numbers divisible by 5.
*/
for (let i = 55; i <= 85; i++) {
  if (i % 2 === 0 || i % 5 === 0) {
    continue;
  }
  //   console.log(i);
}
