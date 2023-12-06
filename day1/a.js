//import { open } from 'node:fs/promises';
const fs = require('fs');
const readLine = require('readline');

const re1 = /(\d)/
const re2 = /(\d)*?$/

const file = fs.createReadStream('day1/testinput1a.txt');
var  lineReader = readLine.createInterface({
    input: file,
    terminal: false
});
lineReader.on("line", function (line) {
        console.log(line)
        siffer1 = re1.line;
        siffer2 = re2.line;
        console.log('siffer1=', siffer1, ' siffer2=', siffer2);
});
