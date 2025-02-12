// Destructuring
const Obj = {
  name: "Monster",
  age: 25,
  isStudent: true,
  profession: "developer",
};

// // const name = Obj.name;
// console.log(name);

const { name, age, isStudent, profession } = Obj;
console.log(name);
console.log(isStudent);
console.log(age);
console.log(profession);

const friends = ["musfiqur", "hridoy", "rahman", "saikot", "munna"];
const [first, second, third, forth, fifth] = friends;
console.log(fifth);
