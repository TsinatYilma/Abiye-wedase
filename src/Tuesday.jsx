import { useState, useContext } from "react";
import { myContext } from "./App";
import { TuesdayAlbum } from "./album";

export default function Tuesday(){
    const [tuesdayVisible, setTuesdayVisiblel] = useState(false);
    const context = useContext(myContext);

    function handleTuesdayVisiblity(){
        setTuesdayVisiblel((prevState)=> !prevState)
    }
    const { setWedase, handleMenuVisiblity, selectedWedase } = context || {};
    function handleWedase(id){
        setWedase(TuesdayAlbum.find(song => song.id === id));
    };

    const handleSelectedWedase = (id) =>{
        handleWedase(id)
        handleMenuVisiblity()
    }
    
    return(
        <li className="flex flex-col">
                        <div className="flex justify-between items-center">
                            <h2>ዘሰሉስ</h2> <img className="w-12 h-12" src="\assets\other\down-arrow.png" alt="" onClick={handleTuesdayVisiblity}/>
                        </div>
        {tuesdayVisible && (
            <div className="flex justify-start">
                <ul className="flex flex-col ml-2 lg:ml-10">
                {[
                'አክሊለ ምክሕነ',
                'ዓቢይ',
                'ዕፅ',
                'ገራዕት',
                'ተ.ኦ ወላዲተ እግዚእ',
                'ተ.እ ድልወ',
                'ኦ ድንግል',
                'ቃለ አብ',
                'ውእቱኬ',
                'ዕበያ',
                'ዘውእቱ እብን',
                'ኮንኪ',
                'አንቲ እሙ',
                'አይ ልሳን',
                'ተ.ኦ ማርያም',
              ].map((name, index) => (
                    <li key={index} className="" onClick={()=>handleSelectedWedase(index+1)}>{index+1}. {name}</li>))}
                </ul>
            </div> )}
            </li>
            )
    
}