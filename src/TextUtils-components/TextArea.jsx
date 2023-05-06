import React, { useState } from "react";

function TextArea(props) {
  let [text, setText] = useState("");
  let [findText, setFindText] = useState("");
  let [findCount, setFindCount] = useState(0);
  let [replaceText, setReplaceText] = useState("");

  // let text2="hi";
  // {text=String(text)}//split karne ke liye isko string mai convert karna is imp.

  //-------------------------------------------- FUCNTIONS FOR BUTTONS --------------------------------------
  function changeUpperText() {
    let upperStr = text.toUpperCase();
    props.showAlert("Changed to UpperCase","success");
    setText(upperStr);
    
  }

  function changeLowerText() {
    // console.log(text);
    let lowerStr = text.toLowerCase();
    // console.log(upperStr);
    setText(lowerStr);
    props.showAlert("Changed to LowerCase","success");
  }

  function clearText() {
    return setText("");
  }

  function reverseText() {
    let letters = text.split("");
    let reverseLetters = letters.reverse();
    let reverseString = reverseLetters.join("");
   setText(reverseString);
   props.showAlert("Text reversed","success");
  }

  function copyText(){
    const str=document.getElementById('myText');
    // console.log(str.select());
    navigator.clipboard.writeText(str.value);
    props.showAlert("Copied to clipboard","success");
  }

  function pasteText(){
    navigator.clipboard.readText().then(function(clipText) {
      document.getElementById("myText").value = (clipText);
    });
    // navigator.clipboard.writeText(str.value);
    text= document.getElementById("myText").value;
  }

  function finder() {
    let text3=text.replace('.','');
    text3=text3.replace('?','');
    
    // console.log(text3);
    let words = text3.split(" ");
    for (let i = 0; i < words.length; i++) {
      (words[i].toLowerCase() === findText.toLowerCase()) && findCount++;
    }
    console.log(words);
    return setFindCount(findCount);
  }


  // --------------------------------------------- ON CHANGE FUNCTIONS -------------------------------------

  function handleOnChange(event) {
    // console.log(event.target.value);
    return setText(event.target.value);
  }
  function findOnChange(event) {
    return setFindText(event.target.value);
  }
  function replaceOnChange(event) {
    return setReplaceText(event.target.value);
  }

  // ------------------------------------------ OTHER FUNCTIONS -------------------------------------------------
  
  function resetFinder() {
    clearFinder();
    return setFindCount(0);
  }
  function clearFinder() {
    return setFindText("");
  }

  //--------------------------------------------- RETURN STATEMENT ----------------------------------------
  return (
    <>
      <div className="container" style={{color:props.mode==='dark'?'white':'black'}}>
        <div className="textarea">
          <h1>{props.heading}</h1>

          <textarea
            className="form-control"
            style={{backgroundColor:props.mode==='dark'?'#455b62':'white',color:props.mode==='dark'?'white':'black'}}
            rows="8"
            id="myText"
            value={text}
            onChange={handleOnChange}
          />
{/* --------------------------------------------- BUTTONS -------------------------------------------------------- */}
          <button className="btn btn-primary" onClick={changeUpperText} disabled={text.length===0}>
            Convert to UpperCase
          </button>
          <button className="btn btn-dark" onClick={changeLowerText} disabled={text.length===0}>
            Convert to LowerCase
          </button>
          <button className="btn btn-primary" onClick={reverseText} disabled={text.length===0}>
            Reverse Text
          </button>
          <button className="btn btn-dark" onClick={copyText} disabled={text.length===0}>
            Copy Text
          </button>
          <button className="btn btn-primary" onClick={pasteText}>
            Paste Copied Text
          </button>
          <button className="btn btn-dark clear" onClick={clearText} disabled={text.length===0}>
            Clear Text
          </button>
{/* ----------------------------------------- SUMMARY -------------------------------------------------------- */}
        </div>
        <div className="summary">
          {/* <p className=>nejnc</p> */}
          
          <h2 className="header">Your text Summary:</h2>
          <p>
            {" "}
            {text.split(" ").filter((ele)=>{return ele.length!==0}).length} words and {text.length} letters{" "}
          </p>
          <p>{(text==='')?0:(0.008 * text.split(" ").length)} minutes to read it slowly</p>
          <p>{(text==='')?0:text.split(".").length} Sentences</p>
          <h2>Preview</h2>
          <p>{text.length===0?"Nothing to preview":text.substring(0,200)}</p>
          
        </div>
      </div>
{/* ---------------------------------------------- FIND --------------------------------------------------------- */}
      <div className="container finder" style={{color:props.mode==='dark'?'white':'black'}}>
        <h2 className="header">Find:</h2>
        <input
          type="text"
          className="form-control find"
          value={findText}
          onChange={findOnChange}
          placeholder="Enter find text"
        />
        <button className="btn btn-primary find" onClick={finder} disabled={findText.length===0}>
          Find
        </button>
        <button className="btn btn-primary find" onClick={resetFinder} disabled={findText.length===0}>
          Clear
        </button>
        <h5>Number of times the word is found: {findCount}</h5>
      </div>
{/* ---------------------------------------------REPLACE----------------------------------------------------- */}
      <div className="container replace" style={{color:props.mode==='dark'?'white':'black'}}>
        <h2 className="header">Replace: //does not have a functionality right now</h2>
        <input
          type="text"
          className="form-control find"
          value={replaceText}
          onChange={replaceOnChange}
          placeholder="Enter find text"
        />
        <button className="btn btn-primary" >Replace</button>
      </div>
    </>
  );
}

export default TextArea;
