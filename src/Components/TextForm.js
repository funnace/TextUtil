import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUcClick=    () => {
        var newText = text.toUpperCase();
        setText(newText);
    }
const copyText = () =>{
  //var text = document.getElementById("myBox");
  //text.select()
  //navigator.clipboard.writeText(text.value)
  navigator.clipboard.writeText(text)
  props.showAlert("Copied to Clipboard!s","success")
}

const removeXtraSpace = () => {
  let newText = text.split(/[ ]+/);
  setText(newText.join(" "))
}

    const handleClrClick=    () => {
      var newText = ""
      setText(newText);
  }
    const handleOnChange = (event) =>{
         setText(event.target.value);
    }
    const [text,setText] = useState("")
  return (<>
<div classNamename="container">
    <h1 style={{color:props.mode === 'light'?'#042743':'white'}}>{props.text}</h1>
  <textarea className="form-control" value={text} style={{backgroundColor:props.mode === 'light'?'#042743':'white',color:props.mode === 'light'?'white':'#042743'}} onChange={handleOnChange} id="myBox" rows="8"></textarea>
  </div><br/>
  <button disabled={text.length===0} className="btn btn-primary mx-2" onClick={handleUcClick}>Convert to UpperCase</button>
  <button disabled={text.length===0} className="btn btn-info mx-2" onClick={handleClrClick}>Clear Text</button>
  <button disabled={text.length===0} className="btn btn-warning mx-2" onClick={copyText}>Copy Text</button>
  <button disabled={text.length===0} className="btn btn-success mx-2" onClick={removeXtraSpace}>Remove Extra Spaces</button>
  
<div className="container my-3">
    <h1 style={{color:props.mode === 'light'?'#042743':'white'}}>Text summary</h1>
    <p style={{color:props.mode === 'light'?'#042743':'white'}}>There are {text.length} characters and {text.split(/\s+/).filter((ele)=>{return ele.length!==0}).length} words</p>
</div>
  </>
  )
}