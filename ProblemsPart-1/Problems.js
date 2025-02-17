// 1. Write a function to convert temperature from Celsius to Fahrenheit.
const celsius2Fahrenheit = (celcius) => {
  const fahrenheit = celcius * (9 / 5) + 32;

  return fahrenheit;
};
// console.log(celsius2Fahrenheit(10));

// You are given an array of numbers. Count how many times the a number is repeated in the array.
const numbers = [5, 6, 11, 12, 98, 5];
// console.log(numbers);
const CountRepetation = (arr) => {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (numbers.includes(arr[i])) {
      // count++;
    }
  }

  return count;
};
// console.log(CountRepetation(numbers));

// generate random number between 10 to 20;
const genarateRandomNum = (num1, num2) => {
  const min = num1;
  const max = num2;
  const randomNum = Math.floor(Math.random() * (max - min) + min);
  return randomNum;
};
// console.log(genarateRandomNum(10, 20));

// Write a function to find the longest word in a given string.
const str = "I am learning Programming to become a programmer .";
const getLongestWord = (str) => {
  const splited = str.split(" ");
  const lengthArr = [];
  for (let i = 0; i < splited.length; i++) {
    lengthArr.push(splited[i].length);
  }
  const highestLength = Math.max(...lengthArr);
  let longesWord = "";
  for (let n = 0; n < splited.length; n++) {
    if (highestLength === splited[n].length) {
      longesWord += splited[n];
    }
  }
  return longesWord;
};
// console.log(getLongestWord(str));

let longest = "";
let words = str.split(" ");

for (let word of words) {
  if (word.length > longest.length) {
    longest = word;
  }
}
// console.log(longest);

const countVowels = (str) => {
  const vowels = "aeiou";
  let count = 0;
  let statement = str.toLowerCase();

  for (let i = 0; i < statement.length; i++) {
    if (vowels.includes(statement[i])) {
      count++;
    }
  }
  return count;
};
// console.log(countVowels(str));

// basic problem from gpt.
// Count each word occurance in a string.
function charCount(str) {
  // My code
  let CountChar = {};
  for (let char of str) {
    // console.log(char);
    CountChar[char] = (CountChar[char] || 0) + 1;
  }
  return CountChar;
}

// console.log(charCount("hello"));
// Output: { h: 1, e: 1, l: 2, o: 1 }

// Find the 2nd largest number in the array.
function secondLargest(arr) {
  // Your code here
  if (arr.length < 2) {
    return `Not have enough element.`;
  }
  let largest = arr[0];
  let second = 0;
  // console.log(largest);
  for (let num of arr) {
    if (num > largest) {
      // second = largest;
      // largest = num;
      [second, largest] = [largest, num];
    } else if (num > second && num !== largest) {
      second = num;
    }
  }
  return second;
}

// console.log(secondLargest([10, 5, 8, 20, 15])); // Output: 15
// console.log(secondLargest([1, 2, 3, 4, 5])); // Output: 4

//marge two array into one
function mergeSortedArrays(arr1, arr2) {
  // Your code here
  const result = arr1.concat(arr2);
  // console.log(typeof result);
  return result;
}

// console.log(mergeSortedArrays([1, 3, 5], [2, 4, 6])); // Output: [1, 2, 3, 4, 5, 6]
// console.log(mergeSortedArrays([10, 20], [5, 15, 25])); // Output: [5, 10, 15, 20, 25]

// Find intersections with two arrays
function findIntersection(arr1, arr2) {
  // Your code here
  let result = [];
  for (let num of arr1) {
    if (arr2.includes(num)) {
      result.push(num);
    }
  }
  return result;
}

// console.log(findIntersection([1, 2, 3, 4], [3, 4, 5, 6])); // Output: [3, 4]
// console.log(findIntersection([7, 8, 9], [10, 11, 12])); // Output: []

// Find the longest word in a sentence
function longestWord(sentence) {
  // Your code here
  let longest = "";
  let words = sentence.split(" ");
  for (let word of words) {
    if (word.length > longest.length) {
      longest = word;
    }
  }
  return longest;
}

// console.log(longestWord("JavaScript is a powerful language")); // Output: "JavaScript"
// console.log(longestWord("I love programming")); // Output: "programming"

// Capitalize first letter of each word.
function capitalizeWords(str) {
  // Your code here
  let words = str.split(" ");
  //   .map((word) => word[0].toUpperCase() + word.slice(1))
  //   .join(" ");
  let result = "";
  for (let word of words) {
    result += word[0].toUpperCase() + word.slice(1) + " ";
  }
  console.log(result.length);
  return result;
}

