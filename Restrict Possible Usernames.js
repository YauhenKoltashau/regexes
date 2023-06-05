let username = "JackOfAllTrades10";
let userCheck = /^[a-z]([a-z]+\d*)$/i; // Change this line
let userCheck2 = /^[a-z]([a-z]+\d*|\d{2,})$/i; // Change this line
let resultItems = username.match(userCheck)

let result = userCheck.test(username);
console.log(result);
console.log(resultItems);


