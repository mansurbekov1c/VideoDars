// 5-dars
// Window module

// alert("Are you sure?");

// let isAccess = confirm("Are you above 18 age?");
// console.log(isAccess);

// let fName = prompt("What is your name?");
// console.log(fName);

// let age = +prompt("How old are you", "15");
// console.log(age);

// Interpolatsiya

// let fName = "Jurabek";
// let lName = "Abdullayev";
// let age = 16;

// console.log(`My full name is ${fName} ${lName} , I'm ${age} years old.`);

// let username = "_mansurbekov1c";

// console.log(`https://instagram.com/@${username}`);

// Operatorlar
// +, -, /, *, %

// Increment xar doim sonni bittaga oshiradi
// Decrement xar doim sonni bittaga kamaytiradi

// let x = 6;
// let y = 6;

// // postfix
// // x++;
// // y--;

// // prefix
// // ++x;
// // --y

// // console.log da prefix ishlaydi (o'zgaruvchidan oldin qo'yilgani uchun)
// console.log(++x);
// console.log(--y);

// && va - hamma malumot true bo'lsa true qaytaradi
// || yoki - bitta malumot true bo'lsa true qaytaradi

// let isMarried = true;
// let isHaveChild = false;

// let family = isMarried || isHaveChild;

// console.log(family);

// Amaliyot

// let age = +prompt("How old are you?");
// console.log(`I'm ${age} years old`);

// Vazifa

// let numberOfSeries = +prompt("Nechta serial ko'rdingiz?");

// const seriesDB = {
//   count: numberOfSeries,
//   series: {},
//   actors: {},
//   genres: [],
//   private: false,
// };

// let a = prompt("Oxirgi ko'rgan serialingiz?");
// let b = +prompt("Nechi baxo berasiz?");
// let c = prompt("Oxirgi ko'rgan serialingiz?");
// let d = +prompt("Nechi baxo berasiz?");

// seriesDB.series[a] = b;
// seriesDB.series[c] = d;

// console.log(seriesDB);

// 7-dars
// Shartli operator

// let trafficLight = "red";

// if (trafficLight == "red") {
//   console.log("Stop");
// } else if (trafficLight == "yellow") {
//   console.log("Prepare");
// } else {
//   console.log("Goo");
// }

// let age = +prompt("How old are you?");
// if (age <= 18) {
//   console.log("No access");
// } else {
//   console.log("Access");
// }

// = - qiymat beradi
// == - qiymatni tekshiradi
// === - qiymat ni va turini tekshiradi

// let trafficLight = "";

// switch (trafficLight) {
//   case "green":
//     console.log("Goo");
//     break;
//   case "yellow":
//     console.log("Prepare");
//     break;
//   case "red":
//     console.log("Stop");
//     break;
//   default:
//     console.log("O'zing amallab o't");
// }

//Sikl

// While
// Do While
// For

// let i = 1;

// while (i <= 5) {
//   console.log(i);
//   i++;
// }

// let i = 1;

// do {
//   console.log(i);
//   i++;
// } while (i <= 5);

// let i = 1;

// //  qiymat; shart; amal
// for (i; i <= 5; i++) {
//   if (i === 2) {
//     continue;
//   }
//   console.log(i);
// }

// Ternarniy operator

// let age = +prompt("How old are you?");

// //              if                           else
// age < 18 ? console.log("No access") : console.log("Access");

// 8-dars
// Vazifa

// let numberOfSeries = +prompt("Nechta serial ko'rdingiz?");

// const seriesDB = {
//   count: numberOfSeries,
//   series: {},
//   actors: {},
//   genres: [],
//   private: false,
// };

// for (let i = 0; i < 2; i++) {
//   let a = prompt(`Oxirgi ko'rgan serialingiz ${i}?`);
//   let b = prompt(`Nechi baxo berasiz ${i}?`);

//   if (a !== null && b !== null && a !== "" && b !== "") {
//     seriesDB.series[a] = b;
//   } else {
//     i--;
//   }
// }

// if (seriesDB.count < 5) {
//   console.log("Kam serial ko'ribsiz");
// } else if (seriesDB.count >= 5 && seriesDB < 10) {
//   console.log("Siz classic tomoshabin ekansiz");
// } else if (seriesDB.count > 10) {
//   console.log("G'irt bekorchi ekansiz");
// }

// console.log(seriesDB);

//
// 9-dars. Function turlari
//

// Function decloration
//

// let age = 12;

// function showHelloToUser(name) {
//   age = 18; //local o'zgaruvchi
//   console.log(`Hello ${name}, He is ${age} years old`);
// }

// showHelloToUser("Shox");

// const calcAdd20 = calculate(1, 8);
// console.log(calcAdd20 + 20);
// function calculate(a, b) {
//   return a + b;
// }

