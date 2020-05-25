const moment = require("moment");
const chalk = require('chalk');
const numbers = require('./scripts/numbers.js');

class AdventureCommunist {

    constructor(title) {
        this.title = title;
        this.curTime = Date.now();
        this.multiplier = 1;
        this.making = 0;
        this.having = 0;
        this.want = 0;
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

const adventures = [];
adventures[0] = new AdventureCommunist('Shuriken');
adventures[0].makePerSecond(1.19, 'HH');
adventures[0].iHave(23.51, 'II');
adventures[0].iWant(25,'II');

adventures[1] = new AdventureCommunist('Shoguns');
adventures[1].makePerSecond(1.20, 'HH');
adventures[1].iHave(267 * 100, 'HH');
adventures[1].iWant(700 * 100, 'HH');


adventures[2] = new AdventureCommunist('Kaiju');
adventures[2].makePerSecond(10.45, 'EE');
adventures[2].iHave(20 * 10, 'FF');
adventures[2].iWant(50 * 10, 'FF');


console.clear();
console.log(chalk.bgRed(`                                                                                             `));
console.log(chalk.bgRed("                              ADVENTURE COMMUNIST CALCULATIONS                               "));
console.log(chalk.bgRed(`                                                                                             `));
adventures.forEach(adventure => {
    const { days, hours, minutes } = adventure.timeObject;
    console.log(`\n`);
    console.log(`   I need:                 ${adventure.neededStill} ${adventure.title}`);
    console.log(`   Should have that in:    ${days}, ${hours} and ${minutes}`);
    console.log(`   So check in at:         ${adventure.checkInTime}`);
})
console.log(`\n`);
console.log(chalk.bgBlackBright(`                                                                                             `));
console.log(chalk.bgBlackBright("                                    MADE BY Peter Nielsen                                    "));
console.log(chalk.bgBlackBright(`                                                                                             `));
