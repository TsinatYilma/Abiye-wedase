import { useContext, useState } from "react";
import { myContext } from "./App";
import { Link, useNavigate } from "react-router-dom";
import './input.css'
import Monday from './Monday'
import Tuesday from "./Tuesday";
import Wensday from "./Wensday";
import Thursday from "./Thursday";
import Friday from "./Friday";
import Saturday from "./Saturday";
import Sunday from "./Sunday";




export default function Menu(){
    const context = useContext(myContext);
    if (!context) {
       console.error("Menu is not inside myContext.Provider");
    }
    const { menuVisible, handleMenuVisiblity, handleWedase } = context || {};

    
    
   

    return(
        <div className={` h-full bg-transparent text-white p-4 z-10 fixed top-0 left-0 bottom-0 w-52 bg-white transition-all  duration-700 ease-out overflow-y-auto ${menuVisible ? "translate-x-0" : "-translate-x-full"} md:translate-x-0 md:w-60`}>
            {console.log("menuVisible inside JSX:", menuVisible)} 
            <div className="">
                <img src="\assets\other\left-arrow.png" alt="" className="ml-auto " onClick={handleMenuVisiblity} width={25} height={25}/>
                <ul className="text-red-900 mt-7">
                    <Monday />
                    <Tuesday />
                    <Wensday />
                    <Thursday />
                    <Friday />
                    <Saturday />
                    <Sunday />
                </ul>
            </div>
        </div>
    )
}