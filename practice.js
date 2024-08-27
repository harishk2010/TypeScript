"use strict";
// interface User {
//     name: string;
//     age: number;
//     location: string;
//   }
Object.defineProperty(exports, "__esModule", { value: true });
//   type UserKeys = keyof User; // "name" | "age" | "location"
//   const key: UserKeys = 'name';
var Bird = /** @class */ (function () {
    function Bird() {
    }
    Bird.prototype.fly = function () {
        console.log("bird");
    };
    Bird.prototype.layeggs = function () {
        console.log("eggs");
    };
    return Bird;
}());
var Animal = /** @class */ (function () {
    function Animal() {
    }
    Animal.prototype.eat = function () {
        console.log("eat");
    };
    return Animal;
}());
var crow = new Bird();
if (crow instanceof Bird) {
    crow.fly();
}
else {
    console.log("not a bird");
}
var value = 123;
if (typeof value === "boolean") {
    console.log("boolean");
}
else {
    console.log("number");
}
function sum(a, b) {
    return a + b;
}
sum(7, 7);
function lengthof(arg) {
    console.log(arg.length);
    return arg;
}
lengthof({ length: 1, b: 2 });
