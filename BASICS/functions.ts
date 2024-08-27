function addTwo(num: number) {
  return num + 2;
}

function toUpper(val: string) {
  return val.toUpperCase();
}

function signup(name: string, email: string, isPaid: boolean) {}
/////even proper way is below
function addTwoProper(num: number): number {
  return num + 2;
}

signup("harish", "har@gamil.com", false);

addTwo(5);
toUpper("harish");

// function getValue(val):boolean{
//     if(val>5) return true
//     return "great"
// }

let getHello = (s: string): string => {
  return "something";
};

const heros=["Heman","superman",'batman']

heros.map((hero):string=>{
    return "string"
})

function consoleError(msg:string):void{
    console.log(msg)
    // return 398482
}

///NEVER ( Some functions never returns a value)

function handleError(msg:string): never{
    throw new Error(msg)
}
export {};
