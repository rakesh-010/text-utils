import React from "react";
import Navbar from "./TextUtils-components/navbar";
import TextArea from "./TextUtils-components/TextArea";
// import About from '../TextUtils-components/About'
import "./App.css";

function App() {
  return (

    <div className="container">
        <Navbar />
        <TextArea heading="Enter your text" />
        {/* <About /> */}
    </div>
  );
}

export default App;
