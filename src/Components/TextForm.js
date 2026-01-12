import React, {useState} from 'react'


export default function TextForm(props) {

    const[text, setText] = useState("Enter text here");


    const handleUpClick = () => {
        // console.log("Uppercase was Clicked" + text);
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to Uppercase!", "success");
    }

    const handleUpChange = (event) => {
        // console.log("On change");
        setText(event.target.value)
    }

    const handleLowClick = () => {
        // console.log("LowerCase was Clicked");
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to Lowercase!", "success");
    }

    const handleClearClick =() => {
        let newText = "";
        setText(newText)
        props.showAlert("Cleared!", "success");
    }


    return (
    <>
        <div className='container' style={{color: props.mode === 'dark'?'white':'#042743'}} >
            <h1>{props.heading} </h1>
            <div className="mb-3">
                {/* <label for="myBox" class="form-label">Example textarea</label> */}
                <textarea className="form-control" value={text} onChange={handleUpChange} style={{backgroundColor: props.mode === 'dark' ? 'grey' : 'white', color: props.mode === 'dark' ? 'white' : '#042743'}}
 id="exampleFormControlTextarea1" rows="8"></textarea>
            </div>
        <button className="btn btn-primary" onClick={handleUpClick}>Convert to UpperCase</button>
        <button className='btn btn-primary mx-2' onClick={handleLowClick}>Convert to LowerCase</button> 
        <button className='btn btn-primary mx-2' onClick={handleClearClick}>Clear</button> :
        </div>

    <div className="container my-3" style={{color: props.mode === 'dark'?'white':'#042743'}}>
        <h2>Your text summary</h2>
        <p>{text.split(" ").length} Words, {text.length} characters</p>
        <p>{0.08 * text.split(" ").length}Minutes Read</p>
        <h2>Preview</h2>
        <p>{text.length>0 ? text: "Enter Something in the text box above to preview it here"}</p>
    </div>
    </>
  )
}
