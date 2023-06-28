// Use lookaheads in the pwRegex to match passwords that are greater than 5 characters long, and have two consecutive digits.
let password = "abchjkf123";
let checkPass = /(?=\w{3,6})(?=\D*\d)/;
console.log(checkPass.test(password));

let sampleWord = "astronaut";
let pwRegex = /(?=\w{6,})(?=\D*\d){2,}/; // Must be more than 6 characters and 2 consecutive digits
let pwRegex2 = /(?=\w{6,})/; // Must be more than 6 characters 
let result = pwRegex.test(sampleWord);
