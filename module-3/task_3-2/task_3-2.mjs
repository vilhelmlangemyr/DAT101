"use strict";
import { printOut, newLine } from "../../common/script/utils.mjs";

printOut("--- Part 1 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
let line1 = "";
for (let i = 1; i <= 10; i++) {
    line1 += i + " ";
}
printOut(line1);

let line2 = "";
for (let i = 10; i >= 1; i--) {
    line2 += i + " ";
}
printOut(line2);
printOut(newLine);

printOut("--- Part 2 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
let secretnumber = 45;
let guess = 0;

while (guess !== secretnumber) {
    guess = Math.floor(Math.random() * 60) + 1;

}
printOut("the computer guessed it! the number is: " + guess);
printOut(newLine);

printOut("--- Part 3 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
let secretnumber2 = 56;

let guess2 = 0;
let attempts = 0;

let stattime = Date.now();

while (guess2 !== secretnumber2) {
    guess2 = Math.floor(Math.random() * 1000000) + 1;
    attempts++;
}
let endtime = Date.now();
let duration = (endtime - stattime)
printOut("the number is " + secretnumber2);
printOut("it took " + attempts + " attempts");
printOut("it took " + duration + " milliseconds");
printOut(newLine);

printOut("--- Part 4 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
let output = "";
for (let num = 2; num <= 200; num++) {
    let divisor = 2;
    let isPrime = true;

    while (divisor < num) {
        if (num % divisor === 0) {
            isPrime = false;
            break;
        }
        divisor++;
    }

    if (isPrime) {
        output += num + ",";
    }
}
printOut(output);
printOut(newLine);

printOut("--- Part 5 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
for (let row = 1; row <= 7; row++) {
    let rowoutput = "";
    for (let col = 1; col <= 9; col++) {
        rowoutput += "k" + col + "R" + row + " "; 
}
printOut(rowoutput.trim());
}
printOut(newLine);

printOut("--- Part 6 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
function getlettergrade(score){
    let percent = (score / 236) * 100;
    if (percent >= 89) return "A";
    else if (percent >= 77) return "B";
    else if (percent >= 65) return "C";
    else if (percent >= 53) return "D";
    else if (percent >= 41) return "E";
    else return "F";
}
for (let student = 1; student <= 5; student++) {
    let score = Math.floor(Math.random() * 236) + 1;
    let grade = getlettergrade(score);
    printOut("student " + student + " scored " + score + " and recived a grade of " + grade);
}
printOut(newLine);

printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
function rolldie() {
    return Math.floor(Math.random() * 6) + 1;
}

function getcounts(dice) {
    let counts = [0, 0, 0, 0, 0, 0];
    for (let die of dice) {
        counts[die - 1]++;
    }
    return counts;
}

function throwdice() {
    let dice = [];
    for (let i = 0; i < 6; i++) {
        dice.push(rolldie());
    }
    return dice;
}

function isfullstraight(counts) {
    return counts.every(c => c === 1);
}

function isthreepairs(counts) {
    let pairs = counts.filter (c => c === 2);
    return pairs.length === 3;
}

function istower (counts) {
    return counts.includes(2) && counts.includes(4);
}

function isyatzy (counts) {
    return counts.includes(6);
}

function simulatecombinations(checkfunction, name) {
    let throws = 0;
    let success = false;

    do {
        let dice = throwdice();
        let counts = getcounts(dice);
        throws++;
        if (checkfunction(counts)) success = true;
    } while (!success);

    printOut(`It took ${throws} throws to get a ${name}`);
}

simulatecombinations(isfullstraight, "full straight (1-6)");
simulatecombinations(isthreepairs, "three pairs");
simulatecombinations(istower, "tower (2 and 4 of a kind)");
simulatecombinations(isyatzy, "Yatzy (5 of a kind)");
printOut(newLine);

printOut("--- Discussion question 1 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
let line5 = "";
let line6 = "";
for (let i = 1; i <= 10; i++) {
    line5 += i + " ";
    line6 += (11 - i) + " ";
}
printOut(line5);
printOut(line6);
printOut(newLine);