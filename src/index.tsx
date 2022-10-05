import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Alfabeto from "./pages/alfabeto";
import Numeros from "./pages/numeros";
import EnviarMensaje from "./pages/enviar-mensaje";
// import Home from "../src/pages/home";


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/alfabeto' element={<Alfabeto />}/>
        <Route path='/numeros' element={<Numeros />}/>
        <Route path='/enviar-mensaje' element={<EnviarMensaje />}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
