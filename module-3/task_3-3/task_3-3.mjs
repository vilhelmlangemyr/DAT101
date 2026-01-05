"use strict";
import { printOut, newLine } from "../../common/script/utils.mjs";

printOut("--- Part 1 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
function printTodaysDateNorwegian() {
    const today = new Date();

    const options = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    };

    const formattedDate = today.toLocaleDateString("no-NB", options);
    printOut(formattedDate);
}

// Call the function
printTodaysDateNorwegian();
printOut(newLine);

printOut("--- Part 2 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
function getTodaysDateNorwegian() {
    const today = new Date();

    const options = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    };

    printOut(today.toLocaleDateString("no-NB", options));
    printOut(newLine);

    return today;
}

function daysUntil2XKORelease(todayDate) {
    const releaseDate = new Date(2025, 4, 14); // May 14, 2025
    const millisecondsPerDay = 1000 * 60 * 60 * 24;

    return Math.ceil((releaseDate - todayDate) / millisecondsPerDay);
}

/* Combine both functions */
const today = getTodaysDateNorwegian();
const daysLeft = daysUntil2XKORelease(today);

/* Required output format */
printOut(`it is ${daysLeft} days to `);
printOut(newLine);

printOut("--- Part 3 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
function circleInfo(radius) {
    const diameter = 2 * radius;
    const circumference = 2 * Math.PI * radius;
    const area = Math.PI * radius * radius;

    printOut("Diameter: " + diameter.toFixed(2));
    printOut(newLine);

    printOut("Circumference: " + circumference.toFixed(2));
    printOut(newLine);

    printOut("Area: " + area.toFixed(2));
    printOut(newLine);
}
circleInfo(5);

printOut("--- Part 4 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
function Part4CalculateRectangle(aRectangle) {
  const circumference = 2 * (aRectangle.width + aRectangle.height);
  const area = aRectangle.width * aRectangle.height;
  printOut(`For a rectangle with width ${aRectangle.width} and height ${aRectangle.height}:`);
  printOut(`
    <ul>
      <li>Circumference: ${circumference.toFixed(2)}</li>
      <li>Area: ${area.toFixed(2)}</li>
    </ul>
  `);
}
Part4CalculateRectangle({ width: 4, height: 7 });
printOut(newLine);

printOut("--- Part 5 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const ETempType = {
  Kelvin: 1,
  Celsius: 2,
  Fahrenheit: 3,
}

function Part5ConvertTemp(aTemp, aTempType){
  let kelvin = 0, celsius = 0, fahrenheit = 0;
  let tempTypeName = "";

  switch(aTempType){
    case ETempType.Kelvin:
      kelvin = aTemp;
      celsius = kelvin - 273.15;
      fahrenheit = (kelvin - 273.15) * 9/5 + 32;
      tempTypeName = "Kelvin";
    break;
    case ETempType.Celsius:
      celsius = aTemp;
      kelvin = celsius + 273.15;
      fahrenheit = (celsius * 9/5) + 32;
      tempTypeName = "Celsius";
    break;
    case ETempType.Fahrenheit:
      fahrenheit = aTemp;
      celsius = (fahrenheit - 32) * 5/9;
      kelvin = celsius + 273.15;
      tempTypeName = "Fahrenheit";
    break;
  }
  printOut(`Convert from ${aTemp} ${tempTypeName}:`);
  printOut(`&nbsp;Kelvin: ${Math.round(kelvin)}`);
  printOut(`&nbsp;Celsius: ${celsius.toFixed(0)}`);
  printOut(`&nbsp;Fahrenheit: ${fahrenheit.toFixed(0)}`);
  printOut("");
}

Part5ConvertTemp(300, ETempType.Kelvin);
Part5ConvertTemp(26.85, ETempType.Celsius);
Part5ConvertTemp(80.33, ETempType.Fahrenheit);
printOut(newLine);

printOut("--- Part 6 ----------------------------------------------------------------------------------------------");

function Part6Calculate(aGrossAmount, aTaxGroup) {
  const taxGroup = aTaxGroup.toLowerCase();
  let taxRate = 0;
  switch (taxGroup) {
    case "normal":
      taxRate = 25;
      break;
    case "food":
      taxRate = 15;
      break;
    case "hotel":
    case "transport":
    case "cinema":
      taxRate = 10;
      break;
    default:
      printOut("Error: Unknown tax group!");
      return;
  }
  const netAmount = (100 * aGrossAmount) / (taxRate + 100);
  printOut(`Gross amount: ${aGrossAmount.toFixed(2)}`);
  printOut(`Tax group: ${aTaxGroup}, Tax rate: ${taxRate}%`);
  printOut(`Net amount: ${netAmount.toFixed(2)}`);
  printOut("");
}

Part6Calculate(100, "Normal");
Part6Calculate(100, "Food");
Part6Calculate(100, "Hotel");
Part6Calculate(100, "Transport");
Part6Calculate(100, "Cinema");
Part6Calculate(100, "Car");

printOut(newLine);

printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
function Part7CalculateSpeedDistanceTime(aDistance, aTime, aSpeed) {
  if (aSpeed === null) {
    // Calculate speed
    if( !aTime || aTime === 0 || !aDistance ) {
      printOut("Error: Time or Distance cannot be zero or null when calculating speed!");
      return NaN;
    }
    aSpeed = aDistance / aTime;
    printOut(`Calculated Speed: ${aSpeed.toFixed(2)} units/time`);
    return aSpeed;
  } else if (aTime === null) {
    // Calculate time
    if( !aSpeed || aSpeed === 0 || !aDistance ) {
      printOut("Error: Speed or Distance cannot be zero or null when calculating time!");
      return NaN;
    }
    aTime = aDistance / aSpeed;
    printOut(`Calculated Time: ${aTime.toFixed(2)} time units`);
    return aTime;
  } else if (aDistance === null) {
    // Calculate distance
    if( !aSpeed || !aTime) {
      printOut("Error: Speed or Time cannot be null when calculating distance!");
      return NaN;
    }
    aDistance = aSpeed * aTime;
    printOut(`Calculated Distance: ${aDistance.toFixed(2)} units`);
    return aDistance;
  }
}
Part7CalculateSpeedDistanceTime(100, 2, null); // Calculate speed
Part7CalculateSpeedDistanceTime(100, null, 50); // Calculate time
Part7CalculateSpeedDistanceTime(null, 2, 50); // Calculate distance
Part7CalculateSpeedDistanceTime(null, null, 50); // Error case
printOut(newLine);

printOut("--- Part 8 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
function Part8AdjustString(aText, aMaxSize, aChar, aInsertAtEnd) {
  let adjustedText = aText;
  let length = aText.length;
  while (length < aMaxSize) {
    if (aInsertAtEnd) {
      adjustedText += aChar;
    } else {
      adjustedText = aChar + adjustedText;
    }
    length++;
  }
  printOut(`Adjusted String: "${adjustedText}"`);
  return adjustedText;
}
Part8AdjustString("Hello", 30, "*", true); // Insert at end
Part8AdjustString("World", 25, "#", false); // Insert at beginning
Part8AdjustString("This is a right aligned text.", 50, "&nbsp;", false); // Right align with spaces
printOut(newLine);

printOut("--- Part 9 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
function Part9TestMathExpression(aLines) {
  let currentNumber = 1;
  for (let line = 1; line <= aLines; line++) {
    let leftSum = 0;
    let rightSum = 0;
    // Calculate left side, one more number than right side
    for (let i = 0; i < line + 1; i++) {
      leftSum += currentNumber++;
    }
    // Calculate right side
    for (let i = 0; i < line; i++) {
      rightSum += currentNumber++;
    }
    if (leftSum !== rightSum) {
      printOut(`Test failed at line ${line}: Left sum (${leftSum}) != Right sum (${rightSum})`);
      return;
    }
  }
  printOut("Maths fun!");
}

Part9TestMathExpression(200);
printOut(newLine);

/* Task 10*/
printOut("--- Part 10 ---------------------------------------------------------------------------------------------");
/* Put your code below here!*/
let Part10IntermediateSteps = "";
let Part10Step = 0;
function Part10Factorial(aNumber) {
  if (aNumber <= 1) {
    return 1;
  } else {
    const result = aNumber * Part10Factorial(aNumber - 1);
    Part10Step++;
    Part10IntermediateSteps += `Step ${Part10Step}: ${aNumber} * Factorial(${aNumber - 1}) = ${result}<br>`;
    return result;
  }
}
const numberForFactorial = 5;
const factorialResult = Part10Factorial(numberForFactorial);
printOut(`Factorial of ${numberForFactorial} is ${factorialResult}`);
printOut("Intermediate Steps:<br>" + Part10IntermediateSteps);
printOut(newLine);