"use strict";
import { printOut, newLine } from "../../common/script/utils.mjs";


printOut("--- Part 1 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const x = 2 + 3 * (2-4) * 6;
printOut("The value of x = 2 + 3 * (2-4) * 6 is" + x);
printOut(newLine);

printOut("--- Part 2 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const meter = 25 * 1000;
const centimeter = 34 * 10;
const totalMillimeters = meter + centimeter;
const inches = totalMillimeters / 25.4;
const result = inches.toFixed(2);
printOut("25 meter and 34 cm is equal to " + result + " inches.");
printOut(newLine);

printOut("--- Part 3 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const dager = 3 * 24 * 60;
const timer = 12 * 60;
const minutter = 14;
const sekunder = 45 / 60;
printOut("3 days, 12 hours, 14 minutes, and 45 seconds to minutes is " + (dager + timer + minutter + sekunder) + " minutes.");
printOut(newLine);

printOut("--- Part 4 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
let totalMinutes = 6322.52;

let days = Math.floor(totalMinutes / 1440);
let hours = Math.floor((totalMinutes % 1440) / 60);
let minutes = Math.floor(totalMinutes % 60);
let seconds = Math.round((totalMinutes % 1) * 60);
printOut("6322.52 minutes is equal to " + days + " days, " + hours + " hours, " + minutes + " minutes, and " + seconds + " seconds.");
printOut(newLine);

printOut("--- Part 5 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const usdToNokRate = 76 / 8.6;
const nokToUsdRate = 8.6 / 76;

const usdamount = 54;

const nokamount = Math.round(usdamount * usdToNokRate);
const usdconverted = Math.round(nokamount * nokToUsdRate);

printOut(nokamount + " NOK is approximately " + usdconverted + " USD.");
printOut(newLine);
printOut(usdamount + " USD is approximately " + nokamount + " NOK.");
printOut(newLine);

printOut("--- Part 6 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
let text = "There is much between heaven and earth that we do not understand.";

let index = text.indexOf("earth");

printOut("number of caracters in the text:" + text.length);
printOut(newLine);
printOut("caracter in position 19 is:" + text.charAt(19));
printOut(newLine);
printOut("caracter 8 positions from caracter 35 is:" + text.charAt(35 + 8));
printOut(newLine);
printOut("The word earth starts at index: " + index);
printOut(newLine);

printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

printOut("is 5 greater than 3: " + (5 > 3 ));
printOut(newLine);
printOut("is 7 greater or equal to 7: " + (7 >= 7 ));
printOut(newLine);
printOut("is 'a' greater than 'b';" + ('a' > 'b'));
printOut(newLine);
printOut("is '2500' less then 'abcd':" + ('2500' < 'abcd'));
printOut(newLine);
printOut("'arne' is not equal to 'thomas': " + ('arne' != 'thomas'));
printOut(newLine);
printOut("2 equals 5 statement is: " + (2 == 5));
printOut(newLine);
printOut("abcd is greater than bcd statement is: " + ('abcd' > 'bcd'));
printOut(newLine);


printOut("--- Part 8 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
let num1 = Number("254");
let num2 = Number("57.23");
let num3 = parseInt("25 kroner");

printOut("'254' as a number is: " + num1);
printOut(newLine);
printOut("'57.23' as a number is: " + num2);
printOut(newLine);
printOut("'25 kroner' as a number is: " + num3);
printOut(newLine);


printOut("--- Part 9 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
let r = Math.floor(Math.random() * 360) + 1;
printOut("A random integer between 1 and 360: " + r);
printOut(newLine);

/* Task 10*/
printOut("--- Part 10 ---------------------------------------------------------------------------------------------");
/* Put your code below here!*/
let totalDays2 = 131;

let weeks2 = Math.floor(totalDays2 / 7);

let days2 = totaldays2 % 7;

printOut(totalDays2 + " days is " + weeks + " weeks and " + days + " days.");    
printOut(newLine);