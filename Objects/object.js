let obj = {
  name: "John Doe",
  age: 25,
  city: "Example City",
  isStudent: true,
};
for (let o in obj) {
  console.log(`key : ${obj[o]} | type ${typeof obj[o]}`);
}
obj.name = "jon";
