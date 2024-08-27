interface Student{
    name:string
    age:number
    class:number
    addmarks():number
}
abstract class square{
    s:number
    area:number
    volume:number
}

function calculate(a:number,b:number,c:number):number{
    if( a && b && c){
        return a*b*c
    }else if (a*b){
        return a*b
    }
    return a
}

console.log(calculate(1,2,3))




function sumOfThree<T>(one:T,two:T,three:T):T{
    let result: number = 0
    if(typeof one === 'number' && typeof two === 'number' && typeof three === 'number'){
             result = one + two + three 
    }
    return result as T
}
console.log(sumOfThree(4, 56,8));

export {}