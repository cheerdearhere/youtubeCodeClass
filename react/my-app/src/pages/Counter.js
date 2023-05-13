import React,{useState} from 'react';
const Counter = ()=>{
    let [num,setNumber] = useState(0);
    const increase = ()=>{
        setNumber(num+1);
    }
    const decrease = ()=>{
        setNumber(num-1);
    }
    return (
        <div>
            <button onClick={increase}>+</button>
            <button onClick={decrease}>-</button>
            <p>{num}</p>
        </div>
    );
}

export default Counter;