let username = "JackOfAllTrades10";
// let userCheck = /^\D\w+\d$/g; // Change this line
let userCheck = /^[a-z]([a-z]+\d*|\d{2,})$/gi; // Change this line
let resultItems = username.match(userCheck)

let result = userCheck.test(username);
console.log(result);
console.log(resultItems);


