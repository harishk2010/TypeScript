const score:Array<number>=[]
const name: Array<string>=[]

function idenityOne(val:boolean | number): boolean | number{
    return val
}

function idenityTwo(val:any):any{
    return val
}

function idenityThird<Type>(val:Type):Type{
    /// the passed argument value's datatype is locked 
    return val
}

idenityThird("")
//short cut // always reference the same letter or word
function idenityFOur<T>(val:T):T{
    return val
}

interface bottle{
    branf:string,
    type:number
}
idenityFOur<bottle>({branf:"",type:8234})


//// generic arrays

function getSearchProducts<T>(products:T[]):T{
    const index=2
    return products[index]
}

const getMoreSearchProducts= <T>(products:T[]):T=>{
    const theIndex=2
    return products[theIndex]
}
export {}