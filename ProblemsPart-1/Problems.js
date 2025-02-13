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
      second = largest;
      largest = num;
    } else if (num > second && num !== largest) {
      second = num;
    }
  }
  // console.log(second);

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

console.log(isAnagram("listen", "silent")); // Output: true
console.log(isAnagram("hello ", "world ")); // Output: false
