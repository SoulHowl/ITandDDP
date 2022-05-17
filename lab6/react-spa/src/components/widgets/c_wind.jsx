import React, {useEffect,useState, useMemo} from 'react';
import {get_current_weather} from "../all/api/openweatherapi";


const Wind=()=> {
    const [wind_str, setWstr] = useState("0MPS");
    const var1 = useMemo(()=>"some",[]);
    function update_weather(current)
    {
        update_wind_widget(current.wind_str,current.wind_dir);
    }
    useEffect(()=>{

        setTimeout(
            ()=>{
                get_current_weather("Minsk",update_weather)
                setInterval(
                    ()=>{
                        get_current_weather("Minsk",update_weather)
                    }
                    , 3600 * 1000);
            }, );
    },[var1])
    function update_wind_widget(strength, dir)
    {
        const arrow = document.getElementById('arrrow');
        let inner = document.getElementById('direction').innerHTML;
        document.getElementById('direction').innerHTML = dir + '\n' +inner.substring(inner.indexOf("<"))
        switch (dir){
            case "NNE" :
                arrow.style.transform = `rotate(${22.5}deg)`;
                break;
            case "NE" :
                arrow.style.transform = `rotate(${45}deg)`;
                break;
            case "ENE" :
                arrow.style.transform = `rotate(${67.5}deg)`;
                break;
            case "E" :
                arrow.style.transform = `rotate(${90}deg)`;
                break;
            case "ESE" :
                arrow.style.transform = `rotate(${112.5}deg)`;
                break;
            case "SE" :
                arrow.style.transform = `rotate(${135}deg)`;
                break;
            case "SSE" :
                arrow.style.transform = `rotate(${157.5}deg)`;
                break;
            case "S" :
                arrow.style.transform = `rotate(${180}deg)`;
                break;
            case "SSW" :
                arrow.style.transform = `rotate(${202.5}deg)`;
                break;
            case "SW" :
                arrow.style.transform = `rotate(${-135}deg)`;
                break;
            case "WSW" :
                arrow.style.transform = `rotate(${-114.5}deg)`;
                break;
            case "W" :
                arrow.style.transform = `rotate(${-90}deg)`;
                break;
            case "WNW" :
                arrow.style.transform = `rotate(${-69.5}deg)`;
                break;
            case "NW" :
                arrow.style.transform = `rotate(${-45}deg)`;
                break;
            case "NNW" :
                arrow.style.transform = `rotate(${-24.5}deg)`;
                break;
        }

        setWstr(strength.toString() + 'mps');
        document.getElementById('w_strength').innerHTML = strength.toString() + 'mps';
    }
    return (
        <div className="container-1">
            <div className="compass">
                <div className="direction">
                    <p id="direction">S
                        <span id="w_strength" className="mph">{wind_str}</span>
                    </p>
                </div>
                <div id="arrrow" className="arrow s"></div>
                <div className="directions">
                    <div className="E">
                        <p>E</p>
                    </div>
                    <div className="W">
                        <p>W</p>
                    </div>
                    <div className="S">
                        <p>S</p>
                    </div>
                    <div className="N">
                        <p>N</p>
                    </div>
                </div>
                <div className="lines"></div>
                <div className="lines"></div>
                <div className="lines"></div>
                <div className="lines"></div>
                <div className="lines"></div>
                <div className="lines"></div>
                <div className="lines"></div>
                <div className="lines"></div>
                <div className="lines"></div>
                <div className="lines"></div>
                <div className="lines"></div>
                <div className="lines"></div>
                <div className="lines"></div>
                <div className="lines"></div>
                <div className="lines"></div>
                <div className="lines"></div>
                <div className="lines"></div>
                <div className="lines"></div>
                <div className="lines"></div>
                <div className="lines"></div>
                <div className="lines"></div>
                <div className="lines"></div>
                <div className="lines"></div>
                <div className="lines"></div>
                <div className="lines"></div>
                <div className="lines"></div>
                <div className="lines"></div>
                <div className="lines"></div>
                <div className="lines"></div>
                <div className="lines"></div>
                <div className="lines"></div>
                <div className="lines"></div>
                <div className="lines"></div>
                <div className="lines"></div>
                <div className="lines"></div>
                <div className="lines"></div>
                <div className="lines"></div>
                <div className="lines"></div>
                <div className="lines"></div>
                <div className="lines"></div>
                <div className="lines"></div>
                <div className="lines"></div>
                <div className="lines"></div>
                <div className="lines"></div>
                <div className="lines"></div>
                <div className="lines"></div>
                <div className="lines"></div>
                <div className="lines"></div>
                <div className="lines"></div>
                <div className="lines"></div>
                <div className="lines"></div>
                <div className="lines"></div>
                <div className="lines"></div>
                <div className="lines"></div>
                <div className="lines"></div>
                <div className="lines"></div>
                <div className="lines"></div>
                <div className="lines"></div>
                <div className="lines"></div>
                <div className="lines"></div>
                <div className="cover"></div>
            </div>
        </div>
    );

}

export default Wind;