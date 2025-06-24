import { useState, useContext } from "react";
import { myContext } from "./App";
import { SaturdayAlbum } from "./album";

export default function Saturday() {
    const [saturdayVisible, setSaturdayVisible] = useState(false);
    const context = useContext(myContext);

    function handleSaturdayVisiblity() {
        setSaturdayVisible(prevState => !prevState);
    }
    
    const { setWedase, handleMenuVisiblity, selectedWedase } = context || {};

    function handleWedase(id) {
        console.log("i am not the problem");
        console.log(selectedWedase);
        console.log(id);
        setWedase(SaturdayAlbum.find(song => song.id === id));
    }

    const handleSelectedWedase = (id) => {
        handleWedase(id);
        handleMenuVisiblity();
    };

    return (
        <li className="flex flex-col">
            <div className="flex justify-between items-center">
                <h2>ዘቀዳሚት</h2> 
                <img className="w-12 h-12" src="\assets\other\down-arrow.png" alt="" onClick={handleSaturdayVisiblity} />
            </div>

            {saturdayVisible && (
                <div className="flex justify-start">
                    <ul className="flex flex-col ml-2 lg:ml-10">
                        {[
                            'ንጽህት ወብርህት',
                            'ናስተበጽዕ',
                            'ከመ ከብካብ',
                            'አ.ው ዘመድ',
                            'ኮንኪ',
                            'አ.ው ደብተራ',
                            'ተሰመይኪ',
                            'አ.ው ሰዋስው',
                            'ናሁ እግዚእ',
                            'ተ.ኦ ምልእተ ጸጋ',
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
