//for styding
let result1 = "five one two four three".replace(/(\w+)\s(\w+)\s(\w+)\s(\w+)\s(\w+)/, '$2 $3 $5 $4 $1');
console.log(result1);

let str = "one two three";
let fixRegex = /(\w+)\s(\w+)\s(\w+)/; // Change this line
let replaceText = "$3 $2 $1"; // Change this line
let result = str.replace(fixRegex, replaceText);
console.log(result);