//1. Take four parameters. Multiply the four numbers and then return the result
function Multiply(a, b, c, d) {
  const result = a * b * c * d;
  return result;
}
// console.log(Multiply(1, 2, 3, 4));

// 2. Take a number if the number is odd multiply it by 2 and return the result. If the number is even divide it by two and return the result.

function OddOrEven(num) {
  if (num % 2 === 1) {
    return num * 2;
  } else {
    return num / 2;
  }
}
// console.log(OddOrEven(4));
// console.log(OddOrEven(12));
// console.log(OddOrEven(7));

//3. Write a function called make_avg() which will take an array of integers and the size of that array and return the average of those values.

function make_avg(arr, size) {
  let total = 0;
  for (let num of arr) {
    total += num;
  }
  const avg = total / size;
  return avg;
}
let nums = [1, 3, 2, 4, 5];
// console.log(make_avg(nums, nums.length));

// 4.Write a function called count_zero() which will take a binary string (Binary string is a string which is consist of only 0 and 1) as parameter and count how many 0’s are there in that string.

function count_zero(str) {
  console.log(str);
  let count = 0;
  for (let char of str) {
    if (char == 0) {
      count++;
    }
  }
  return count;
}
// console.log(count_zero("010100010"));

// 5. Write a function called odd_even() which takes an integer value and tells whether this value is even or odd. If even return Even. If odd return Odd

const odd_even = (number) => (number % 2 === 0 ? "Even" : "Odd");
const result = odd_even(6);
// console.log(result);

const number = [1, 3, 4, 3, 5];
const checkRepetation = (numbs) => {
  let count = {};
  for (let num of numbs) {
    count[num] = (count[num] || 0) + 1;
  }
  return count;
};
// console.log(checkRepetation(number));

const checkNum = (numbs, target) => {
  let count = 0;
  for (let num of numbs) {
    if (num === target) {
      count++;
    }
  }
  return count;
};

// console.log(checkNum(number, 3));

// find the lowest number in the array bellow.
const heights2 = [167, 190, 120, 165, 137];
// function findLowestNum(numbers) {
//   let lowest = numbers[0];
//   for (let num of numbers) {
//     if (num < lowest) {
//       lowest = num;
//     }
//   }
//   return lowest;
// }

const findLowestNum = (numbers) => {
  return Math.min(...numbers);
};

// console.log(findLowestNum(heights2));

// Find the friend with the smallest name.
const friends = ["rahim", "robin", "rafi", "ron", "rashed"];
// const findSmall = (friends) => {
//   let small = friends[0];
//   for (let friend of friends) {
//     if (friend.length < small.length) {
//       small = friend;
//     }
//   }
//   return small;
// };

const findSmall = (friends) => {};
const smallfriend = findSmall(friends);
// console.log(smallfriend);
// Your task is to calculate the total budget required to buy electronics:

let laptop = 35000;
let tablet = 15000;
let mobile = 20000;
// Write a JavaScript function named calculateElectronicsBudget that takes in the number of laptop, tablets, and mobile and returns the total money required.
const TotalFee = (lap, tab, mob) => {
  return lap + tab + mob;
};
// console.log(TotalFee(laptop, tablet, mobile));

// You are given an array of phone objects, each containing information about the model, brand, and price. Your task is to write a JavaScript function named findAveragePhonePrice that takes this array as input and returns the average price of phone.
const phones = [
  { model: "PhoneA", brand: "Iphone", price: 95000 },
  { model: "PhoneB", brand: "Samsung", price: 40000 },
  { model: "PhoneC", brand: "Oppo", price: 26000 },
  { model: "PhoneD", brand: "Nokia", price: 35000 },
  { model: "PhoneE", brand: "Iphone", price: 105000 },
  { model: "PhoneF", brand: "HTC", price: 48000 },
];
const findAveragePhonePrice = (phones) => {
  let total = 0;
  for (let phone of phones) {
    total += phone.price;
  }
  let length = phones.length;
  const avg = total / length;
  return `Avarage price of all ${length} phone is ${avg.toFixed(2)}`;
};
// console.log(findAveragePhonePrice(phones));

// For each employee their current salary is calculated by multiplying yearly increment with experience then adding the result to the starting salary. Now calculate is the total salary has to be provided by the company in a month.
const employees = [
  { name: "shahin", experience: 5, starting: 20000, increment: 5000 },
  { name: "shihab", experience: 3, starting: 15000, increment: 7000 },
  { name: "shikot", experience: 9, starting: 30000, increment: 1000 },
  { name: "shohel", experience: 0, starting: 29000, increment: 4000 },
];

const nextYearSalary = (employees) => {
  let totalSalary = 0;
  for (let employee of employees) {
    const { experience, starting, increment } = employee;
    totalSalary += experience * increment + starting;
  }
  return totalSalary;
};
const totalTobePaid = nextYearSalary(employees);
console.log(totalTobePaid);
