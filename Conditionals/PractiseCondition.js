/***

1. Free Drinks
    - Burger more than 500tk: free Coke
    - Else Coke: 30tk
*/

// solution
let Brougth_Burger = 550;
if (Brougth_Burger > 500) {
  //   console.log("You reviced your burger and a free coke.");
} else {
  //   console.log("you did't revive a free coke");
}

/*** 

BMI Calculator and Health Category

Create a JavaScript program that calculates the Body Mass Index (BMI) and assigns a health category based on the BMI value. Use nested if-else statements to determine the health category.

    - Calculate BMI using the formula: BMI = weight (kg) / (height (m))^2
    - BMI < 18.5, you are underweight.
    - BMI >= 18.5 and BMI <=24.9, you are normal.
    - BMI >=25 and BMI <= 29.9, you are overweight.
    - Otherwise, you are obese.

*/

const height = 1.65;
const weight = 60;

const BMI = weight / height ** 2;

if (BMI) {
  if (BMI < 18.5) {
    console.log("You are underwight!");
  } else if (BMI >= 18.5 && BMI <= 24.9) {
    console.log("You are normal");
  } else if (BMI >= 25 && BMI <= 29.9) {
    console.log("You are overweight");
  } else {
    console.log("You are obese");
  }
}

/***

Grade Calculator

Create a simple JavaScript program that takes a student's score as input and returns their corresponding grade based on the following grading scale:

    A: 90-100
    B: 80-89
    C: 70-79
    D: 60-69
    F: 0-59

***/

const score = 91;

let grade;
if (score >= 90 && score <= 100) {
  grade = "A";
} else if (score >= 80 && score <= 89) {
  grade = "B";
} else if (score >= 70 && score <= 79) {
  grade = "C";
} else if (score >= 60 && score <= 69) {
  grade = "D";
} else {
  grade = "F";
}

// console.log(grade);

/***

if you get more then 80 then inside your friend score. 
    If your friend get more than 80. then go for a lunch. 
    if your friend get below 80 but greater than or equal 60 then tell your friend, good luck next time. 
    if your friend get less than 60 but more than or equal to 40 then, keep your friend's message unseen.
    if your friend get less than 40, block your friend
if you get less than 80 go to home and sleep and act sad

Note: 
use nested if-else-if-else
*/
let myScore = 49;
let friendScore = 61;
let isSeen = false;
let isBlock = false;
if (myScore > 80) {
  if (friendScore > 80) {
    // console.log("let's go for lunch");
  } else if (friendScore >= 60 && friendScore <= 80) {
    // console.log("Wish you a better luck next time.");
  } else if (friendScore >= 40 && friendScore <= 60) {
    isSeen;
  } else {
    isBlock = true;
  }
} else {
  // console.log("Act as sad ");
}

/***

you have two numbers in two variables, called: num1, num2

now declare a variable called result. 
if num1 is bigger than num2 then result will be double of num1. if not, then the value of the variable result will be the sum of num1 and num2.

write a simple if-else. 

also, write it using ternary operator.

 */

const num1 = 22;
const num2 = 15;
let result;
if (num1 > num2) {
  result = num1 * 2;
} else {
  result = num1 + num2;
}
// console.log(result);

/***

Ticket fare Calculator
    - Children (age < 10): free
    - Students get a 50% discount
    - Senior citizens (age >= 60) gets a 15% Discount
    - Otherwise Regular ticket fare 800 tk
*/

const age = 35;
let ticketPrice = 800;
let isStudent = true;
let isSenior = false;
let entry;

if (age < 10) {
  entry = "free";
} else if (age >= 60) {
  isStudent = false;
  isSenior = true;
  ticketPrice = ticketPrice - ticketPrice * (15 / 100); //15% discount
} else if (age >= 30 && age <= 59) {
  isStudent = false;
  ticketPrice;
} else if (isStudent) {
  ticketPrice /= 2;
} else {
  ticketPrice;
}
console.log(ticketPrice);
console.log(isStudent);
