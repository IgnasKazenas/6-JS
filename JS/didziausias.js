console.clear()

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