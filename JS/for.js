const sayhiii = 'hi';
const saybye = 'ate';
const countt = 6;

console.log('Pries cikla');

for (let i=0; i<countt; i++) {
    console.log(sayhiii);
    console.log(saybye);
}

console.log('Po ciklo');

console.log('----------------');




const nuo = 5;
const iki = 5;

let sumaa = 0;

for (let i = nuo; i <= iki; i++) {
    sumaa = sumaa + i;
}

const rezzz = `suma nuo ${nuo} iki ${iki} yra ${sumaa}`

console.log(rezzz);

console.log('-------------------------');

const raides = ['a', 'b', 'c', 'd', 'e'];

const nulis = 0;

let isgalo = raides[4];

for (let i=3; i>=nulis; i--) {
    isgalo = isgalo + raides[i];
}
console.log(isgalo);

// for (let i = 0; i < word.length; i++) {
//     const symbol = word [i];
//     reverse = symbol + reverse;
// }

// console.log(word, reverse);


const word = 'Labas';
let reverse = '';

for (let i = 0; i < word.length; i++) {
    const symbol = word [word.length -1 -i];
    reverse = reverse + symbol;
}
console.log(reverse);

console.log('--------------------------');

// const fromm = 0;
// const too = 11;
// const dal = 3;
// let kiekkartu = 0;

// for (let i = fromm; i <= too; i++){
//     if ((i%dal) == 0) {
//         kiekkartu++;
//     }
// }
// console.log(kiekkartu);

// console.log('-------------');


const fromm = 0;
const too = 11;
const dal = 3;
let kiekkartu = 0;

for (let i = fromm; i <= too; i++){
    if ((i%dal) == 0) {
        kiekkartu++;
    }
}
console.log(kiekkartu);

console.log('-------------');