import { useContext } from "react";
import { myContext } from "./App";

export default function CloseMenu(){
    const context = useContext(myContext);
    if (!context) {
       console.error("CloseMenu is not inside myContext.Provider");
    }

   const { menuVisible, handleMenuVisiblity } = context || {};
    return(
        <>
       {menuVisible && <div className="h-full w-full fixed top-0 left-0 z-6" onClick={handleMenuVisiblity}></div>}
        </>
    )
}