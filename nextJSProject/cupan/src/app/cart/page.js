// 'use client'

export default ()=>{
    let chartItems = 
        [
            {
                name:'Tomatoes',
                price:'$40',
                amount:3
            },
            {
                name:'Pasta',
                price:'$30',
                amount:2
            },
            {
                name:'Coconut',
                price:'$60',
                amount:5
            }
        ];    
    return(
        <div>
            <h4 className="title" >Cart</h4>
            <hr/>
            {chartItems.map(chartItem=><CartItem item={chartItem}/>)}
            <Banner card='롯데'/>
            <BtnMaker color='red' card='Lbtn'/>
            <Banner card='현대'/>
            <BtnMaker color='green' card='Hbtn'/>
            <Banner card='삼성'/>
            <BtnMaker color='blue' card='Sbtn'/>
        </div>
    );
}
const BtnMaker = (props)=>{
    return <button style={{backgroundColor:props.color,color:"#fff",fontWeight:700}}>{props.card}</button>;
}
function Banner(props){
    return <h5>{`${props.card}카드`} 결제 행사중</h5>
}
const CartItem = (props)=>{
    return (
        <div className="cart-item">
            <p>{props.item.name}</p>
            <p>{props.item.price}</p>
            <p>{props.item.amount}개</p>
        </div>
    );
}