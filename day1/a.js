const { open } = require('node:fs/promises');

const re1 = /(\d)/
const re2 = /.*(\d).*?$/

let sum = 0;
let siffer1 = 0;
let siffer2 = 0;
( async () => {
    const file = await open('day1/input1a.txt');
    for await ( const line of file.readLines()) {
        //console.log(line)
        siffer1 = Number(line.match(re1)[1]);
        siffer2 = Number(line.match(re2)[1]);
        //console.log('siffer1=', siffer1, ' siffer2=', siffer2);
        sum += siffer1 * 10 + siffer2 
    }
console.log('Day 1 part a');
console.log('Sum=', sum);
})();

