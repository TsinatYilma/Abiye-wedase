import { useState, useContext } from "react";
import { myContext } from "./App";
import { ThursdayAlbum } from "./album";

export default function Thursday() {
    const [thursdayVisible, setThursdayVisible] = useState(false);
    const context = useContext(myContext);

    function handleThursdayVisiblity() {
        setThursdayVisible(prevState => !prevState);
    }
    
    const { setWedase, handleMenuVisiblity, selectedWedase } = context || {};

    function handleWedase(id) {
        console.log("i am not the problem");
        console.log(selectedWedase);
        console.log(id);
        setWedase(ThursdayAlbum.find(song => song.id === id));
    }

    const handleSelectedWedase = (id) => {
        handleWedase(id);
        handleMenuVisiblity();
    };

    return (
        <li className="flex flex-col">
            <div className="flex justify-between items-center">
                <h2>ዘሐሙስ</h2> 
                <img className="w-12 h-12" src="\assets\other\down-arrow.png" alt="" onClick={handleThursdayVisiblity} />
            </div>

            {thursdayVisible && (
                <div className="flex justify-start">
                    <ul className="flex flex-col ml-2 lg:ml-10">
                        {[
                            'ዕፀ እንተ ርእየ',
                            'ናዓብየኪ',
                            'ወእጹብ',
                            'ነሥኣ',
                            'መሃለ',
                            'ዳዊት',
                            'አሃዱ',
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
