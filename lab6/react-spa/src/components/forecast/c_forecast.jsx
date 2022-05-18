import React, {useState} from 'react';
import sun from '../all/img/sunny.jpg'
import {useAuth} from "../all/api/useAuth";
import Load from "../loading/loading";
import C_dialog from "./c_dialog";
const Forecast=()=> {
    const { isSignedIn} = useAuth()
    const [show, setShow] = useState(false)
    function clicked(){
        setShow(!show)
    }
    if (isSignedIn){
        if(show){return(
            <C_dialog />
        )}
        else {
            return (
                <div className="forecast-page">
                    <div className="main-column">
                        <div className="container-numeral-table1">
                            <table>
                                <thead>
                                <tr>
                                    <td className="fix-width-1">Day time</td>
                                    <td className="fix-width-2">Temperature °C and weather state</td>
                                    <td>Wind (strength), m/s</td>
                                    <td>Sea level pressure, hPa</td>
                                    <td> Humidity, %</td>
                                </tr>
                                </thead>
                            </table>
                        </div>
                        <div className="container-numeral-table">
                            <table>
                                <tbody>
                                <tr>
                                    <td className="date" colSpan="9">03 апреля 2022 (вс)</td>
                                </tr>
                                <tr>
                                    <td className="fix-width-1">
                                        <div className="parameter">вечер</div>
                                    </td>
                                    <td className="fix-width-2-1">
                                        <div className="temperature">
                                            <span className="min">-2</span>..<span className="max">+2</span>
                                        </div>
                                    </td>

                                    <td className="fix-width-2-2">
                                        <img alt="weather icon" src={sun}/>
                                    </td>
                                    <td className="weather fix-width-2-3">
                                        Облачно
                                    </td>
                                    <td>
                                        <div>2 - 5 (6)
                                        </div>
                                        <div className="parameter">
                                            С-З
                                        </div>
                                    </td>
                                    <td>
                                        <div>
                                            1&nbsp;008
                                        </div>
                                    </td>
                                    <td>
                                        <div>46 - 60</div>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="fix-width-1">
                                        <div className="parameter">утро</div>
                                    </td>
                                    <td className="fix-width-2-1">
                                        <div className="temperature">
                                            <span className="min">-3</span>..<span className="max">+3</span>
                                        </div>
                                    </td>
                                    <td className="fix-width-2-2">
                                        <img alt="weather icon" src={sun}/>
                                    </td>
                                    <td className="weather fix-width-2-3">
                                        Малооблачно
                                    </td>
                                    <td>
                                        <div>3 - 6 (7)</div>
                                        <div className="parameter">З</div>
                                    </td>
                                    <td>
                                        <div>1&nbsp;010</div>
                                    </td>
                                    <td>
                                        <div>47 - 66</div>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="fix-width-1">
                                        <div className="parameter">утро</div>
                                    </td>
                                    <td className="fix-width-2-1">
                                        <div className="temperature">
                                            <span className="min">-3</span>..<span className="max">+3</span>
                                        </div>
                                    </td>
                                    <td className="fix-width-2-2">
                                        <img alt="weather icon" src={sun}/>
                                    </td>
                                    <td className="weather fix-width-2-3">
                                        Малооблачно
                                    </td>
                                    <td>
                                        <div>3 - 6 (7)</div>
                                        <div className="parameter">З</div>
                                    </td>
                                    <td>
                                        <div>1&nbsp;010</div>
                                    </td>
                                    <td>
                                        <div>47 - 66</div>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="fix-width-1">
                                        <div className="parameter">вечер</div>
                                    </td>
                                    <td className="fix-width-2-1">
                                        <div className="temperature">
                                            <span className="max">+1</span>..<span className="max">+2</span>
                                        </div>
                                    </td>
                                    <td className="fix-width-2-2">
                                        <img alt="weather icon" src={sun}/>
                                    </td>
                                    <td className="weather fix-width-2-3">
                                        Кратковременные осадки
                                    </td>
                                    <td>
                                        <div>6 - 7 (16)</div>
                                        <div className="parameter">Ю-З</div>
                                    </td>
                                    <td>
                                        <div>1&nbsp;003</div>
                                    </td>
                                    <td>
                                        <div>90 - 98</div>
                                    </td>
                                </tr>
                                </tbody>
                                <tbody>
                                <tr>
                                    <td className="date" colSpan="9">03 апреля 2022 (вс)</td>
                                </tr>
                                <tr>
                                    <td className="fix-width-1">
                                        <div className="parameter">вечер</div>
                                    </td>
                                    <td className="fix-width-2-1">
                                        <div className="temperature">
                                            <span className="min">-2</span>..<span className="max">+2</span>
                                        </div>
                                    </td>
                                    <td className="fix-width-2-2">
                                        <img alt="weather icon" src={sun}/>
                                    </td>
                                    <td className="weather fix-width-2-3">
                                        Облачно
                                    </td>
                                    <td>
                                        <div>2 - 5 (6)
                                        </div>
                                        <div className="parameter">
                                            С-З
                                        </div>
                                    </td>
                                    <td>
                                        <div>
                                            1&nbsp;008
                                        </div>
                                    </td>
                                    <td>
                                        <div>46 - 60</div>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="fix-width-1">
                                        <div className="parameter">утро</div>
                                    </td>
                                    <td className="fix-width-2-1">
                                        <div className="temperature">
                                            <span className="min">-3</span>..<span className="max">+3</span>
                                        </div>
                                    </td>
                                    <td className="fix-width-2-2">
                                        <img alt="weather icon" src={sun}/>
                                    </td>
                                    <td className="weather fix-width-2-3">
                                        Малооблачно
                                    </td>
                                    <td>
                                        <div>3 - 6 (7)</div>
                                        <div className="parameter">З</div>
                                    </td>
                                    <td>
                                        <div>1&nbsp;010</div>
                                    </td>
                                    <td>
                                        <div>47 - 66</div>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="fix-width-1">
                                        <div className="parameter">утро</div>
                                    </td>
                                    <td className="fix-width-2-1">
                                        <div className="temperature">
                                            <span className="min">-3</span>..<span className="max">+3</span>
                                        </div>
                                    </td>
                                    <td className="fix-width-2-2">
                                        <img alt="weather icon" src={sun}/>
                                    </td>
                                    <td className="weather fix-width-2-3">
                                        Малооблачно
                                    </td>
                                    <td>
                                        <div>3 - 6 (7)</div>
                                        <div className="parameter">З</div>
                                    </td>
                                    <td>
                                        <div>1&nbsp;010</div>
                                    </td>
                                    <td>
                                        <div>47 - 66</div>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="fix-width-1">
                                        <div className="parameter">вечер</div>
                                    </td>
                                    <td className="fix-width-2-1">
                                        <div className="temperature">
                                            <span className="max">+1</span>..<span className="max">+2</span>
                                        </div>
                                    </td>
                                    <td className="fix-width-2-2">
                                        <img alt="weather icon" src={sun}/>
                                    </td>
                                    <td className="weather fix-width-2-3">
                                        Кратковременные осадки
                                    </td>
                                    <td>
                                        <div>6 - 7 (16)</div>
                                        <div className="parameter">Ю-З</div>
                                    </td>
                                    <td>
                                        <div>1&nbsp;003</div>
                                    </td>
                                    <td>
                                        <div>90 - 98</div>
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <button id="show-modal" className="show_rose" onClick={clicked}>Show wind rose</button>
                </div>
            );
        }
    }
    else{
        return <Load />
    }
}

export default Forecast;