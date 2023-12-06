const { open } = require('node:fs/promises');

const re1 = /(one|two|three|four|five|six|seven|eight|nine|\d)/
const re2 = /.*(one|two|three|four|five|six|seven|eight|nine|\d).*?$/

let sum = 0;
var siffer1 ;
var siffer2 ;
( async () => {
    const file = await open('day1/testinput1b.txt');
    for await ( const line of file.readLines()) {
        //console.log(line)
        siffer1 = line.match(re1)[1];
        siffer2 = line.match(re2)[1];
        console.log('siffer1=', siffer1, ' siffer2=', siffer2);
        //sum += siffer1 * 10 + siffer2 
    }
console.log('Day 1 part b');
//console.log('Sum=', sum);
})();
