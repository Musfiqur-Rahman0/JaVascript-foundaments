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

// takes a string with symbol and do sum of the all numbers in it witout the symbol
let str2 = "$469";

const char = str2.split("");
// console.log(char);
let result = 0;
for (let i = 0; i < char.length; i++) {
  const num = Number(char[i]);
  if (num) {
    result += num;
  }
}

// console.log(result);

let str3 = "lightweight and durable backpack";
// output = backpack durable and lightweight;
const reverseStingWords = (string) => {
  return string.split(" ").reverse().join(" ");
};

// console.log(reverseStingWords(str3));
let words = str3.split(" ");
// console.log(words);
let reverseStr = "";
for (let word of words) {
  reverseStr = word + " " + reverseStr;
}
// console.log(reverseStr);
// let wordsreversed = "";
// for (let i = stringArr.length - 1; i >= 0; i--) {
//   // console.log(stringArr[i]);
//   wordsreversed = wordsreversed + stringArr[i];
//   if (i > 0) {
//     wordsreversed += " ";
//   }
// }
// console.log(wordsreversed);

//1. Write a JavaScript code to reverse the array colors without using the reverse method.
const colors = ["red", "blue", "green", "yellow", "orange"];
let reversed = [];
for (let i = colors.length - 1; i > 0; i--) {
  // reversed.push(colors[i]);
}
// console.log(reversed);
for (let color of colors) {
  // reversed.unshift(color);
}
// console.log(reversed);

// 2.Write a JavaScript code to get the even numbers from an array using any looping technique.
const numb = [12, 98, 5, 41, 23, 78, 46];
const evenArr = [];
for (let num of numb) {
  if (num % 2 === 0) {
    evenArr.push(num);
  }
}
// console.log(evenArr);

// Use a for...of loop to concatenate all the elements of an array into a single string.

const names = ["Tom", "Tim", "Tin", "Tik"];
// console.log(names.join(""));

// Reverse the words of a sentence. Only the position of the word will be reversed. check out the output
const statement = "I am a hard working person";
const reversedStrWords = (str) => {
  const splited = str.split(" ");
  const reversed = [];
  for (let i = splited.length - 1; i >= 0; i--) {
    reversed.push(splited[i]);
  }
  return reversed.join(" ");
};
console.log(reversedStrWords(statement));
