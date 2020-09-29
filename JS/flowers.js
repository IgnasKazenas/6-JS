/**
 * Geliu auginimas
 * 
 * vazonu kiekis: 20
 * pradinis geliu kiekis: 1
 * dauginasi: 1 (viena gele kasmet uzaugina 1 vaika)
 * 
 * Per kiek metu uzauginsime tiek geliu, jog butu uzimti visi vazonai
 */

function flowers(totalPotCount, initialFlowers, childrenGrowthRate) {
    let flowersCount = initialFlowers;
    let year = 1;
    // console.log(flowersCount);

    while (flowersCount < totalPotCount) {
        flowersCount = flowersCount + flowersCount * childrenGrowthRate;
        year ++

        console.log(year, '-', flowersCount);
    }
    return year;
}

console.log(flowers(200, 7, 2));