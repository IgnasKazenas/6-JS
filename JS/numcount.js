console.clear ();


    // if (number.toString() === 'NaN') {
    //     return 'netinkamo tipo reikšmė';
    // }

function numcount(number) {
    const text = '' + number;

// gaudome ne skaiciaus tipus
if (typeof number !== 'number') {
    return 'Netinkamo tipo reiksme (turi buti skaicius).';
}

// gaudome skaiciau tipa, bet ne skaicius (pvz: NaN, Infinity)
if (isFinite(number) === false) {
    return 'Netinkama reiksme (turi buti normalus skaicius).';
}

let ilgis = text.length;

// o jeigu tai desimtainis, tai eliminuojame taska
if (number % 1 !== 0) {
    ilgis--;
}

// jeigu neigiamas skaicius, tai eliminuojame minusa
if (number < 0) {
    ilgis--;
}

    return ilgis;
}

console.log(numcount('a'));
console.log(numcount(314));
console.log(numcount(NaN));
console.log(numcount(-5));