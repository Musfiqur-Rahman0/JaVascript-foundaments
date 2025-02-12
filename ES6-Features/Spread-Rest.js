// Spread And Rest operators

// spread on objects
const Obj = {
  name: "Monster",
  age: 25,
  isStudent: true,
  profession: "developer",
};

const copiedObj = { ...Obj, isMarried: false, hasJob: false };
// console.log(Obj);
// console.log(copiedObj);

// spread on array
const arr = [1, 2, 3, 4];
const copiedArr = [...arr, 6, 7];

// console.log(copiedArr);

//rest operator
const sumAll = (...args) => {
  let total = 0;
  for (let i = 0; i < args.length; i++) {
    total += args[i];
  }
  return total;
};
// console.log(sumAll(1, 2, 3, 4, 5));

// Problems with rest and spread operators.

// 1. write a function that takes multiple input of numbers and returns an array containing only the even numbers
const filterEven = (...args) => {
  const even = [];
  for (let num of args) {
    if (num % 2 === 0) {
      even.push(num);
    }
  }
  return even;
};

// console.log(filterEven(1, 2, 3, 4, 5, 6)); // Output: [2, 4, 6]
// console.log(filterEven(10, 15, 20, 25)); // Output: [10, 20]
// console.log(filterEven(7, 9, 11)); // Output: []

//2. write a function that takes a lot of input as numbers and returns the maximun one only.
const findMax = (...numbers) => {
  let maxNum = Math.max(...numbers);
  return maxNum;
};
// console.log(findMax(3, 5, 1, 9, 6)); // Output: 9
// console.log(findMax(10, 20, 30)); // Output: 30
// console.log(findMax(-1, -5, -3)); // Output: -1

//3. Write a function that takes an array as input and returns a new array wihout the first element.
const removeFirst = (arr) => {
  const [first, ...more] = arr;
  return more;
};
// console.log(removeFirst([10, 20, 30, 40])); // Output: [20, 30, 40]
// console.log(removeFirst(["A", "B", "C"])); // Output: ["B", "C"]
// console.log(removeFirst([100])); // Output: []

// 4.Create a function mergeArrays that takes multiple arrays as arguments and merges them into a single array.
const mergeArrays = (...arrays) => {
  // console.log(arrays);
  let marge = [];
  for (let arr of arrays) {
    marge.push(...arr);
  }
  return marge;
};

// console.log(mergeArrays([1, 2], [3, 4], [5, 6])); // Output: [1, 2, 3, 4, 5,6]
// console.log(mergeArrays(["A", "B"], ["C", "D"])); // Output: ["A", "B", "C","D"]
// console.log(mergeArrays([100])); // Output: [100]

// 5;
const user = { name: "Alice", age: 25, password: "secret" };

const removeProperty = (obj, key) => {
  const { [key]: _, ...details } = obj; // when i have the property name as a function argument and if i want to destruct that property form that objects i have to use [arg_name] to destract that beacuse you can't delare two variables with the same name. And this is the way to do it.
  return details;
};
// [key] by doing this we can extral a object key .

// console.log(removeProperty(user, "password"));
// console.log(removeProperty(user, "password"));
// // Output: { name: "Alice", age: 25 }

// console.log(removeProperty(user, "age"));
// Output: { name: "Alice", password: "secret" }

// 7.Write a function that check how many times a number has been repeated in a string.
const countWords = (str) => {
  let obj = {};
  let strArr = str.toLowerCase().split(" ");
  for (let word of strArr) {
    obj[word] = (obj[word] || 0) + 1;
  }

  return obj;
};

// obj[variable] = value by this i can pass properties and values to the objects
console.log(countWords("hello world hello"));
// Output: { hello: 2, world: 1 }

console.log(countWords("apple banana apple orange banana apple"));
// Output: { apple: 3, banana: 2, orange: 1 }

// 8. Create a function multiplyBy that takes a multiplier as the first argument and multiple numbers afterward, then returns a new array with each number multiplied.
const multiplyBy = (multiplier, ...nums) => {
  const result = [];
  for (let num of nums) {
    result.push(multiplier * num);
  }
  return result;
};

// console.log(multiplyBy(2, 1, 2, 3, 4)); // Output: [2, 4, 6, 8]
// console.log(multiplyBy(3, 5, 10, 15)); // Output: [15, 30, 45]

// 10.Write a function getUserDetails that takes an object and extracts name, email, and city, while keeping the rest of the properties.
const userInfo = {
  id: 101,
  name: "Bob",
  email: "bob@email.com",
  age: 28,
  address: { city: "New York", zip: "10001" },
};

const getUserDetails = (user) => {
  const { name, address, email, ...rest } = user;
  const { city, zip } = address;
  const result = { name, email, city, rest: { ...rest, address: { zip } } };
  return result;
};

// console.log(getUserDetails(userInfo));
// Output: { name: "Bob", email: "bob@email.com", city: "New York", rest: { id: 101, age: 28, address: { zip: "10001" } } }

//9. Write a function separateNumbers that takes multiple numbers and returns an object with separate arrays for even and odd numbers.
const separateNumbers = (...numbers) => {
  let even = [];
  let odd = [];
  for (let num of numbers) {
    if (num % 2 === 0) {
      even.push(num);
    } else {
      odd.push(num);
    }
  }
  const result = { even: [...even], odd: [...odd] };
  return result;
};
// console.log(separateNumbers(1, 2, 3, 4, 5, 6));
// Output: { even: [2, 4, 6], odd: [1, 3, 5] }

// console.log(separateNumbers(10, 21, 32, 43, 54));
// Output: { even: [10, 32, 54], odd: [21, 43] }

let arr2 = [1, 2, 3, 4, 5];

// console.log(newArr);
