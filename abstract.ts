abstract class TakePhoto{
   constructor(
    cameraMode: string,
    filter: string
   ){

   } 

   abstract getSepia(): void
   getReelTime(): number{
    return 8;
   }
}

class Instagram extends TakePhoto{
    constructor(cameraMode: string, filter: string){
        super(cameraMode, filter);
    }
    getSepia(): void{
        console.log("getSepia");
    }
}

const nishut= new Instagram("testMode","testFilter")