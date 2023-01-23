import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginEms from './Login/LoginEms';
import { ToastContainer, toast } from "react-toastify";
import RegistrationEMS from './Login/RegistrationEMS';
import Dashboard from './Login/Dashboard';
import RequireAuth from './Login/Private/RequireAuth'

function App() {
  return (
    <div className="App">
      <ToastContainer />
       <BrowserRouter>
    <Routes>
      <Route path='/' element={<LoginEms />}></Route>
      <Route path='/registartion' element={<RegistrationEMS />}></Route>
      <Route path='/dashbord' element={<RequireAuth><Dashboard /></RequireAuth>}></Route>
      
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
