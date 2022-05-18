import React from 'react';
import {Route, BrowserRouter, Routes, BrowserRouter as Router} from "react-router-dom";
import Main from "./components/main/main";
import Map from "./components/map/c_map";
import Forecast from "./components/forecast/c_forecast";
import Navbar from "./components/navbar/c_navbar";
import Auth from "./components/auth/c_auth";
import './navbar.css'
import '../user/auth.css'
import '../auth/unauth.css'
import '../map/Map.css'
import '../forecast/forecast.css'
import '../forecast/tablew.css'
import '../main/css/index.css'
import '../main/css/widgets/Temperature.css'
import '../main/css/widgets/find.css'
import '../main/css/widgets/round.css'
import '../main/css/widgets/MainPressure.css'
import '../main/css/widgets/Wind.css'
import '../main/css/NewWind.css'
import '../main/css/phenomenon/clouds.css'
import '../main/css/phenomenon/sunny.css'
import '../all/everything.css'

function App() {
  return (
      <Router>
        <Routes>
          <Route path="/main" element={<div className="under-root"><Navbar /> <Main /></div>}/>
          <Route path="/map" element={<div className="under-root"><Navbar /><Map /></div>}/>
          <Route path="/forecast" element={<div className="under-root"><Navbar /><Forecast /></div>}/>
          <Route path="/" element={<div className="under-root"><Auth /></div>}/>
        </Routes>
      </Router>

  );
}

export default App;