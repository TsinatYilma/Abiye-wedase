import { useState, useContext } from "react";
import { myContext } from "./App";
import { MondayAlbum } from "./album";

export default function Monday(){
    const [mondayVisible, setMondayVisiblel] = useState(false);
    const context = useContext(myContext);

    function handleWensdayVisiblity(){
        setMondayVisiblel((prevState)=> !prevState)
    }
    const { handleMenuVisiblity, selectedWedase, setWedase } = context || {};
    function handleWedase(id){
        setWedase(MondayAlbum.find(song => song.id === id));
    };

    const handleSelectedWedase = (id) =>{
        handleWedase(id)
        handleMenuVisiblity()
    }
    
    return(
        <li className="flex flex-col">
                        <div className="flex justify-between items-center">
                            <h2>ዘዘሰኑይ</h2> <img className="w-12 h-12" src="\assets\other\down-arrow.png" alt="" onClick={handleWensdayVisiblity}/>
                        </div>
        {mondayVisible && (
            <div className="flex justify-start">
                <ul className="flex flex-col ml-2 lg:ml-10">
                {[
                'ፈቀደ',
                'ለሔዋን',
                'ኢየሱስ',
                'ርእየ',
                'ተፈሣህ',
                'ዘሃሎ',
                'ተ.ኦ ቤተልሔም',
                'ትትፌሣሕ',
                'ብርሃን',
              ].map((name, index) => (
                    <li key={index} className="" onClick={()=>handleSelectedWedase(index+1)}>{index+1}. {name}</li>))}
                </ul>
            </div> )}
            </li>
            )
    
}