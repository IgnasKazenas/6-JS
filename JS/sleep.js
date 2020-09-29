/**
 * miego trukme: 7
 * ciklo trukme: 1.5
 * 
 * kiek miego ciklo turesim?    // 4
 */

function sleep (mTrukme, cTrukme) {
    return Math.floor(cTrukme / mTrukme);
    // let a = 0;
    // let totalTrukme = cTrukme;
    // while (totalTrukme < mTrukme) {
    //     totalTrukme = totalTrukme + cTrukme;
    //     a++;
    // }
    // return a;
}

console.log(sleep(7, 1.5));     // 4