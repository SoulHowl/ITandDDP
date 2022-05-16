import React, {Component} from 'react';
//import { Router } from "react-router-dom"
import ReactDOM from 'react-dom/client';

//import './index.css';
//import App from './App';
import Auth from './components/auth/c_auth'
import User from './components/user/c_user'
import Main from './components/main/main'
import Forecast from './components/forecast/c_forecast'
import Navbar from './components/navbar/c_navbar'
import Map from './components/map/c_map'
import reportWebVitals from './reportWebVitals';
import App from "./App";

//firebase.initializeApp()

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
        <App />
);

/*  <React.StrictMode>
      <Map />
  </React.StrictMode>

   <Routes>
                <Route path="/" element={<Auth />} />
                <Route path="/about" element={<User />} />
                <Route path="*" element={<Main />} />
            </Routes>*/
reportWebVitals();
