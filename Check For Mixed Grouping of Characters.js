// Fix the regex so that it checks for the names of Franklin Roosevelt or Eleanor Roosevelt in a case sensitive manner and it should make concessions for middle names.
// Then fix the code so that the regex that you have created is checked against myString and either true or false is returned depending on whether the regex matches.

let myString = "Eleanor Roosevelt";
let testString1 = "Franklin D. Roosevelt"
// let myRegex = /(Eleanor|Franklin).*\sRoosevelt/; // Change this line
let myRegex = /(Franklin|Eleanor).*\sRoosevelt/;// Change this line
let result = myRegex.test(testString1); // Change this line
console.log(result);
// After passing the challenge experiment with myString and see how the grouping works