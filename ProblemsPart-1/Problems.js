// 1. Write a function to convert temperature from Celsius to Fahrenheit.
const celsius2Fahrenheit = (celcius) => {
  const fahrenheit = celcius * (9 / 5) + 32;

  return fahrenheit;
};
// console.log(celsius2Fahrenheit(10));

// You are given an array of numbers. Count how many times the a number is repeated in the array.
const numbers = [5, 6, 11, 12, 98, 5];
// console.log(numbers.includes(5));
const CountRepetation = (arr) => {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (numbers.includes(arr[i])) {
      count++;
    }
  }

  return count;
};
console.log(CountRepetation(numbers));

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
