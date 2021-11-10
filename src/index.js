import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
// const X = () => <p>Hola mundo</p>
// ReactDOM.render(
//   <X/>,document.getElementById('root')
// )
// const Li = ({children, estado}) => {
//   <li>{children} estoy {estado}</li>
// }

// const X = () => 
// <ul>
//   <Li 
//   estado={'feliz'}
//   casa={'false'}
//   edad={24}>Chanco</Li>
//   <Li estado={'triste'}></Li>
//   <Li estado={'emosionado'}></Li>
// </ul>
// ReactDOM.render(
//   <X/>,document.getElementById('root')
// )

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
