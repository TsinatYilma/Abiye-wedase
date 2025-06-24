import { useState, useContext } from "react";
import { myContext } from "./App";
import { WensdayAlbum } from "./album";

export default function Wensday(){
    const [wensdayVisible, setWensdayVisiblel] = useState(false);
    const context = useContext(myContext);

    function handleWensdayVisiblity(){
        setWensdayVisiblel((prevState)=> !prevState)
    }
    const { setWedase, handleMenuVisiblity, selectedWedase } = context || {};
    function handleWedase(id){
        setWedase(WensdayAlbum.find(song => song.id === id));
    };

    const handleSelectedWedase = (id) =>{
        handleWedase(id)
        handleMenuVisiblity()
    }
    
    return(
        <li className="flex flex-col">
                        <div className="flex justify-between items-center">
                            <h2>ዘረቡእ</h2> <img className="w-12 h-12" src="\assets\other\down-arrow.png" alt="" onClick={handleWensdayVisiblity}/>
                        </div>
        {wensdayVisible && (
            <div className="flex justify-start">
                <ul className="flex flex-col ml-2 lg:ml-10">
                {[
                'ኩሉ ሠራዊተ',
                'ተነበዩ',
                'አንቲ ዘበአማን',
                'ረከብኪ',
                'ግብረ ድንግል',
                'የዓቢ ክብራ',
                'ሕዝቅኤል',
                'ኆኅትሰ',
              ].map((name, index) => (
                    <li key={index} className="" onClick={()=>handleSelectedWedase(index+1)}>{index+1}. {name}</li>))}
                </ul>
            </div> )}
            </li>
            )
    
}