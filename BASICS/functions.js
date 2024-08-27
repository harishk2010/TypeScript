"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function addTwo(num) {
    return num + 2;
}
function toUpper(val) {
    return val.toUpperCase();
}
function signup(name, email, isPaid) { }
/////even proper way is below
function addTwoProper(num) {
    return num + 2;
}
signup("harish", "har@gamil.com", false);
addTwo(5);
toUpper("harish");
// function getValue(val):boolean{
//     if(val>5) return true
//     return "great"
// }
var getHello = function (s) {
    return "something";
};
var heros = ["Heman", "superman", 'batman'];
heros.map(function (hero) {
    return "string";
});
function consoleError(msg) {
    console.log(msg);
    // return 398482
}
///NEVER ( Some functions never returns a value)
function handleError(msg) {
    throw new Error(msg);
}