// console.log(capitalizeWords("hello world")); // Output: "Hello World"
// console.log(capitalizeWords("javascript is fun")); // Output: "JavaScript Is Fun"

// Find the missing number
function findMissingNumber(arr, n) {
  // Your code here
  let misingNum = 0;
  for (let i = 0; i <= n; i++) {
    if (!arr.includes(i)) {
      misingNum = i;
    }
  }
  return misingNum;
}

// console.log(findMissingNumber([1, 2, 4, 5, 6], 6)); // Output: 3
// console.log(findMissingNumber([3, 7, 1, 2, 8, 4, 5], 8)); // Output: 6

//  generate a random password.
function generatePassword(length) {
  // Your code here
  let lowercase = "abcdefghijklmnopqrstuvwxyz";
  let uppercase = lowercase.toUpperCase();
  let symbol = "!@#$%^&*,";
  let all = lowercase + uppercase + symbol;
  let password = "";
  for (let i = 0; i <= length; i++) {
    const randomIndex = Math.floor(Math.random() * all.length);
    password += all[randomIndex];
  }
  return password;
}

// console.log(generatePassword(8)); // Example Output: "aB3#xT9!"
// console.log(generatePassword(12)); // Example Output: "x$y9Z&1Qw4T!"

// check that if a objects has empty or not
function isEmptyObject(obj) {
  // Your code here
  // console.log(Object.keys(obj).length === 0);
  if (Object.keys(obj).length === 0) {
    return true;
  }
  return false;
}

// console.log(isEmptyObject({})); // Output: true
// console.log(isEmptyObject({ key: "value" })); // Output: false

// check if two string are anagrom or not ?
function isAnagram(str1, str2) {
  // Your code here
  str1 = str1.trim().toLowerCase();
  str2 = str2.trim().toLowerCase();
  // console.log(str1.length);
  return str1.split("").sort().join("") === str2.split("").sort().join("");
}

// console.log(isAnagram("listen", "silent")); // Output: true
// console.log(isAnagram("hello ", "world ")); // Output: false

// video practise.
const mileToKilo = (mile) => {
  const result = mile * 1.609344;
  return `${mile} mile is ${result.toFixed(2)} kilometers`;
};
// console.log(mileToKilo(10));

// check leap year
const isLeapYear = (year) => {
  let massage = `${year} is a leap year.`;
  if (year % 4 === 0 && year % 100 !== 0) {
    return massage;
  } else if (year % 100 === 0 && year % 400 === 0) {
    return massage;
  }
  return `${year} is not a leap year!`;
};
// console.log(isLeapYear(1900));

// return the avg of the even number
const evenAvg = (numbers) => {
  let even = [];
  let total = 0;
  for (let num of numbers) {
    if (num % 2 === 0) {
      even.push(num);
      total += num;
    }
  }
  const length = even.length;
  let avg = total / length;
  return avg;
};

// console.log(evenAvg([1, 3, 5, 4, 2, 6]));

// Remove dublicates from an array
function removeDublicates(arr) {
  let uniqueArr = [];
  // console.log(arr);
  for (let items of arr) {
    if (!uniqueArr.includes(items)) {
      uniqueArr.push(items);
    }
  }
  return uniqueArr;
}
// console.log(removeDublicates([1, 1, 3, 4, 2, 3]));

// let x = 5;
// let y = "name";
// console.log(x, y);
// [x, y] = [y, x];
// console.log(typeof x);
// console.log(x, y);

// console.log(Math.pow(2, 3));
for (var i = 0; i < 5; i++) {
  setTimeout(function () {
    // console.log(i);
  }, 100);
}

// find the number how many times it is repeted in a array.

const numbers2 = [5, 6, 11, 12, 98, 5];
const checkRep = (numbers, target) => {
  let result = 0;
  for (let num of numbers) {
    if (num === target) {
      result++;
    }
  }
  return result;
};
const repitation = checkRep(numbers2, 25);
// console.log(repitation);

// count the number of vowels in a string .
const countVowels2 = (str) => {
  let vowels = "aeiou";
  let count = 0;
  for (let char of str) {
    if (vowels.includes(char)) {
      count++;
    }
  }
  return count;
};
// console.log(countVowels("this is a good practise"));

let max = 100;
let min = 10;
const random = Math.floor(Math.random() * (max - min + 1)) + min;
// console.log(random);

// check a number is a prime number or not.
const isPrime = (number) => {
  if (number < 2) {
    return `${number} isn't a prime number.`;
  }

  let factor = [];
  for (let i = 1; i <= number; i++) {
    if (number % i === 0) {
      factor.push(i);
    }
  }
  if (factor.length === 2) {
    return `${number} is a prime number.`;
  }
  return `${number} is not a prime number.`;
};

