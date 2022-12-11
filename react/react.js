import React from "react";
import ReactDOM from "react-dom";
ReactDOM.render(
    <h1>hello, React!</h1>,
    document.getElementById("root")
);

class ShoppingList extends React.Component{
    render(){
        return (
            <div className="shopping_list">
                <h1>Shopping List for {this.props.name}</h1>
                <ul>
                    <li>Instargram</li>
                    <li>WhatsApp</li>
                    <li>Oculus</li>
                </ul>
            </div>
        );
    }
}

class CreateElementObj extends React.Component{
    render(){
        return React.createElement(
            'div',
            {className:'shopping_list'},
            React.createElement('h1'),
            React.createElement('ul')
        );
    }
}

class SquareBoard extends React.Component{
    renderSquare(i){
        return <Square value={i} />
    }
}

class SquareNum extends React.Component{
    render(){
        return (
            <button className="square">
                {this.props.value}
            </button>
        );
    }
}
ShoppingList.render();
CreateElementObj.render();
SquareBoard.renderSquare(9);
SquareNum.render();