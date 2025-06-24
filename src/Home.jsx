import { useState } from "react"
import MySwiper from "./mySwipper"
import MyMusicPlayer from "./musicPlayer"
import Menu from "./menu"

export default function Home({wedase}){
    if(wedase){
        console.log("i am available")
    }
    console.log("i am not available")
    return(
        <div className="h-screen bottom-0 w-full">
          <div className="md:ml-60 h-full  max-w-full flex justify-center items-start p-5 xs:p-0 md:flex  md:justify-around md:flex-row-reverse ">
              
              <div className="flex flex-col justify-center  mt-14 gap-20 xs:mt-0 xs:p-5 xs:gap-14 max-w-full rounded-lg shadow-[0px_0px_1px_rgba(0,0,0,0.9)]  xs:max-w-[360px]  xs:backdrop-blur-lg xs:shadow-[0px_0px_10px_5px_rgba(0,0,0,0.2)]"> 
                <div className="flex justify-center items-center  mt-20 xs:mt-14 mb-0  h-[70%] rounded-lg shadow-[0px_0px_1px_rgba(0,0,0,0.9)] ">
                  {<MySwiper wedase={wedase}/>}
                </div>
                <div className="xs:m-5 mb-14 xs:mt-14 h-1/3 flex items-end ">
                   <MyMusicPlayer wedase={wedase}/>
                </div>
              </div>
          </div>
        </div>
     )

}