let quoteSample = "The five boxing wizards jump quickly.";
let nonAlphabetRegex = /\w/g; // Change this line
let result = quoteSample.match(nonAlphabetRegex)
console.log(result);