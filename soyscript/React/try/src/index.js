import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
const mF = require("../src/components/functions.js")

//versão otimizada de elemento único!
const element = React.createElement(
  "h1",
  {className:"greeting"},
  "Greetings Mr.Freeman!"
);

//ESSE EXEMPLO NÃO É INSERIDO POIS O REACT É INTELIGENTE O BASTANTE PARA NÃO INSERIR MEDIANTE A POSSIBILIDADE DE CAUSAR BUGS!! :D
// const element = React.createElement(
//   "div",
//   {className: "greetings"},
//   "h1",
//   {className: "title"},
//   "HELLO THERE FRIEND!!! IM FROM INDIA AND I LOVE PEOPLE!!!!"
// );

//versão não otimizada de elemento único!
// const element = (
//   <h1 className="greeting">
//     This is not optmized, Mr Freeman.
//   </h1>
// );


ReactDOM.render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>,
  // <h1>Olá mundo!</h1>,
  // element,
  // document.getElementById('root')
  // setInterval(mF.clock, 1000)
  mF.test("Gordon Freeman"),
  document.getElementById("root")

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
