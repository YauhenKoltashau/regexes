// Change the regex ohRegex to match the entire phrase Oh no only when it has 3 to 6 letter h's.

let ohStr = "Ohhhh no";
let ohRegex = /Oh{3,6}\sno/; // Change this line
let resultMatch = ohStr.match(ohRegex);
let resultTest = ohRegex.test(ohStr)
console.log('resultMatch: ' + resultMatch);
console.log('resultTest: '+ resultTest);

let A4 = "Saaaa h";
let A2 = "aah";
let multipleA = /sa{3,5}\sh/i;
console.log(multipleA.test(A4));
console.log(A4.match(multipleA));
console.log(multipleA.test(A2));
console.log(A2.match(multipleA));


