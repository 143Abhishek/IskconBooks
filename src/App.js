import { useState } from 'react';
import About from './Component/About';
import Books from './Component/Books';
import Home from './Component/Home';
import NavBar from './Component/navBar';
import {BrowserRouter, Route, Routes} from "react-router-dom";


function App() {  
  const [mode, setMode] = useState('light');
  const [text, setText] = useState('dark');

  const toogleMode = ()=>{
    if (mode === 'light') {
      setMode('dark');
      setText('light')
    } else {
      setMode('light');
      setText('drk')
    }
  }

  return (
    <BrowserRouter>
    <NavBar mode={mode} toogleMode={toogleMode} text={text} />
    <Routes>
      <Route path='/' element={<Home text={text} mode={mode} />} />
      <Route path='Books' element={<Books  text={text} mode={mode}/>} />    
      <Route path='About' element={<About text={text} mode={mode}/>} />
    </Routes>    
    </BrowserRouter>
  );
}

export default App;
