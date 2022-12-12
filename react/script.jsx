import React from "react";
import ReactDOM from "react-dom";

var name = "Lori Smith";
var url = "https://mimo.app/i/lori.png";
var header = <h1>Hello, {name}! react script</h1>;
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