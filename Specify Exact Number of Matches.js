// Change the regex timRegex to match the word Timber only when it has four letter m's.

let sampleWord = "astro";
// let pwRegex = /(?=\w{6,})(?=\D*\d{2,})/; // Change this line
let pwRegex = /(?=\w{6,})/; // Change this line

let result = pwRegex.test(sampleWord);
console.log(result);