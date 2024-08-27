"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var User = {
    name: "harish",
    email: "absdkba@anfa.com",
    isActive: true,
};
function singUp(obj) {
    //   console.log(obj.name, obj.email);
    return { name: "", email: "" };
}
singUp({ name: "harish", email: "" });
///
function creatUser(_a) {
    var sring = _a.name, boolean = _a.isPaid;
}
creatUser({ name: "harish", isPaid: true });
/// best practise
function firstresponse() {
    return { name: "", isPaid: "true" };
}
function response(_a) {
    var name = _a.name, email = _a.email;
    return {};
}
// function response({name:string,email:string}){
//     return {}
// };
response({ name: "", email: "" }); /// but there is a bad behaviour(unusual or Odd) you can directly pass the User object into the function
var myUser = {
    _id: "123",
    name: " harish ",
    email: " gost@mail.com",
    isActive: false
};
myUser.email = "great@gmail.com";

