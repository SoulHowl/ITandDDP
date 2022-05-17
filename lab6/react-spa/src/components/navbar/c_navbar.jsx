import React from 'react';
import web_logo from '../all/img/weblogo.jpg'


const Navbar=()=> {

    return (
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
        </header>
    );
}

export default Navbar;

