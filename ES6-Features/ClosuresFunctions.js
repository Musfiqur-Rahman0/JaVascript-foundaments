// এমন একটি counter ফাংশন লিখুন, যা সংখ্যা বৃদ্ধি ও হ্রাস করতে পারবে, কিন্তু সরাসরি মান পরিবর্তন করা যাবে না।
const createCounter = () => {
  let count = 0;

  return {
    increment: function () {
      count++;
      console.log(count);
    },
    decrement: function () {
      count--;
      console.log(count);
    },
  };
};

const counter = createCounter();
// counter.increment();
// counter.increment();
// counter.increment();
// counter.decrement();

// 2️⃣ এমন একটি ফাংশন লিখুন, যা প্রতিবার কল করলে আগের পাঠানো মেসেজ মনে রাখবে এবং দেখাবে।

const momorise = () => {
  let lastMassage = null;
  return function (massage) {
    // console.log(massage);
    if (massage) {
      lastMassage = massage;
      console.log(lastMassage);
    } else {
      console.log(lastMassage);
    }
  };
};

const getMassage = momorise();
// getMassage("hellow");
// getMassage();
// getMassage("this is good");
// getMassage();
// console.log(getMassage("this is bad"));

// 3️⃣ এমন একটি ফাংশন লিখুন, যা ইউনিক আইডি জেনারেট করবে প্রতিবার কল করার সময়.
const createUniqueId = () => {
  let id = 0;
  return function () {
    id++;
    return id;
  };
};

const uniqueId = createUniqueId();
