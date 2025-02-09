//1. Find the minimum and maximun value from an array
const Input = [23, 12, 56, 78, 34, 99, 1];
const returnMinMax = (arr) => {
  const maxNum = Math.max(...arr);
  const minNum = Math.min(...arr);
  return `Max: ${maxNum}, Min ${minNum}`;
};
// console.log(returnMinMax(Input));

// 2. Count the number of vowels in a given string
const str = "JavaScript is fun";
let vowels = "aeiou";

// 3.Remove duplicates from an array
const numbers = [1, 2, 2, 3, 4, 4, 5];
const removeDublicates = (arr) => {
  return [...new Set(arr)];
};

// console.log(removeDublicates(numbers));

// 4. Find the sum of all numbers in an array
const doSum = (arr) => {
  return arr.reduce((acc, curr) => acc + curr);
};
// console.log(doSum(numbers));

// 5.Check if a string is a palindrome (same forward and backward)

const name = "madam";
const checkIspalindrome = (str) => {
  if (str === str.split("").reverse().join("")) {
    return `Yes ${str} is a palindrome `;
  } else {
    return `No ${str} is not a palindrome `;
  }
};
// console.log(checkIspalindrome(vowels));

//6. Capitalize the first letter of each word in a sentence

const greet = "hello world musfiqur rahman saikot";
const capitalize = (str) => {
  return str
    .split(" ")
    .map((word) => word[0].toUpperCase() + word.slice(1))
    .join(" ");
};
console.log(capitalize(greet));

// 7.Check if two strings are anagrams
// Input: ('listen', 'silent')
// Output: true

// 8. Find the second largest number in an array
// Input: [10, 20, 4, 45, 99]
// Output: 45

// 9 . Sort an array without using sort()
const num1 = [5, 1, 4, 2, 8];

function sorted(num) {}
// Output: [1, 2, 4, 5, 8]

// 10 . Count the number of vowels in a given string

const try2 = "tHIS is not a good idea!";
// Output: 5
const checkVowelCount = (str) => {
  let vowels = "aeiou";
  let vowelsCount = 0;
  for (let char of str.toLowerCase()) {
    if (vowels.includes(char)) {
      vowelsCount++;
    }
  }
  return vowelsCount;
};

// console.log(checkVowelCount(try2));
