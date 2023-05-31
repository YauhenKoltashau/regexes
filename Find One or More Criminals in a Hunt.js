let inputPhrase = "P1P5P4CCCcP2P6P3"
let reCriminals = /C+/g; // Change this line
let result = inputPhrase.match(reCriminals)
console.log(result);
