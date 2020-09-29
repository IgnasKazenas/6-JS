/**
 * 
 */

function joke(jokesList, brake, showTime) {
    let jokesCount = 0;
    let jokeIndex = 0;
    let time = 0;

    while (time < showTime) {
        const jokeDuration = jokesList[jokeIndex];

        time += jokesList[jokeIndex];
        // console.log(jokeDuration, time);

        time += brake;
        jokesCount++;
        jokeIndex++;

        if (jokeIndex === jokesList.length) {
            jokeIndex = 0;
        }
    }
    return jokesCount;
}

const jonasJokes = [11, 3, 2, 4, 2, 5];
const timeout = 1;
const showLength = 60;

console.log(joke(jonasJokes, timeout, showLength));


anikdotai = [4, 9, 14]
pertrauka = 1

showtime = 1450

set = 30

repeat = showTime / set             // 48.333

pilnuPasirodymuLaikas = set * Math.floor(repeat)        // 1440

nepanaudotasLaikas = showtime - pilnuPasirodymuLaikas   // 10

// const anosJokes = [7, 5, 8, 4, 9];
// const anosShow = 45;

// console.log(joke(anosJokes, timeout, anosShow));

// const jonasJokes = [11, 3, 2, 4, 2, 5];
// const timeout = 1;
// const showLength = 60;

// console.log(joke(jonasJokes, timeout, showLength));