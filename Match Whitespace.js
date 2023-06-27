let sample = "Whitespace is important in separating words";
let countNonWhiteSpace = /\S/g; // Change this line
let result = sample.match(countNonWhiteSpace)
let lengthOfResult = sample.match(countNonWhiteSpace).length;
console.log(result);
console.log(lengthOfResult);
