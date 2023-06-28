//the styding

let repeatStr = "row row row row row your boat";

let repeatRegex = /(\w+) \1 \1/;
console.log(repeatRegex.test(repeatStr)); 
console.log(repeatStr.match(repeatRegex));

// Use capture groups in reRegex to match a string that consists of only the same number repeated exactly three times separated by single spaces.

let repeatNum = "42 42 42";
let reRegex = /^(\d+) \1 \1(?!.)/; // Change this line
let resultTest = repeatNum.match(reRegex);
console.log(resultTest);

let reRegex1 = /^(\d+) \1 \1$/; // Change this line
let result = repeatNum.match(reRegex1);
console.log(result);