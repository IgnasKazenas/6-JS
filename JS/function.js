console.log('------function-------');

function tusciaFunkcija () {
    return false;
}
console.log(tusciaFunkcija());

console.log('---------------');


console.clear();

function daugyba (p1, p2) {
    const sandaugosrezultatas = p1 * p2;
    return sandaugosrezultatas;
}

console.log(daugyba(4, 5));

    function interval (fromm, too, dal){
    let kiekkartu = 0;

    for (let i = fromm; i <= too; i++){
        if ((i%dal) == 0) {
            kiekkartu++;
        }
    }
return kiekkartu;
}

console.log(interval(0, 21, 5));
console.log(interval(-18, 35, 7));