import React from 'react';
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
import web_logo from '../all/img/weblogo.jpg'
import Auth from '../auth/c_auth'
import Main from '../main/main'
import Forecast from '../forecast/c_forecast'
import Map from '../map/c_map'
import {BrowserRouter as Router,
    Route,
    Routes,
    Link} from "react-router-dom";

function Navbar() {

    return (
        <Router>
        <header>
            <nav className="dws-menu" id="main-navbar">
                <div className="logo"><Link to="/main">
                    <img src={web_logo} height="38" width="150"/></Link></div>
                <ul>
                    <li><Link to="/forecast">3-day forecast</Link></li>
                    <li><Link to="/map">Map</Link></li>
                    <li><Link to="#">Coming Soon</Link></li>
                    <li><Link to="/">Account</Link>

                    </li>
                </ul>
            </nav>
                <Routes>
                <Route path="/main" element={<Main />}/>
                <Route path="/map" element={<Map />}/>
                <Route path="/forecast" element={<Forecast />}/>
                <Route path="/" element={<Auth />}/>
                </Routes>

        </header>
        </Router>
    );
}

export default Navbar;

