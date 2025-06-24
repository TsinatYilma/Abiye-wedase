import { useState, useMemo, createContext } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from './navbar'
import Menu from './menu';
import CloseMenu from './closeMenu'
import Monday from './Monday';
import Home from './Home';
import { MondayAlbum } from "./album";

export const myContext = createContext(null);
function App() {
  const [menuVisible, setMenuVisiblity] = useState(false)

  const [selectedWedase, setWedase] = useState(null)

  

  function handleMenuVisiblity(){
    setMenuVisiblity((prevState)=>!prevState)
    console.log(menuVisible)
  }
  const contextValue = useMemo(() => ({ menuVisible, handleMenuVisiblity, selectedWedase, setWedase }), [menuVisible]);
  return (
    <Router>
     
      <myContext.Provider value={contextValue}>
      <NavBar />
      <CloseMenu/>
      <Menu />
      <Routes>
        <Route path='/' element={<Home wedase={selectedWedase}/>}/>
      </Routes>
      </myContext.Provider>
    </Router>
      
  )
  
}

export default App;
