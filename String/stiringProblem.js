// Count how many times a string has the letter a
// let str = "musfiqur rahman aaa";

// function countLeter(str, letter) {
//   let count = 0;
//   for (let char of str) {
//     if (char === letter) {
//       count += 1;
//     }
//   }
//   return count;
// }
// console.log(countLeter(str, "a"));

// Count how many times a string has the letter a or A.
let str = "sikaioute";

function countLeter(str, letter) {
  let count = 0;
  for (let char of str) {
    if (char.toLowerCase() === letter.toLowerCase()) {
      count += 1;
    }
  }
  return count;
}
// console.log(countLeter(str, "a"));

let vowels = "aeiov";
// If a given string has either x, replace x by y. if the given string has X, replace it by Y.
const replaceX = (s) => {
  return s.replace(/x/g, "y").replace(/X/g, "Y");
};
// console.log(replaceX(vowels));

// check a string contains all the vowels or not ?
const checkAllVowels = (string) => {
  const vowels = ["a", "e", "i", "o", "u"];
  return vowels.every((letter) => string.toLowerCase().includes(letter));
};
console.log(checkAllVowels("this"));
// console.log(checkAllVowels("musfiqur rahman saikot e"));

// create a program that makes all the first leter of the  words to uppercase in a string
const capitalize = (string) => {
  return string
    .split(" ")
    .map((word) => word[0].toUpperCase() + word.slice(1))
    .join(" ");
};
console.log(capitalize("this is good"));
