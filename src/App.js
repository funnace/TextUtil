import './App.css';
import Navbar from './Components/Navbar';
//import About from './Components/About';
import React, { useState } from 'react'
import TextForm from './Components/TextForm';
import Alert from './Components/Alert';
//import {  BrowserRouter as Router,  Routes,  Route} from "react-router-dom";

function App() {
  const theme = (cls) => {
    document.body.className=""
    document.body.classList.add('bg-'+cls)
  }
  const [alert, setAlert] = useState(null)
  const showAlert = (message,type) => {
    setAlert({msg:message,
      type:type})
      setTimeout(() => {
        setAlert(null);
      }, 1500);
  }
 const [mode, setMode] = useState('light');
 const [modeText, setModeText] = useState('Enable Darkmode');
 const [textColor, setTextColor] = useState({color:"black"})
 const toggle = () => {
  if (mode === 'light') {
    document.body.className=""
    setMode('dark');
    setModeText('Disable Darkmode');
    setTextColor({color:"white"}); 
    document.body.style.backgroundColor = "#042743"
    showAlert("Darkmode Enabled","success")
  } else {
    document.body.className=""
    setMode('light');
    setModeText('Enable Darkmode'); 
    setTextColor({color:"black"}); 
    document.body.style.backgroundColor = "#95f9e3"
  }
  
};
  return (<>
   {/*<Router>
<Navbar home="Home" about="About" mode={mode} toggle={toggle} modeText={modeText} style={textColor}/>
<Alert alert={alert}/>
<div className="container my-3">

 <Routes>
 <Route exact path='/About' element={<About/>} />
    <Route exact path="/" element={<TextForm text="Enter the Text" mode = {mode} showAlert={showAlert}/>}/>
  </Routes>
  </div></Router>
  */}<Navbar home="Home" about="About" mode={mode} toggle={toggle} theme={theme} modeText={modeText} style={textColor}/>
<Alert alert={alert}/>
<div className="container my-3">
<TextForm text="Enter the Text" mode = {mode} showAlert={showAlert}/>
</div>
  </>
  );
}

export default App; 