import React from "react";
import ReactDOM, { render } from "react-dom";
const sum = (a, b)=>a+b;

function clock(){
    const element=(
        <div>
            <h1>Hello Mr Freeman.</h1>
            <h2>Look at the time! it is {new Date().toLocaleTimeString()}</h2>
        </div>
    )
    ReactDOM.render(element, document.getElementById("root"));
}

function test(prop){
        return <h1>Hello {prop}</h1>;

}

export{
    sum,
    clock,
    test
}