console.clear();

/**
 * Funkcija skirta rasti asiu kieki automobilyje iš duotų ratų skaičiaus
 * @param {a} a ratu kiekis
 * @returns asiu skaicius
 */

function asiuskaicius(a){
    let asys = 0;
    if (a > 4) {
        asys = ((a - 2) / 4) +1;
    } else {
        asys = a / 2;
    }
    return asys
}


console.log(asiuskaicius(4)); // 2 > 2+2
console.log(asiuskaicius(10)); // 3 > 2+4+4
console.log(asiuskaicius(14)); // 4 > 2+4+4+4
console.log(asiuskaicius(18)); // 5 > 2+4+4+4+4

console.clear();

function stringRepeat(string, count) {
    let text = '';
    for (let i=0; i < count; i++){
        text += string;
    }
    return text
}

function christmasTree(height) {
    for (let i=0; i<height; i++) 
        
        {
        let sluoksnis = '';

        sluoksnis += stringRepeat (' ', height - i - 1);

        sluoksnis += '@';

        sluoksnis += stringRepeat ('*', i * 2 - 1);

        sluoksnis += '@';

        console.log(sluoksnis);
        // console.log(stringRepeat(' ', height - i - 1) + stringRepeat('*', i * 2 + 1));
    }
// console.log(stringRepeat(' ', height - 1) + stringRepeat('#',  1));

}

// tree(5);
christmasTree(10);

//  *         4sp    1
// ***        3sp    3
//*****       2sp    5
// *******      1sp    7
//*********     0sp    9
//    #         4sp