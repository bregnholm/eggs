const moment = require("moment");
const walks = require('./walks.json');
const fromMoment = moment([2020, 0]);
const daysthisYear = moment([2021, 0]).diff(fromMoment, 'days');

const metersInADay = 3000;
const metersInAYear = metersInADay * daysthisYear;
const daysPassed = moment().diff(fromMoment, 'days');


const walkedSoFarPerDay = 2400;
// const walkedSoFar = walkedSoFarPerDay * daysPassed;


const fullwalks = () => {
    const walksfull = [];
    for (let day = 0; day < daysPassed; day++) {
        const momentDay = fromMoment.format('Y-MM-DD');
        const push = { date: momentDay, meters: walks[momentDay] || walkedSoFarPerDay}
        walksfull.push(push);
        fromMoment.add(1, 'd');
    }

    return walksfull;
}

const walkedSoFar = fullwalks().reduce((prev, curr) => (prev.meters || prev) + curr.meters);
const average = (walkedSoFar) / (daysPassed);
const walkedInTotalIfKept = (average * (daysthisYear - daysPassed)) + walkedSoFar;
const youNeed = (metersInAYear - walkedSoFar) / (daysthisYear - daysPassed);

console.clear();
console.log(`\n\n`)
console.log(`Goal:              ${metersInAYear/1000}km in a year`);
console.log(`You have walked:   ${walkedSoFar/1000}km this year so far`);
console.log(`Average:           ${(average/1000).toFixed(2)}km this year so far`);
console.log(`\n\n`)
console.log(`Prospected result: ${(walkedInTotalIfKept/1000).toFixed(2)}km this year`);
console.log(`\n\n`)
// console.log(fullwalks());
console.log("To reach the goal you should the rest of the year")
console.log(`Walk at least:     ${(youNeed / 1000).toFixed(2)}km per day`);
console.log(`\n\n`)
// console.log("hello");