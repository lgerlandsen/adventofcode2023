const { open } = require('node:fs/promises');

const re1 = /(one|two|three|four|five|six|seven|eight|nine|\d)/
const re2 = /.*(one|two|three|four|five|six|seven|eight|nine|\d).*?$/
const json_findnumbers = {"one":1,"two":2,"three":3,"four":4,"five":5,"six":6,"seven":7,"eight":8,"nine":9,
                          "0":0,"1":1,"2":2,"3":3,"4":4,"5":5,"6":6,"7":7,"8":8,"9":9 };
let sum = 0;
var siffer1 ;
var siffer2 ;
( async () => {
    const file = await open('day1/testinput1b.txt');
    for await ( const line of file.readLines()) {
        //console.log(line)
        siffer1 = line.match(re1)[1];
        siffer2 = line.match(re2)[1];
        //console.log('siffer1=', siffer1, ' siffer2=', siffer2);
        //console.log(json_findnumbers[siffer1], " + " , json_findnumbers[siffer2]);
        sum += Number(json_findnumbers[siffer1]) * 10 + Number(json_findnumbers[siffer2]);
    }
console.log('Day 1 part b');
console.log('Sum=', sum);
})();