// Function expression
//

// let showHelloWorld = function (text) {
//   console.log(text);
// };

// showHelloWorld("Hello World");

// Arrow function
//

// let calculate = (a, b) => {
//   return a + b;
// };

// console.log(calculate(2, 3));

//
// String methods
//

// console.dir(Math) barcha metodlarni ko'rsatadi

// let text = "Hello World";
// let password = "        qwerty    ";

// console.log(text);

// // Length is property
// console.log("Uzunligi", text.length);

// // Methods
// console.log("#1. Aniq positsiyadagi indexdagi harf:", text.charAt(2));
// console.log("#2. Aniq positsiyadagi indexdagi harf:", text[2]);
// console.log("Harflarni katta registerda qilish:", text.toUpperCase());
// console.log("Harflarni kichik registerda qilish:", text.toLowerCase());
// console.log("#1. Matnni bosh va oxiridan kesish:", text.slice(1, -2));
// console.log("#2. Matnni bosh va oxiridan kesish:", text.substring(0, 2));
// console.log("Ikki tarafdan space olib tashlash:", password.trim());
// console.log("Boshidan space olib tashlash:", password.trimStart());
// console.log("Oxiridan space olib tashlash:", password.trimEnd());

// // Number Methods

// let number = 12.6;
// let width = "242.62px";

// console.log(number);

// console.log("Matematik tahlillaydi:", Math.round(number));
// console.log("Verguldan keyingi raqamni olib tashlaydi:", Math.floor(number));

// console.log(width);

// console.log("String malumot turidan sonni qaytaradi:", parseFloat(width));
// console.log("String malumot turidan butun sonni qaytaradi:", parseInt(width));

//
// 11-dars
//
// Homework

// let numberOfSeries;

// startApp();

// const seriesDB = {
//   count: numberOfSeries,
//   series: {},
//   actors: {},
//   genres: [],
//   private: false,
// };

// setFavouriteSeries();
// detectingLevel();
// (writeGenres(), showDb(seriesDB.private));

// function startApp() {
//   numberOfSeries = +prompt("Nechta serial ko'rdingiz?");

//   while (
//     numberOfSeries == "" ||
//     numberOfSeries == null ||
//     isNaN(numberOfSeries)
//   ) {
//     numberOfSeries = +prompt("Nechta serial ko'rdingiz?");
//   }
// }

// function setFavouriteSeries() {
//   for (let i = 0; i < 2; i++) {
//     const a = prompt(`Oxirgi ko'rgan serialingiz ${i + 1}`);
//     const b = prompt(`Nechi baxo berasiz? ${i + 1}`);

//     if (a !== null && b !== null && a !== "" && b !== "") {
//       seriesDB.series[a] = b;
//     } else {
//       i--;
//     }
//   }
// }

// function detectingLevel() {
//   if (seriesDB.count < 5) {
//     console.log("Kam serial ko'ribsiz");
//   } else if (seriesDB.count >= 5 && seriesDB.count < 10) {
//     console.log("Siz classic tomoshabin ekansiz");
//   } else if (seriesDB.count >= 10) {
//     console.log("Siz g'irt bekorchi ekansiz");
//   }
// }

// function writeGenres() {
//   for (let i = 0; i < 3; i++) {
//     const genre = prompt(`Yaxshi ko'rgan janringiz ${i + 1}?`);
//     seriesDB.genres[i] = genre;
//   }
// }

// function showDb(isPrivate) {
//   if (!isPrivate) {
//     console.log(seriesDB);
//   } else {
//     console.log("Ma'lumotlar mahfiy saqlanmoqda");
//   }
// }

//
// 12-dars. Callback va Object destruktizatsiya
//

// Callback bu bitta function bajarilgandan so'ng ishlaydigan function

// function greeting(callback) {
//   console.log("Hello students");

//   callback();
// }

// function callback() {
//   console.log("Are you ready today");
// }

// greeting(callback);

// Object va destruktizatsiya

const person = {
  name: "Samar",
  year: 2001,
  job: "Full Stack developer",
  hobbies: {
    sport: "Football",
    games: "UFC",
  },
  sayHello: function () {
    console.log(`hello ${this.name}`);
  },
};

console.log(person);

person.sayHello();

const {
  job,
  year,
  name,
  sayHello,
  hobbies: { games, sport },
} = person;

console.log(games);

// console.log(Object.keys(person).length);

// for in - faqat object uchun
// for of - faqat massiv ya'ni array uchun

// for (let key in person) {
//   if (typeof person[key] === "object") {
//     for (let i in person[key]) {
//       console.log(`Property: ${i}: Value: ${person[key][i]}`);
//     }
//   } else {
//     console.log(`Property: ${key}: Value: ${person[key]}`);
//   }
// }
