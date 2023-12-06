//import { open } from 'node:fs/promises';
myFileReader();
const re1 = /(\d)/
const re2 = /(\d)*?$/
async function myFileReader() {
    const file = await fs.open('day1/testinput1a.txt');
    for await (const line of file.readLines()) {
        console.log(line)
        siffer1 = re1.line;
        siffer2 = re2.line;
        console.log('siffer1=', siffer1, ' siffer2=', siffer2);
    }
}
