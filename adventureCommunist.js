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
        this.percentage = 0;
        this.bonus = 0;

    }

    get addPercentagePower() {
        const power = this.bonus * this.percentage;

        return power || 1;
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
        const date = new Date(this.curTime + this.timeItTakes);
        return chalk.greenBright(date.toLocaleDateString(), date.toLocaleTimeString());
    }


    get humanReadableTime() {
        const timing = moment.duration(this.timeItTakes);

        const ready = [];

        if(timing.years()) {
            ready.push(chalk.green(timing.years(), timing.years() === 1 ? 'year' : 'years'));
        }

        if(timing.months()) {
            ready.push(chalk.green(timing.months(), timing.months() === 1 ? 'month' : 'months'));
        }
        
        if(timing.days()) {
            ready.push(chalk.green(timing.days(), timing.days() === 1 ? 'day' : 'days'));
        }


        if(timing.hours()) {
            ready.push(chalk.green(timing.hours(), timing.hours() === 1 ? 'hour' : 'hours'));
        }
 
        if(timing.minutes()) {
            ready.push(chalk.green(timing.minutes(), timing.minutes() === 1 ? 'minute' : 'minutes'));
        }
        const last = ready.pop();

        return ready.join(", ") + ' and ' + last;
    }

    makePerSecond(make = 0, string = '') {
        this.making = this.turnInto(make * this.addPercentagePower , string);
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
adventures[0] = new AdventureCommunist('comrades for Hospitals');
//adventures[0].percentage = 0.27;
//adventures[0].bonus = 32760;
adventures[0].multiplier = 5;
adventures[0].makePerSecond(708.609, 'Thousand');
adventures[0].iHave(11.69, 'B');
adventures[0].iWant(23,'B');

adventures[1] = new AdventureCommunist('Potatoes');
adventures[1].percentage = 0.27;
adventures[1].bonus = 32760;
adventures[1].makePerSecond(4.26, 'LLL');
adventures[1].iHave(2.25, 'OOO');
adventures[1].iWant(3.7, 'OOO');


adventures[2] = new AdventureCommunist('Airports');
adventures[2].percentage = 0.27;
adventures[2].bonus = 32760;
adventures[2].makePerSecond(137.9, 'HHH');
adventures[2].iHave(70, 'KFC');
adventures[2].iWant(7378, 'KFC');


console.clear();
console.log(chalk.bgRed(`                                                                                             `));
console.log(chalk.bgRed("                              ADVENTURE COMMUNIST CALCULATIONS                               "));
console.log(chalk.bgRed(`                                                                                             `));
adventures.forEach(adventure => {
    console.log(`\n`);
    console.log(`   I need:                 ${adventure.neededStill} ${adventure.title}`);
    console.log(`   Should have that in:    ${adventure.humanReadableTime}`);
    console.log(`   So check in:            ${adventure.checkInTime}`);
})
console.log(`\n`);
console.log(chalk.bgBlackBright(`                                                                                             `));
console.log(chalk.bgBlackBright("                                    MADE BY Peter Nielsen                                    "));
console.log(chalk.bgBlackBright(`                                                                                             `));
