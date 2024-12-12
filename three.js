import fs from 'fs'
let data=fs.readFileSync('abc.txt','utf-8')
console.log(data);


let data1=fs.readFile('abc.txt','utf-8')
console.log(data1);