// const check = isPrime(1000001);
// console.log(check);

// Find the factorial of a number
const factorial = (num) => {
  let output = 1;
  for (let i = 2; i <= num; i++) {
    output *= i;
  }
  return output;
};
// factorial(4);

// check if a number is plaindorem or not
const checkPlaidrome = (num) => {
  return num.toString().split("").reverse().join("") === num.toString();
};
// console.log(checkPlaidrome(515));

// Problems to solve.
// Find the Greatest Common Divisor (GCD) of two numbers
// 📌 Input: 12, 18 → Output: 6

// Find the Least Common Multiple (LCM) of two numbers
// 📌 Input: 4, 6 → Output: 12;

// Generate the Fibonacci sequence up to n terms
// 📌 Input: 5 → Output: [0, 1, 1, 2, 3]

// string based problems.
// Find the most frequent character in a string
const findCommon = (str) => {
  let test = {};
  let maxCount = 0;
  let maxChar = "";
  for (let char of str) {
    test[char] = (test[char] || 0) + 1;
    if (test[char] > maxCount) {
      maxChar = char;
      maxCount = test[char];
    }
  }
  return `${maxChar} is in the ${typeof str} ${maxCount}times`;
};
// console.log(findCommon("banana"));

// Find the first non-repeating character in a string.
const find1stNonRepeatingChar = (str) => {
  let obj = {};
  let firstUnickChar = "";
  for (let char of str) {
    obj[char] = (obj[char] || 0) + 1;
  }
  for (const key in obj) {
    if (obj[key] === 1) {
      firstUnickChar = key;
      break;
    }
  }

  return firstUnickChar;
};
// console.log(find1stNonRepeatingChar("swiss"));

// Remove duplicate characters from a string
const removeDublicates2 = (str) => {
  let uniqueArr = [];
  const arr = str.split("");
  for (let items of arr) {
    if (!uniqueArr.includes(items)) {
      uniqueArr.push(items);
    }
  }
  return uniqueArr.join("");
};
// console.log(removeDublicates2("banana"));
const findMinMax = (arr) => {
  const max = Math.max(...arr);
  const min = Math.min(...arr);
  return `max: ${max} min: ${min}`;
};
const result = findMinMax([1, 2, 4, 2, 65, 22]);
// console.log(result);

// check if a triangle is valid or not.
const checkTriangle = (a, b, c) => {
  const tester = a + b + c === 180;
  if (tester) {
    return `It is a valid triangle.`;
  }
  return `It is not a valid triangle.`;
};
// console.log(checkTriangle(60, 90, 60));

// find the missing number form an array.
// Problem: Given an array of numbers from 1 to n, but one number is missing, find the missing number.
const missingNum = (arr) => {
  let total = 0;
  let expectedSum = (6 * (6 + 1)) / 2;
  for (let num of arr) {
    total += num;
  }
  const distance = expectedSum - total;
  return distance;
};
// console.log(missingNum([1, 3, 4, 5, 6]));

// Problem: Given an array and a target number, find all pairs that add up to the target.

const findPair = (numbers, target) => {
  const result = [];
  for (let num = 0; num < numbers.length; num++) {
    for (let n = num + 1; n < numbers.length; n++) {
      if (numbers[num] + numbers[n] === target) {
        let pairs = [numbers[num], numbers[n]];

        result.push(pairs);
      }
    }
  }
  return result;
};
// console.log(findPair([1, 3, 5, 4, 6, 7], 10));
// const arr = [1, 2, 3];
// arr.push(4, 6);
// console.log(arr);

//🔹 Problem: Given an array, move all zeros to the end while maintaining the order of non-zero elements.
// Input: ;
// Output: [1, 3, 12, 0, 0];
const addZeroLast = (numbers) => {
  let result = [];
  for (let num of numbers) {
    if (num !== 0) {
      result.push(num);
    }
  }
  for (let num of numbers) {
    if (num === 0) {
      result.push(num);
    }
  }
  return result;
};
// console.log(addZeroLast([0, 1, 0, 3, 12]));

const moveZerosToEnd = (arr) => {
  let index = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== 0) {
      [arr[i], arr[index]] = [arr[index], arr[i]];
      index++;
    }
  }
  return arr;
};

// Test Case
console.log(moveZerosToEnd([0, 1, 0, 3, 12])); // Output: [1, 3, 12, 0, 0]
// console.log(moveZerosToEnd([0, 0, 1, 2, 0, 4, 5])); // Output: [1, 2, 4, 5, 0, 0, 0]
