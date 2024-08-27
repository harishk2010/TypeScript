
// interface User {
//     name: string;
//     age: number;
//     location: string;
//   }
  
//   type UserKeys = keyof User; // "name" | "age" | "location"
//   const key: UserKeys = 'name';

class Bird{
    fly(){
        console.log("bird")
    }
    layeggs(){
        console.log("eggs")
    }
}

class Animal{
    eat(){
        console.log("eat")
    }
}

let crow=new Bird()

if(crow instanceof Bird){
    crow.fly()
}else{
    console.log("not a bird")
}


let value:boolean| number=123
if(typeof value==="boolean"){
    console.log("boolean")
}else{
    console.log("number")
}


function sum(a:number ,b:number):number{
    return a+b
}
sum(7,7)


interface check{
    length:number
}

function lengthof<T extends check>(arg:T):T{
    console.log(arg.length)
    return arg
}
lengthof({length:1,b:2})

export {}