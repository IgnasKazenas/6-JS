console.clear();

function bigNum(noList) {


    if (typeof noList !== 'object') {
        return 'Netinkamo tipo reikšmė'
    }
}

console.log(bigNum([1]));
console.log(bigNum([1]));
console.log(bigNum([1]));
console.log(bigNum([1]));
console.log(bigNum([1]));
console.log(bigNum([1]));
console.log(bigNum([1]));
console.log(bigNum([1]));

console.clear();


function largestnum(a) {
    if (a.length === 0 ) {
        return 'Sąrašas negali būti tuščias';
    } else if (typeof a !== 'object') {
        return 'Netinkamo tipo reikšmė';
    } else {
        let array = a;
        let largest = Math.max.apply(Math, array);
        return largest;
    }
    
}
console.log(largestnum([ -5, 78, 14, 0, 18 ]) );
console.log(largestnum(['asd', 9]) );

console.clear();

function largestnum(a) {
    if (a.length === 0 ) {
        return 'Sąrašas negali būti tuščias';
    }
    if (typeof a !== 'object') {
        return 'Netinkamo tipo reikšmė';
    } 

    let biggestNum = -Infinity;

    for (let i = 0; i < a.length; i++) {
        const currentNum = a[i];

        if (typeof currentNum === 'number') {
        if (currentNum > biggestNum) {
            biggestNum = currentNum;
            }
        }
    }
    return biggestNum;
    
}
console.log(largestnum([ -5, 78, 14, 0, 18 ]) );
console.log(largestnum([9]) );
console.log(largestnum([true, 9]) );