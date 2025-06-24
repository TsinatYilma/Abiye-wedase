import { useState, useContext } from "react";
import { myContext } from "./App";
import { SundayAlbum } from "./album";

export default function Sunday() {
    const [sundayVisible, setSundayVisible] = useState(false);
    const context = useContext(myContext);

    function handleSundayVisiblity() {
        setSundayVisible(prevState => !prevState);
    }
    
    const { setWedase, handleMenuVisiblity, selectedWedase } = context || {};

    function handleWedase(id) {
        console.log("i am not the problem");
        console.log(selectedWedase);
        console.log(id);
        setWedase(SundayAlbum.find(song => song.id === id));
    }

    const handleSelectedWedase = (id) => {
        handleWedase(id);
        handleMenuVisiblity();
    };

    return (
        <li className="flex flex-col">
            <div className="flex justify-between items-center">
                <h2>ዘሰንበት</h2> 
                <img className="w-12 h-12" src="\assets\other\down-arrow.png" alt="" onClick={handleSundayVisiblity} />
            </div>

            {sundayVisible && (
                <div className="flex justify-start">
                    <ul className="flex flex-col ml-2 lg:ml-10">
                        {[
                            'ሰላም ለኪ',
                            'ተሰመይኪ ፍቅርተ',
                            'ታቦት',
                            'መቅደስ',
                            'አ.ው ተቅዋም',
                            'አ.ው ማዕጠንት',
                            'ተ.ኦ ማርያም',
                            'በትረ አሮን',
                            'ለኪ ይደሉ',
                        ].map((name, index) => (
                            <li key={index} className="" onClick={() => handleSelectedWedase(index + 1)}>
                                {index + 1}. {name}
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </li>
    );
}
