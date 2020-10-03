//kamil salawa oct 2020

let raceNumber = Math.floor(Math.random() * 1000);

let early = false;
let age = 1;

if (early && age > 18) {
    raceNumber += 1000;
}

if (age > 18 && early) {
    console.log(`Race starts at 9:30am, your number is ${raceNumber}.`)
} else if (age > 18 && ! early){
    console.log(`Race starts at 11:00 am. Your number is ${raceNumber}.`)
} else {
    console.log(`Race starts at 12:30, your race number is ${raceNumber}.`)
}