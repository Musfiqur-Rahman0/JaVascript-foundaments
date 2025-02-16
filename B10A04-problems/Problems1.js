// Help rohim to calculate his tax.
function calculateTax(income, expense) {
  //   console.log(income < 0 && expense <= 0);
  if (
    income <= 0 ||
    expense <= 0 ||
    expense > income ||
    typeof income !== "number" ||
    typeof expense !== "number"
  ) {
    return `Invalid Input`;
  }
  const diff = income - expense;
  const tax = diff * (20 / 100);
  return tax;
}

const income = 7000;
const expense = 7000;
// console.log(calculateTax(income, expense));

//Create a email notification with a string input.
const createNotification = (gmailName) => {
  if (typeof gmailName !== "string" || !gmailName.includes("@")) {
    return `Invalid gmail.`;
  }
  const fullName = gmailName.split("@");
  const userName = fullName[0];
  const domainName = fullName[1];
  const massage = `${userName} sent you an email from ${domainName}`;
  return massage;
};
// console.log(createNotification("musfiqurrahma@gmail.com"));

function checkDigit(str) {
  if (typeof str !== "string") {
    return `Invalid Input`;
  }
  for (let char of str) {
    if (Number(char)) {
      return true;
    }
  }
  return false;
}
// console.log(checkDigit("1musfiqur1"));

// console.log(Number("str"));

// problem04 calclate admission final score.
const admissionFinalScore = (obj) => {
  //   console.log(typeof obj);
  if (typeof obj !== "object") {
    return `Invalid Input`;
  }
  const { testScore, schoolGrade, isFFamilly } = obj;
  const quotaScore = isFFamilly ? 20 : 0;
  if (testScore > 50 || schoolGrade > 30) {
    return `Test score should be less then 51, and school grade should be less then 31`;
  }
  const totalScore = testScore + schoolGrade + quotaScore;
  return totalScore >= 80 ? true : false;
};

let obj = {
  name: "musfiqur",
  testScore: 45,
  schoolGrade: 35,
  isFFamilly: true,
};
// console.log(admissionFinalScore(obj));

// 2️⃣ Find the Second Smallest and Second Largest Number in an Array.
// Input: [12, 35, 1, 10, 34, 1]
// Output: { secondSmallest: 10, secondLargest: 34 }

const arr = [12, 35, 1, 10, 34, 1];

function find2ndLargeSmall(numbers) {
  const output = {};
  let largest = numbers[0];
  let secondLargest = 0;
  let smallest = numbers[0];
  let secondSmallest = 0;
  for (let num of numbers) {
    if (num > largest) {
      // secondLargest = largest;
      // largest = num;
      [secondLargest, largest] = [largest, num];
    } else if (num > secondLargest && num !== largest) {
      secondLargest = num;
    } else if (num < smallest) {
      secondSmallest = smallest;
      smallest = num;
    } else if (num > secondLargest && num !== smallest) {
      secondLargest = num;
    }
  }
  output.secondLargest = secondLargest;
  output.secondSmallest = secondSmallest;
  return output;
}
console.log(find2ndLargeSmall(arr));

// 5️. Find the Most Repeated Word in a Sentence
// 🔹 Problem: Given a sentence, find the word that appears the most.
const sentence = "apple banana apple orange banana apple";
function findREp(str) {
  const words = str.split(" ");
  const occurance = {};
  let maxCount = 0;
  let maxWord = "";
  for (let word of words) {
    occurance[word] = (occurance[word] || 0) + 1;
    if (occurance[word] > maxCount) {
      maxCount = occurance[word];
      maxWord = word;
    }
  }
  return maxWord;
}
console.log(findREp(sentence));
