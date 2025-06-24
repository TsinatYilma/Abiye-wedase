import { useState, useContext } from "react";
import { myContext } from "./App";
import { FridayAlbum } from "./album";

export default function Friday() {
    const [fridayVisible, setFridayVisible] = useState(false);
    const context = useContext(myContext);

    function handleFridayVisiblity() {
        setFridayVisible(prevState => !prevState);
    }
    
    const { setWedase, handleMenuVisiblity, selectedWedase } = context || {};

    function handleWedase(id) {
        console.log("i am not the problem");
        console.log(selectedWedase);
        console.log(id);
        setWedase(FridayAlbum.find(song => song.id === id));
    }

    const handleSelectedWedase = (id) => {
        handleWedase(id);
        handleMenuVisiblity();
    };

    return (
        <li className="flex flex-col">
            <div className="flex justify-between items-center">
                <h2>ዘዓርብ</h2> 
                <img className="w-12 h-12" src="\assets\other\down-arrow.png" alt="" onClick={handleFridayVisiblity} />
            </div>

            {fridayVisible && (
                <div className="flex justify-start">
                    <ul className="flex flex-col ml-2 lg:ml-10">
                        {[
                            'ቡ.አ እምአንስት',
                            'ለኪ ለባሕቲትኪ',
                            'ምክሖን',
                            'ሙዳይ ዕፍረት',
                            'ንጽህት',
                            'ትጸርሕ',
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
