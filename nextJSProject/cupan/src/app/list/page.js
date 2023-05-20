'use client'

import { useState } from "react";

export default function List(){
    let items = [
        {name:'Tomatoes',price:'$40'},
        {name:'Pasta',price:'$30'},
        {name:'Coconut',price:'$60'}];
    
    return(
        <div>
            <h4 className="title">상품목록</h4>
            {items.map((item, index) => <ItemList itemData={item} indexNum={index} key={index}/>)}
        </div>
    );
}

const ItemList = (props)=>{
    let [quantity, setQuantity] = useState(0);
//    let [quantity, setQuantity] = useState([0,0,0]);으로 여러 데이터를 다루는 것도 가능
    return (
        <div className="food">
            <img src={`/food${props.indexNum}.png`} alt={props.itemData.name} className="food-img"/>
            <h4>{props.itemData.name} &emsp;{props.itemData.price}</h4>
            <button onClick={()=>{
                if(quantity!=0){
                    setQuantity(quantity-1);
                }
            }}>-</button>  
            &emsp;
            <span>{quantity}</span>  
            &emsp;
            <button onClick={()=>{setQuantity(quantity+1)}}>+</button>
        </div>
    );
}