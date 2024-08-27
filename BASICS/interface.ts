interface User{
    readonly dbId:number
    email:string,
    userId:number,
    googleId?:string,
    // startTrial:()=>string  //or the below way
    startTrial():string
    getCoupon( couponname:string , value : number): number
}
interface User{
    githubId:string
}
interface Admin extends User{
    role: "admin" | "ta" | "learner"
}
const harish:User={
    githubId:"githubId",// called as reopening of interface
    dbId:9,
    email:"harish@krishna.com",
    userId:1234,
    startTrial:()=>{
        return "string"
    },
    getCoupon:(name:"offer",off:50)=>{
        return 50
    }

}
export {}

