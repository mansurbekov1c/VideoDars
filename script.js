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
