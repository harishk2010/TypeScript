"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var score = 3;
score = 44;
score = "44";
score = false;
var harish = { name: "harish", id: 123 };
harish = { username: "krishna", id: 321 };
//function
getDbId(3);
getDbId("3");
function getDbId(id) {
    // id.toLowerCase()//will show error
    if (typeof id === "string") {
        ///union narrowing
        id.toLowerCase();
    }
}
var data = [1, 2, 3, "4"];
var data1 = [1, 2, 3, 4];
var data2 = ["1", "2", "3", "4"];
var data3 = [1, 2, 3, 4]; /// it can either be full number or full string array
var seatAllotment;
seatAllotment = "aisle";
