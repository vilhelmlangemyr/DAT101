"use strict";
import { printOut, newLine } from "../../common/script/utils.mjs";

printOut("--- Part 1, 2, 3 ----------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("Task 1, 2 and 3");
let wakeUpTime = 8;
if (wakeUpTime === 7) {
  printOut("I can take the bus to school.");
} else if (wakeUpTime === 8) {
  printOut ("I can take the train to school.");
} else {
  printOut("i can take a car to school");
}
printOut(newLine);

printOut("--- Part 4, 5 --------------------------------------------------------------------------------------------");
/* Put your code below here!*/
let resualt = 0;
if (resualt > 0) {
  printOut("The number is positive.");
}else if (resualt < 0) {
  printOut("The number is negative.");
}
else {
  printOut("The number is zero");
}
printOut(newLine);

printOut("--- Part 6 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
let imagesize = Math.floor(Math.random() * 8) + 1;
let minsize = 4;

if (imagesize >= minsize) {
  printOut("thank you");
}else {
  printOut("the image is too small");
}
printOut(newLine);

printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
let imagesize2 = Math.floor(Math.random() * 8) + 1;
let minsize2 = 4;
let maxsize2 = 6;

if (imagesize2 < minsize2) {
  printOut("thank you");
}else if (imagesize2 >= maxsize2) {
  printOut("the image is too large");
}

else {
  printOut("the image is too small");
}
printOut(newLine);

printOut("--- Part 8 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const monthList =["January", "February", "Mars", "April", "Mai",
"Jun", "Juli", "August", "September", "October", "November", "December"];
const noOfMonth = monthList.length;
const monthName = monthList[Math.floor(Math.random() * noOfMonth)];

if (monthName.includes("r")) {
  printOut("you need to take vitamin D");
}else {
printOut("You do not need to take vitamin D");
}
printOut(newLine);

printOut("--- Part 9 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const monthList2 =["January", "February", "Mars", "April", "Mai",
"Jun", "Juli", "August", "September", "October", "November", "December"];
const noOfMonth2 = monthList2.length;
const monthName2 = monthList2[Math.floor(Math.random() * noOfMonth)];

const daysinmonth = {
  January: 31,
  February: 28,
  Mars: 31,
  April: 30,
  Mai: 31,
  Jun: 30,
  Juli: 31,
  August: 31,
  September: 30,
  October: 31,
  November: 30,
  December: 31
};

printOut("Days in " + monthName + " is: " + daysinmonth[monthName]);
printOut(newLine);

/* Task 10*/
printOut("--- Part 10 ---------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const monthList3 =["January", "February", "Mars", "April", "Mai",
"Jun", "Juli", "August", "September", "October", "November", "December"];
const noOfMonth3 = monthList3.length;
const monthName3 = monthList3[Math.floor(Math.random() * noOfMonth)];
if (monthName3.includes ("Mars") || monthName3.includes ("Mai")) {
  printOut("In " + monthName3 + " the art gallary is closed ");
}else if (monthName3.includes ("April")) {
  printOut("In " + monthName3 + " the art gallary is temporary open ");
} else {
  printOut("In " + monthName3 + " the art gallary is open ");
}
printOut(newLine);
