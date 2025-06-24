import MySwiper from "./mySwipper"
import MyMusicPlayer from "./musicPlayer"

export default function DisplayWedase({wedase}){
    
    return(
       <div className="flex flex-col w-full h-full">
         <div className="flex justify-center items-center m-5 mb-0 h-1/2 rounded-lg shadow-[0px_0px_1px_rgba(0,0,0,0.9)]">
           {<MySwiper wedase={wedase}/>}
         </div>
         <div className="m-5  h-1/4  flex items-end">
            <MyMusicPlayer audio={wedase.audio}/>
         </div>
       </div>
    )
}