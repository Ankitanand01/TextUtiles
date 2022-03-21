import React, { useState } from 'react'

export default function TextForm(props) {
    // FOR CONVERT INTO UPPERCASE
    const UpperCaseConvert = () => {
        let convertedText = text.toUpperCase();
        setText(convertedText)
        props.showAlert("Converted into UpperCase","success")
    }
    // CONVERT INTO LOWER CASE
    const LowerCaseConvert = () => {
        let convertedText = text.toLowerCase();
        setText(convertedText)
        props.showAlert("Converted into LowerCase","success")
    }
    // COPY TEXT
    const CopyText = () => {
        var texts= document.getElementById('myBox');
        texts.select();
        navigator.clipboard.writeText(texts.value);
        props.showAlert("Text Copied to clipboard","success")
    }
    // CLEAR TEXT
    const ClearText = () => {
        let convertedText = ''
        setText(convertedText)
        props.showAlert("Text Cleared","success")
    }
    
    const onChange = (event) => {
        setText(event.target.value)
    }
    const [text, setText] = useState('');
    return (
        <>
        <div className='container' style={{color:props.mode==='dark'?'white':'#042743'}}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange={onChange} style={{backgroundColor:props.mode==='dark'?'rgb(20 21 22/ 50%)':'white', 
                color:props.mode==='dark'?'white':'#042743'}} id="myBox" rows="8" />
            </div>
            <button className='btn btn-primary mx-2' onClick={UpperCaseConvert}>Convert into UpperCase</button>
            <button className='btn btn-primary mx-2' onClick={LowerCaseConvert}>Convert into LowerCase</button>
            <button className='btn btn-primary mx-2' onClick={CopyText}>Copy Text</button>
            <button className='btn btn-primary mx-2' onClick={ClearText}>ClearText</button>
        </div>

        <div className='container my-3'  style={{color:props.mode==='dark'?'white':'#042743'}}>
            <h2>Your Text Summary</h2>
            <p><b>{text.split(" ").length}</b> Words and <b>{text.length}</b> Characters</p>
            <p>{0.008* text.split(" ").length} Minutes takes to read all </p>
            <h3>Preview</h3>
            <p>{text.length>0?text:"Enter something in the above textbox to Preview it here"}</p>
        </div>
        </>
    )
}
