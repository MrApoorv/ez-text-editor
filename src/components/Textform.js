import React,{useState} from 'react'


export default function Textform(props) {
    const [text,setText]=useState('');
    //text="f"; cant change like this
    //setText("hello"); infinte loop , should be handled in a function
    let handleOnClick=()=>{
        //setText("Button clicked");
        console.log("Clicked");
        setText(text.toUpperCase());
        props.alertMe("Changed to Uppercase",'success')
    }
    let handleLoClick=()=>{
        setText(text.toLowerCase());
        props.alertMe("Changed to Lowercase",'danger')
    }
    let handleOnChange=(event)=>{ //event is passed onchange of something in the textarea value
        console.log("Typing...");
        setText(event.target.value);
    }
    const handleCopy=()=>{
        navigator.clipboard.writeText(text).then( ()=>{
        props.alertMe("Text Copied to Clipboard",'success');
        }).catch(err=>{
        props.alertMe("Copy failed",'danger');
    })
    }
    
  return (
    <>
    <h1 style={{color: props.mode==='dark'?'white':'#042743'}}>{props.heading}</h1>
    <div className="mb-3" style={{color: props.mode==='dark'?'white':'#042743'}}>
        <textarea className="form-control" id="floatingTextarea" rows="10" value={text} onChange={handleOnChange} 
        style={{color: props.mode==='dark'?'white':'#042743',backgroundColor: props.mode==='light'?'white':'#042743'}}></textarea>
        <button disabled={text.length===0} className={`btn btn-${props.mode==='dark'?'light':'primary'} mx-1 my-2`} onClick={handleOnClick}>Convert to Uppercase</button>
        <button disabled={text.length===0} className={`btn btn-${props.mode==='dark'?'light':'primary'} mx-1 my-2`}  onClick={handleLoClick}>Convert to LowerCase</button>
        <button disabled={text.length===0} className={`btn btn-${props.mode==='dark'?'light':'primary'} mx-1 my-2`}  onClick={handleCopy}>Copy Text</button>
    </div>
    <div style={{color: props.mode==='dark'?'white':'#042743'}}>
    <h2>Summary</h2>
    <p>{text.split(/\s+/).filter((elem)=>elem.length!==0).length} words and {text.length} characters </p>
    <p>{text.length>0?text:'Enter text for preview'}</p>
    </div>
    </>
  )
}
