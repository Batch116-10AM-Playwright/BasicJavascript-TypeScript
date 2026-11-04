
let A : string = "Hello We are fine and my Car number is : 567@!_783452 and car is Blue color";

let myRemoveAlpha : string = A.replace(/[a-zA-Z]/g, "")
let myRemoveNum : string = A.replace(/[0-9]/g, "")
let withSpec : string = A.replace(/[a-zA-Z0-9]/g, "");
let removeSpec : string = A.replace(/[^a-zA-Z0-9]/g, "");

console.log(myRemoveAlpha)
console.log(myRemoveNum)
console.log(withSpec)
console.log(removeSpec)
