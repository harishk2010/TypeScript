abstract class TakePhoto{
    constructor(
        public cameraMode:string,
        public burst:number
    ){}
    abstract getSepia():void
    getReelTime():number{
        return 10
    }
}
class Instagram extends TakePhoto{
    constructor(
        public cameraMode:string,
        public burst:number,
        public filter:string
    ){
        super(cameraMode,burst)
    }
    getSepia(): void {
        console.log("return something")
    }
    

}
const harish=new Instagram("test1",3,"white")
harish.getReelTime()

export {}