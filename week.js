"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var square = /** @class */ (function () {
    function square() {
    }
    return square;
}());
function calculate(a, b, c) {
    if (a && b && c) {
        return a * b * c;
    }
    else if (a * b) {
        return a * b;
    }
    return a;
}
console.log(calculate(1, 2, 3));



function sumOfThree(one, two, three) {
    var result = 0;
    if (typeof one === 'number' && typeof two === 'number' && typeof three === 'number') {
        result = one + two + three;
    }
    return result;
}
console.log(sumOfThree(3, 6, 8));
