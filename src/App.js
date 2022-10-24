import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import { data } from "./components/ColorData";
import Colorpage from "./components/Colorpage";
import AddColor from "./components/AddColor";
import './index.css'

function App() {
  const [colors, setColor] = useState([{colorName: '', colorValue:''}]);

  useEffect(() => {
    setColor(data);
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Home colors={colors}/>}></Route>
      <Route path='/colors/new' element={<AddColor colors ={colors} setColor = {colors}/>}></Route>

      <Route path='/colors/:shades' element={<Colorpage colors={colors}/>}/>
    </Routes>
  );
}

export default App;
