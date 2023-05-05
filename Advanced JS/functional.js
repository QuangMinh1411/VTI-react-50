// const messages = [
//   "They can be inserted into arrays",
//   (message) => console.log(message),
//   "like variables",
//   (message) => console.log(message),
// ];

// messages[1](messages[0]); // They can be inserted into arrays
// messages[3](messages[2]); // like variables

// const insideFn = (logger) => {
//   logger("They can be sent to other functions as arguments");
// };
// // //Trien khai ham logger
// insideFn((mes) => console.log(mes + " Hi"));

// const createScream = function (logger) {
//   return function (message) {
//     logger(message.toUpperCase() + "!!!");
//   };
// };
// const createScream = (logger)=>{
//   return (message)=>logger(message.toUpperCase() + "!!!");
// }
// const createScream = (logger) => (message) =>
//   logger(message.toUpperCase() + "!!!");

// const scream = createScream((message) => console.log(message));

// scream("functions can be returned from other functions");
// scream("createScream returns a function");
// scream("scream invokes that returned function");

// const rateColor = (color, rating) => ({
//   ...color,
//   rating,
// });

// const frederick = {
//   name: "Frederick Douglass",
//   canRead: false,
//   canWrite: false,
// };
// frederick.canRead = true;
// const selfEducate = (person) => ({
//   ...person,
//   canRead: true,
//   canWrite: true,
//   canRide: true,
// });

// console.log(selfEducate(frederick));
// console.log(frederick);

const schools = ["Yorktown", "Washington & Liberty", "Wakefield"];
const wSchools = schools.filter((school) => school[0] === "W");

const cutSchool = (cut, list) => list.filter((school) => school !== cut);

console.log(cutSchool("Washington & Liberty", schools).join(", "));

const highSchools = schools.map((school) => `${school} High School`);

console.log(highSchools.join("\n"));

// let schools = [
//     { name: "Yorktown" },
//     { name: "Stratford" },
//     { name: "Washington & Liberty" },
//     { name: "Wakefield" }
//   ];

//   let updatedSchools = editName("Stratford", "HB Woodlawn", schools);

//   console.log(updatedSchools[1]); // { name: "HB Woodlawn" }
//   console.log(schools[1]); // { name: "Stratford" }

const editName = (oldName, name, arr) =>
  arr.map((item) => {
    if (item.name === oldName) {
      return {
        ...item,
        name,
      };
    } else {
      return item;
    }
  });

const fruits = [
  { name: "apple", quantity: 3 },
  { name: "orange", quantity: 2 },
  { name: "lemon", quantity: 4 },
];
const newFruits = editName("orange", "pearl", fruits);
console.log(newFruits);

const ages = [21, 18, 42, 40, 64, 63, 34];

const maxAge = ages.reduce((max, age) => {
  console.log(`${age} > ${max} = ${age > max}`);
  if (age > max) {
    return age;
  } else {
    return max;
  }
}, 0);

const colors = [
  {
    id: "xekare",
    title: "rad red",
    rating: 3,
  },
  {
    id: "jbwsof",
    title: "big blue",
    rating: 2,
  },
  {
    id: "prigbj",
    title: "grizzly grey",
    rating: 5,
  },
  {
    id: "ryhbhsl",
    title: "banana",
    rating: 1,
  },
];

const hashColors = colors.reduce((hash, { id, title, rating }) => {
  hash[id] = { title, rating };
  return hash;
}, {});

console.log(hashColors);

const colors1 = ["red", "red", "green", "blue", "blue", "green"];

// const uniqueColors = colors1.reduce(
//   (unique, color) =>
//     unique.indexOf(color) !== -1 ? unique : [...unique, color],
//   []
// );

// console.log(uniqueColors);

const invokeIf = (condition, fnTrue, fnFalse) =>
  condition ? fnTrue() : fnFalse();

const showWelcome = () => console.log("Welcome!!!");

const showUnauthorized = () => console.log("Unauthorized!!!");

invokeIf(true, showWelcome, showUnauthorized); // "Welcome!!!"
invokeIf(false, showWelcome, showUnauthorized); // "Unauthorized!!!"

// const countdown = (value, fn) => {
//   fn(value);
//   return value > 0 ? countdown(value - 1, fn) : value;
// };

// countdown(10, (value) => console.log(value));

const countdown = (value, fn, delay = 1000) => {
  fn(value);
  return value > 0
    ? setTimeout(() => countdown(value - 1, fn, delay), delay)
    : value;
};

const log = (value) => console.log(value);
countdown(10, log);
