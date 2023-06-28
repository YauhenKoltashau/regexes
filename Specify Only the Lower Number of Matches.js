let haStr = "Hazzzzah";
let manyZ= "Ha" + "z".repeat(100) + "ah";
let haRegex = /Haz{4,}ah/; // Change this line
let result = haRegex.test(haStr);
let resultManyZ = haRegex.test(manyZ);

console.log(resultManyZ);
console.log(result);