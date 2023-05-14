export default function List(){
    let items = [
        {name:'Tomatoes',price:'$40'},
        {name:'Pasta',price:'$30'},
        {name:'Coconut',price:'$60'}];
    return(
        <div>
            <h4 className="title">상품목록</h4>
            {items.map((item) => <ItemList itemData={item}/>)}
        </div>
    );
}

const ItemList = (props)=>{
    return (
        <div className="food">
            <h4>{props.itemData.name} {props.itemData.price}</h4>
        </div>
    );
}