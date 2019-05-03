var fs = require('fs')

let contents = (fs.readFileSync('names.txt','utf8'));
   // console.log(contents)
let namesArray = contents.split('\n')
   // console.log(namesArray)
let numbers = (fs.readFileSync('numbers.txt','utf8'));
let numbersArray = numbers.split('');

let sum = 0
for (i=0;i<(numbersArray.length);i++){
   sum += Number(numbersArray[i])
}
console.log(sum)