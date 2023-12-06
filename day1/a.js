//import { open } from 'node:fs/promises';
const fs = require('fs');
const readLine = require('readline');

const re1 = /(\d)/
const re2 = /.*(\d).*?$/

const file = fs.createReadStream('day1/testinput1a.txt');
var  lineReader = readLine.createInterface({
    input: file,
    terminal: false
});
var sum = 0;
lineReader.on("line", function (line) {
        console.log(line)
        siffer1 = line.match(re1)[1];
        siffer2 = line.match(re2)[1];
        console.log('siffer1=', siffer1, ' siffer2=', siffer2);
        sum += siffer1 * 10 + siffer2 
});
console.log('Sum=', sum);
