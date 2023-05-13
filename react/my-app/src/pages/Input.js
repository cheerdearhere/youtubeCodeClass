import React,{useState} from 'react';
const Input = ()=>{
    let [textValue,setTextValue] = useState('');
    const inputChange = (e)=>{
        setTextValue(e.target.value);
    }
    return (
        <div>
            <input type="text" value={textValue} onChange={inputChange}/>
            <br/>
            <p>{textValue}</p>
        </div>
    );
}
export default Input;