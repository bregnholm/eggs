const moment = require("moment");
const chalk = require('chalk');
const numbers = require('./scripts/numbers.js');
// IN PROGRESS
class AdventureCommunist {

    constructor(title) {
        this.title = title;
        this.curTime = Date.now();
        this.multiplier = 1;
        this.making = 0;
        this.having = 0;
        this.want = 0;
        this.currency;
    }

    get iNeed() {
        return (this.want - this.having) * this.multiplier;
    }

    get neededStill() {
        const neededCurrency = this.stringName(this.iNeed);

        const smallNumber = Math.round((this.iNeed / numbers[neededCurrency] + Number.EPSILON) * 100) / 100;
        return chalk.red(smallNumber, neededCurrency);
        }

    get timeItTakes(){
        return Math.round(this.iNeed / this.making * 1000);
    }

    get checkInTime() {
        return chalk.greenBright(new Date(this.curTime + this.timeItTakes).toTimeString());
    }


    get timeObject() {
        const timing = moment.duration(this.timeItTakes);
        return {
            years: timing.years(),
            months: timing.months(),
            days: chalk.green(timing.days(), timing.days() === 1 ? 'day' : 'days'),
            hours: chalk.green(timing.hours(), 'hours'),
            minutes: chalk.green(timing.minutes(), 'minutes'),
            seconds: timing.seconds(),
        };
    }

    makePerSecond(make = 0, string = '') {
        this.making = this.turnInto(make, string);
    }

    iHave(have = 0, string = '') {
        this.having = this.turnInto(have, string);
    }

    iWant(want = 0, string = '') {
        this.want = this.turnInto(want, string);
    }

    turnInto = (number, string = 'One') => numbers[string] * number;

    stringName(number) {
        const closest = Object.values(numbers).reduce((prev, curr) => Math.abs(curr - number) < Math.abs(prev - number) ? curr : prev);
        return Object.keys(numbers).find(key => numbers[key] === closest);
    }
}

const ACshrines = new AdventureCommunist('Shuriken');
ACshrines.makePerSecond(230, 'GG');
ACshrines.iHave(1, 'II');
ACshrines.iWant(25,'II');

const AC = new AdventureCommunist('Scrolls');
AC.makePerSecond(1.50, 'EE');
AC.iHave(8.15, 'FF');
AC.iWant(68, 'FF');


console.clear();
console.log(chalk.bgRed(`                                                                                             `));
console.log(chalk.bgRed("                              ADVENTURE COMMUNIST CALCULATIONS                               "));
console.log(chalk.bgRed(`                                                                                             `));
console.log(`   I need:                 ${ACshrines.neededStill} ${ACshrines.title}`);
console.log(`   Should have that in:    ${ACshrines.timeObject.days}, ${ACshrines.timeObject.hours} and ${ACshrines.timeObject.minutes}`);
console.log(`   So check in at:         ${ACshrines.checkInTime}`);
console.log(`\n`);
console.log(`   I need:                 ${AC.neededStill} ${AC.title}`);
console.log(`   Should have that in:    ${AC.timeObject.days}, ${AC.timeObject.hours} and ${AC.timeObject.minutes}`);
console.log(`   So check in at:         ${AC.checkInTime}`);
console.log(chalk.bgGrey(`                                                                                             `));
console.log(chalk.bgGrey("                                    MADE BY Peter Nielsen                                    "));
console.log(chalk.bgGrey(`                                                                                             `));


