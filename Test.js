let strObj = new String("Hello");

// console.log(strObj.valueOf()); // "Hello"

// ১-৫০ এর  মধ্যে  ৩ এবং ৫ দিয়ে  বিভাজ্য  সংখ্যা  গুলা  বের  করো

for (let i = 1; i <= 50; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    // console.log(i);
  }
}
var friends = [
  "rahim",
  "karim",
  "abdul",
  "sadsd",
  "heroAlom",
  "MusfiqurRahman",
];
// 1. উপরে এর  এরে  থেকে যেখানে  ৫ টা  ফ্রেন্ড  এর  নাম  এর  মধ্যে   বড়ো  নাম  কোন  ফ্রেন্ড  এর  খুঁজে  বের  করা.
let bigname = "";
for (let friend of friends) {
  if (friend.length > bigname.length) {
    bigname = friend;
  }
}
// console.log(bigname);

var numbers = [1, 2, 3, 3, 4, 4, 5, 6, 7, 8, 9, 10];
// 2. উপরের এইয়ারের ভেতর থেকে শুধু জোড় সংখ্যা গুলোকে নিয়ে আরেকটা এরে তৈরি করতে হবে.
const evenArr = [];
for (let num of numbers) {
  if (num % 2 === 0) {
    evenArr.push(num);
  }
}
// console.log(evenArr);

function init() {
  var name = "Mozilla"; // name is a local variable created by init
  function displayName() {
    // displayName() is the inner function, that forms a closure
    console.log(name); // use variable declared in the parent function
  }
  displayName();
}
init();

var name = "musfiqur";
// name[0] = "f";
name = "saikot";
console.log(name);

function printNumber(num) {
  let result = "";
  if (typeof num !== "number" || num <= 0) {
    return `Invalid input should be greater then 0`;
  }
  for (let i = 0; i <= num; i++) {
    result = result + i;
    if (i < num) {
      result += " ";
    }
  }
  return result;
}
console.log(printNumber(5));
