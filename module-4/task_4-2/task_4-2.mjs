"use strict";
import { printOut, newLine } from "../../common/script/utils.mjs";

printOut("--- Part 1 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const part1array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

printOut("lengde = " + part1array.length + ", verdi = " + part1array[part1array.length - 1])

let part1text = "";
for (let i = 0; i < /*20*/ part1array.length; /*i++*/ i = i + 1){
    const value = part1array[i]; // -> every index of part1array
    if(i === part1array.length - 1){
        part1text += value.toString() + ".";
    }else{
        part1text += value.toString() + ", ";
    }
   
}
printOut(part1text)
printOut(newLine);

printOut("--- Part 2 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const part2text = part1array.join(", ");
printOut(part2text);
printOut(newLine);

printOut("--- Part 3 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const part3greeting = "Hello there, how are you?";
const greetingArray = part3greeting.split(" ");
let part3text = "";
for(let i = 0; i < greetingArray.length; i++){
    const word = greetingArray[i];
    // HERE YOU CAN REMOVE ANY UNWANTED CHARACTERS E.G: , ? ET:
    part3text += "Index: " + i.toString() + " = " + word + newLine;
}
printOut(part3text)


printOut(newLine);

printOut("--- Part 4 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const girls = ["Anne", "Inger", "Kari", "Marit", "Ingrid", "Liv", "Eva", "Berit", "Astrid", "Bjørg", "Hilde", "Anna", "Solveig", "Marianne", "Randi", "Ida", "Nina", "Maria", "Elisabeth", "Kristin"]

function RemoveNameFromArray(aArray, aName){
    let deleteindex = -1;
    for(let i = 0; i < aArray.length; i++){
        const name = aArray[i];
        if(name === aName){
            //Her kan vi slette elementet for eksempel "hilde"
            //Dette gjør vi ikke her! Her løper vi igjen, og må slette senere!
            //Vi må lagre indeksen i en variable.
            deleteindex = i;
        }
    }
    //teste om jeg kan teste
    if (deleteindex >= 0){
        printOut(aName + "is found, and deleted.")
        aArray.splice(deleteindex, 1);
        printOut(aArray);
    }else{
        printOut(aName + "is not found!");
    }
}

RemoveNameFromArray(girls, "Hilde");
printOut(newLine);

printOut("--- Part 5 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("Replace this with you answer!");
printOut(newLine);

printOut("--- Part 6 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("Replace this with you answer!");
printOut(newLine);

printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("Replace this with you answer!");
printOut(newLine);

printOut("--- Part 8 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("Replace this with you answer!");
printOut(newLine);

printOut("--- Part 9 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("Replace this with you answer!");
printOut(newLine);

/* Task 10*/
printOut("--- Part 10 ---------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("Replace this with you answer!");
printOut(newLine);
