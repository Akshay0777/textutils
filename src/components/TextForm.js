import React, {useState} from 'react'


export default function TextForm(props) {

    const handleUpClick=()=>{
        console.log("Uppercase was clicked");
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Upper case","success");
    }

    const handleOnChange = (event)=>{
        console.log("clicked onchange");
        setText(event.target.value);
    }

    const handleLowClick = ()=>{
        let newtext = text.toLowerCase();
        setText(newtext);
        props.showAlert("Converted to Lower case","success")
    }

    const handleClearClick = ()=>{
        setText("");
        props.showAlert("Text Cleared","success")
    }

    const handleCopyClick=()=>{
        var cptxt = document.getElementById("myBox");
        cptxt.select();
        navigator.clipboard.writeText(cptxt.value);
        props.showAlert("Text has been Copied","success")
    }

    const handleRemoveExtraSpaces=()=>{
        let textNew = text.split(/[ ]+/);
        setText(textNew.join(" "));
        props.showAlert("Remover extra spaces","success")
    }
    
    const [text,setText] = useState('');
    return (
        <>
            <div className="form-group p-3">
                <label htmlFor="mybox mt-5" style={{color: props.mode === 'dark' ? 'white':'#070238'}}>{props.heading}</label>
                <textarea className="form-control" id="myBox" rows="8" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode === 'dark' ? '#033E56':'white' , color: props.mode === 'dark' ? 'white':'#070238'}} ></textarea>
            </div>
            <button disabled={text.length===0} className="btn btn-primary mt-3 mx-2" onClick={handleUpClick}>Convert to UpperCase</button>
            <button disabled={text.length===0} className="btn btn-warning mt-3 mx-2" onClick={handleLowClick}>Convert to LowerCase</button>
            <button disabled={text.length===0} className="btn btn-primary mt-3 mx-2" onClick={handleCopyClick} >Copy Text</button>
            <button disabled={text.length===0} className="btn btn-success mt-3 mx-2" onClick={handleRemoveExtraSpaces} >Remove Extra Spaces</button>
            <button disabled={text.length===0} className="btn btn-danger mt-3 mx-2" onClick={handleClearClick} >Clear Text</button>
            <h1 className="mt-5">Preview</h1>
            <p>{text.length>0?text:"Enter something in above textbox to preview here."}</p>
            <div className="container">
                <h1>Your text Summery</h1>
                <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
                <p>{0.008*text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes for read.</p>
            </div>
        </>
    )
}
