import React, { useState } from "react";
import Navbar from "./TextUtils-components/navbar";
import TextArea from "./TextUtils-components/TextArea";
import About from './TextUtils-components/About'
import "./App.css";
import Alert from "./TextUtils-components/Alert";
import {
  Route,
  Routes
} from "react-router-dom";


function App() {

  const [mode,setMode]=useState('light');
  const[alert,setAlert]=useState(null);

  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type:type
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }

  const toggleChange=()=>{
    if(mode==='dark'){
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert("Light Mode has been enabled","success");
      // document.title='TextUtils-Light Mode'
    }
    else{
      setMode('dark');
      document.body.style.backgroundColor='#031d37';
      showAlert("Dark Mode has been enabled","success");
      // document.title='TextUtils-Dark Mode';
    }
  }

  return (

    <div className="container">
        <Navbar mode={mode} toggleChange={toggleChange}/>
        <Alert alert={alert}/>
        <Routes>
          <Route exact path='/' element={<TextArea heading="Enter your text" mode={mode} showAlert={showAlert} />}/>
          <Route exact path='/about' element={<About mode={mode}/>}/>
        </Routes>
        

    </div>
  );
}

export default App;
