let hello = "   Hello, World!  ";
let shouldBeEqual = "Hello, World!"
console.log(shouldBeEqual);
//too dificult v
let wsRegex = /(\W+)(\w+)(\W+)(\w+)(\W+)(\W+)/; // Change this line
let condition = "$2$3$4!"
let result = hello.replace(wsRegex,condition)
console.log(result);
// logical v, we remove all whitespaces at the end and at the beginig
let removeAllwsRegex = /^\s+|\s+$/g;
let condition1 = ""
let result1 = hello.replace(removeAllwsRegex,condition1)
console.log(result1);
// more simple
let trimResult = hello.trim()
console.log(trimResult);
