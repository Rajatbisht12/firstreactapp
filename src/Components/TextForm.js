import React, {useState} from 'react'



function TextForm(props) {
    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to upper case", "success")
    }

    const handleLoClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to lower case", "success");
    }

    const handleClrClick = () => {
        let newText = '';
        setText(newText);
        props.showAlert("Text Cleared", "success")
    }

    const handleOnChange = (event) => {
        setText(event.target.value);
    }

    const [text, setText] = useState('');
    return (
        <>
    <div className="container" style={{color: props.mode==='dark'?'white':'black'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
            <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'grey':'white', color: props.mode==='dark'?'white':'black'}} id="myBox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to UpperCase</button>
        <button className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>Convert to LowerCase</button>
        <button className="btn btn-primary mx-1 my-1" onClick={handleClrClick}>Clear text</button>
    </div>
    <div className="container my-3" style={{color: props.mode==='dark'?'white':'black'}}>
        <h2>Your text summary</h2>
        <p>{text.length===0?0:text.split(" ").length} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").length} Minute read</p>
    </div>
    <div className="c" style={{color: props.mode==='dark'?'white':'black'}}>
    <h2>Preview</h2>
    <p>{text.length>0?text:"Enter something above"}</p>
    </div>
    </>
    )
}

export default TextForm