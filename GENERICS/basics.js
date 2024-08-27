"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var score = [];
var name = [];
function idenityOne(val) {
    return val;
}
function idenityTwo(val) {
    return val;
}
function idenityThird(val) {
    /// the passed argument value's datatype is locked 
    return val;
}
idenityThird("");
//short cut // always reference the same letter or word
function idenityFOur(val) {
    return val;
}
idenityFOur({ branf: "", type: 8234 });
//// generic arrays
function getSearchProducts(products) {
    var index = 2;
    return products[index];
}
var getMoreSearchProducts = function (products) {
    var theIndex = 2;
    return products[theIndex];
};
