const User = {
  name: "harish",
  email: "absdkba@anfa.com",
  isActive: true,
};

////

type abc = {
  name: string;
  email: string;
};

function singUp(obj: abc): abc {
  //   console.log(obj.name, obj.email);
  return { name: "", email: "" };
}

singUp({ name: "harish", email: "" });
///

function creatUser({ name: sring, isPaid: boolean }) {}
creatUser({ name: "harish", isPaid: true });

/// best practise
function firstresponse(): { name: string; isPaid: string } {
  return { name: "", isPaid: "true" };
}

function response({ name, email }: { name: string; email: string }): {} {
  return {};
}
// function response({name:string,email:string}){
//     return {}

// };

response({ name: "", email: "" }); /// but there is a bad behaviour(unusual or Odd) you can directly pass the User object into the function
//as a object and it will show no error

/////READONLY AND OPTIONAL

type User = {
  readonly _id: string;
  name: string;
  email: string;
  isActive: boolean;
  creditcardDetails?: number; /// ' ? ' is the OPTIONAL
};

let myUser: User = {
  _id: "123",
  name: " harish ",
  email: " gost@mail.com",
  isActive: false,
};
myUser.email = "great@gmail.com";
// myUser._id="" // cant do this

//// mix and match of types

type cardNumber={
    cardnumber:string
}

type cardDate={
    carddate:string
}

type cardDetails= cardNumber & cardDate & {
    cvv:string
}

export {};
