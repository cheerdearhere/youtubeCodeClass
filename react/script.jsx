import React from "react";
import ReactDOM from "react-dom";

var url = "https://mimo.app/i/lori.png";
var header = <h1>Hello, Lori Smith! react script</h1>;
var subheader = <h2>The movie</h2>;

var app = (
    <div>
        {header} <br/>
        {subheader} <br/>
        <img src={url} alt="Lori's Profile"/>
    </div>
);

ReactDOM.render(
    app,
    document.getElementById("root")
);

const App = (props) => {
    const name = props.name;
    return (
        <div>
            <h1>Hello, {name}</h1>
            <p>welcome to my first React component</p>
        </div>
    );
}
ReactDOM.render(
    <App name="Smith"/>,
    document.getElementById("root")

);