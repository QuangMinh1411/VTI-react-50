// const sandwich = {
//   bread: "dutch crunch",
//   meat: "tuna",
//   cheese: "swiss",
//   toppings: ["lettuce", "tomato", "mustard"],
// };

// const { bread, meat } = sandwich;
// console.log(bread, meat);

// const regularPerson = {
//   firstName: "Howard",
//   lastName: "John",
//   spouse: {
//     firstName: "Mary",
//     lastName: "Select",
//     pets: {
//       name: "Miu",
//     },
//   },
// };
// const lordify = ({
//   spouse: {
//     pets: { name },
//   },
// }) => {
//   console.log(`${name} of person spouse pet`);
// };
// lordify(regularPerson);

// const [, , thirdAnimal] = ["Horse", "Mouse", "Cat"];
// console.log(thirdAnimal);
const name = "Taillac";
const elevation = 9876;
// const funHike = { name, elevation };
// console.log(funHike);
// const sound = "Bee";
// const skier = {
//   name,
//   sound,
//   powderYell() {
//     let yell = this.sound.toUpperCase();
//     console.log(`${yell} ${yell} ${yell}!!!`);
//   },
//   speed(mph) {
//     this.speed = mph;
//     console.log("speed:", mph);
//   },
// };
// skier.speed(200);
// skier.powderYell();

// //Spread operator
// const peaks = ["Tallac", "Ralston", "Rose"];
// const canyons = ["Ward", "Blackwood"];
// const arr = [peaks[0], ...canyons];
// const tahoe = [...peaks, ...canyons];

// //Async
// fetch("https://api.randomuser.me/?nat=US&results=1")
//   .then((res) => res.json())
//   .then((json) => json.results)
//   .then(console.log)
//   .catch(console.error);

// const getFakePerson = async () => {
//   let res = await fetch("https://api.randomuser.me/?nat=US&results=1");
//   let { results } = res.json();
//   console.log(results);
// };

// getFakePerson();

// const getPeople = (count) =>
//   new Promise((resolves, rejects) => {
//     const api = `https://api.randomuser.me/?nat=US&results=${count}`;
//     const request = new XMLHttpRequest();
//     request.open("GET", api);
//     request.onload = () =>
//       request.status === 200
//         ? resolves(JSON.parse(request.response).results)
//         : reject(Error(request.statusText));
//     request.onerror = (err) => rejects(err);
//     request.send();
//   });
