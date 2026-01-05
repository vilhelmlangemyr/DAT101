"use strict"
import {printOut} from "../../common/script/utils.mjs";

const text1 = "Du er gammel nok til å ta med en som ikke er gammel nok";
const text2 = "du kan gå på kino"
const text3 = "beklager, du er ikke gammel nok til å se denne filmen";


const agemovie = 16;
const agebringalong = 18;
let age1 = 19; // gammel nok til å ha med seg en person under 16.
let age2 = 14; // personen er ikke gammel nok til å se filmen alene.

if (age1 < age2) {
    const age1old = age1;
    age1 = age2;
    age2 = age1old;
}

if (age1 >= agemovie) {
    printOut("person 1 " + text2);
    if (age2 >= agemovie) {
        printOut(text2);
    }else if (age1 >= agebringalong) {
        printOut ("person 1: " + text1);
        printOut ("person 2: " + text2);
    }else {
        printout ("person 2: " + text3);
    }
}else {
    printout("vi har ingen case for dette");
}
