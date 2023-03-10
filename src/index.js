import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import {BrowserRouter, Route, Routes } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import LoginEms from './Login/LoginEms';
import RegistrationEMS from './Login/RegistrationEMS';
import Dashboard from './Login/Dashboard';
import RequireAuth from './Login/Private/RequireAuth'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    {/* <ToastContainer /> */}
    {/* <LoginEms />
    <RegistrationEMS /> */}
  

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
