//import React from 'react'
//import ReactDOM from 'react-dom/client'
import ReactDOM from 'react-dom'
//import App from './App.tsx'
//import './index.css'
/*
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
*/

const app = <h1>Testing App</h1>;
const container= document.getElementById("root");

ReactDOM.render(app, container);
