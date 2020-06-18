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

// const walkedSoFar = fullwalks().reduce((prev, curr) => {
//     con
//     prev.meters + curr.meters
// });
// const youNeed = (metersInAYear - walkedSoFar) / (daysthisYear - daysPassed);

console.clear();
console.log(`\n\n`)
console.log(`You should walk ${metersInAYear/1000}km in a year`);
console.log(walkedSoFar);
// console.log(`You have walked ${walkedSoFar/1000}km this year`);
// console.log(fullwalks());
// console.log(`You should start walking ${(youNeed / 1000).toFixed(2)}km a day in order to make it`);
console.log(`\n\n`)
// console.log("hello");