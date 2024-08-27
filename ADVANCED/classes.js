"use strict";
// class User {
//   public email: string;
//   name: string;
//   private readonly city: string = ""; /// private or '#'
//   constructor(email: string, name: string) {
//     this.email = email;
//     this.name = name;
//   }
// }
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
//best professional practice
var User = /** @class */ (function () {
    function User(email, name) {
        this.email = email;
        this.name = name;
        this.coursecount = 1;
    }
    User.prototype.deleteMsg = function () {
        console.log('delete message');
    };
    Object.defineProperty(User.prototype, "getEail", {
        get: function () {
            return "email".concat(this.email);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(User.prototype, "countOfCourse", {
        get: function () {
            return this.coursecount;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(User.prototype, "courseCount", {
        set: function (courseNum) {
            if (courseNum <= 1) {
                throw new Error("cousrese count should be more than 1");
            }
            this.coursecount = courseNum;
        },
        enumerable: false,
        configurable: true
    });
    return User;
}());
var SubUser = /** @class */ (function (_super) {
    __extends(SubUser, _super);
    function SubUser() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /// while intatiating a object from the another class , all the properties from public 
        /// will be accessed but the private properties of User class will not be accesesed 
        /// due to the usage of private access modifiers
        _this.isFamily = true;
        return _this;
    }
    SubUser.prototype.changeCourseCount = function () {
        this.coursecount = 5; // can be changed now because the access modifer has been set 
        // to protected=> which means protected properties can be asscessed
        // from the parent class and it all other sub class( extended classes)
    };
    return SubUser;
}(User));
var harish = new User("harish@mail.com", "harish");
// access modifiers as the anme suggests limits the usage or access of the 
//to the defined value or method
