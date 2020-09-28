"use strict";

// 4 + 7 = 11

const pirmas = 4;
const antras = 7;

const suma = pirmas + antras;

console.log(pirmas);
console.log(antras);
console.log(suma);

let nuotaika = 'gera';
console.log(nuotaika);

nuotaika = "bloga";
console.log(nuotaika);

const rez = 2 + 2 * 2;
console.log(rez);

const hi = 'good';
const mor = 'morning';

const sayhi = hi + ' ' + mor;

console.log(hi, mor);
console.log(sayhi);


const name = 'vardenis';
const surname = 'pavardenis';

const fullname = name + ' ' + surname;
console.log('Hi, I am ' + fullname);


const paz1 = 1;
const paz2 = 10;
const paz3 = 7;
const paz4 = 5;
const paz5 = 8;

// sąrašas
const marks = [1, 10, 7, 5, 8];

const marks2 = [paz1, paz2, paz3, paz4, paz5];

console.log(marks);

console.log(marks2);




// let sum = marks [0] + marks [1] + marks [2] + marks [3] + marks [4];

let sum = 0;
let pazNum = 0;
sum = sum + marks[pazNum++];
sum = sum + marks[pazNum++];
sum = sum + marks[pazNum++];
sum = sum + marks[pazNum++];
sum = sum + marks[pazNum++];

const count = marks.length;

const average = sum / count;

console.log('Marks average:', sum, '/', count, '=', average);

const num = [1, 2, 3]

let numSum = 0;
let index = 0;


numSum += num[index++];
console.log(numSum);


numSum += num[index++];
console.log(numSum);


numSum += num[index++];
console.log(numSum);


let skaicius = 5;

console.log(skaicius++);
console.log(skaicius);
console.log(++skaicius);


let money = 0;

money += 7;

console.log(money, 'pinigu');

money += 15;

console.log(money, 'pinigu');

money += 31;

console.log(money, 'pinigu');

// matematiniai operatoriai:
// paprasti: +, -, *, /
// increment: ++ (before, after)
// decrement: -- (before, after)
// update: +=, -=, *=, /=


const fruits = ['orange', 'apple', 'pineapple', 'kiwi'];

let rezz = 0;
let nr = 1;


// 1-2+3-4+5

console.log('-----1-2+3-4+5------');

rezz += nr;
console.log(rezz);
nr += 1;
rezz -= nr;
console.log(rezz);
nr += 1;
rezz += nr;
console.log(rezz);
nr += 1;
rezz -= nr;
console.log(rezz);
nr += 1;
rezz += nr;
console.log(rezz);
nr += 1;

// Sujungti sąrašų vertes, kurių tipas yra tekstai, nuo sąrašo galo iki pradžios taip, jog tarp jų būtų kablelis ir tarpas

console.log('Sujungti sąrašų vertes, kurių tipas yra tekstai, nuo sąrašo galo iki pradžios taip, jog tarp jų būtų kablelis ir tarpas');

const tekst = ['pirmas', 'antras', 'trecias'];

let nomeris = 2;

console.log(tekst[nomeris--]);
console.log(tekst[nomeris--]);
console.log(tekst[nomeris--]);

console.log('----------------');

// Lyginant, jei rezultatas tenkina palyginimo sąlygą, tai į console išvesti žodį “Pomidoras”, o jei sąlyga nėra tenkinama, išvesti sakinį “Bandykite kitą kartą.”.

console.log(' ');

const nr1 = 5;
const nr2 = 3;
let nr3 = 1;

if ((nr1 + nr2) == nr3){
    console.log('Pomidoras');
}
else {
    console.log('Bandykite kitą kartą');
}

console.log('----------');

console.log('didžiausias ir mažiausias iš nr1:', nr1, ', nr2:', nr2, ', nr3:', nr3);

if (nr1 > nr2 && nr1 > nr3 && nr2 < nr3){
    console.log('nr1 didžiausias, nr2 mažiausias');
}
else if (nr1 > nr2 && nr1 > nr3 && nr3 < nr2){
    console.log('nr1 didžiausias, nr3 mažiausias');
}
else if (nr1 < nr2 && nr2 > nr3 && nr1 < nr3){
    console.log('nr2 didžiausias, nr1 mažiausias');
}
else if (nr1 < nr2 && nr2 > nr3 && nr3 < nr1){
    console.log('nr2 didžiausias, nr3 mažiausias');
}
else if (nr1 < nr2 && nr2 < nr3 && nr1 < nr2){
    console.log('nr3 didžiausias, nr1 mažiausias');
}
else if (nr1 < nr2 && nr2 < nr3 && nr2 < nr1){
    console.log('nr3 didžiausias, nr2 mažiausias');
}
else if (nr1 == nr2 && nr1 == nr3){
    console.log('visi nr lygūs');
}

console.log('-----------');
console.log('-----------');

