//1. Loop through an object and print the key-value pairs with their types
let obj = {
  name: "John Doe",
  age: 25,
  city: "Example City",
  isStudent: true,
};
for (let o in obj) {
  // console.log(`key : ${obj[o]} | type ${typeof obj[o]}`);
}

//2. access golden red color value in output.
const colors = {
  red: "#ff0000",
  green: "#00ff00",
  blue: "#0000ff",
  "golden rod": "#daa520",
};

// console.log(colors["golden rod"]);

//3. For this object below add a property named passenger capacity with value 5
const car = {
  make: "Toyota",
  model: "Corolla",
  year: 2020,
};
car["passenger capacity"] = 5;
// console.log(car);

//4. Display the physics marks as output.
const student = {
  name: "Hamim Sakep",
  id: 5421,
  physics: {
    subject: "HSC Physics",
    author: "Shahjahan Tapan",
    marks: 30,
  },
};

// console.log(student.physics.marks);

//5. Count the number of properties.
let student2 = {
  name: "Ariana Grande",
  age: 21,
  city: "Gaibandha",
  isStudent: true,
  hasJob: false,
};
let propertyCount = 0;
// for(let i  = 0; i < student)
for (let key in student2) {
  if (key) {
    propertyCount += 1;
  }
}
console.log(propertyCount);
console.log(student2);
