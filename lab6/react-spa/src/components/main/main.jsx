import React, {useEffect, useMemo, useState} from 'react';
import {useAuth} from "../all/api/useAuth";
import Load from "../loading/loading";
import {get_current_weather} from "../all/api/openweatherapi";
import {change_wallPaper, phenomenons} from "./Paper_changer";
import C_temp from "../widgets/c_temp";
import C_humid from "../widgets/c_humid";
import C_press from "../widgets/c_press";
import C_wind from "../widgets/c_wind";
import C_find from "../widgets/c_find";

const Main = ()=> {
    const { isSignedIn} = useAuth();
    const var1 = useMemo(()=>"some",[]);
    const [per, setPer] = useState("");
    const [temp, setTemp] = useState("");
    const [state, setState] = useState("");
    const [wind_str, setStr] = useState("");
    const [wind_dir, setDir] = useState("");
    const [press, setPress] = useState("");
    function update_weather(current)
    {
        //update_widget_temp(current.temperature,current.state)
        setTemp(current.temperature) ;
        setState(current.state);
        setPer( current.humidity);
        setPress(current.pressure);
        //update_widget_humidity(current.humidity)
        //update_pressure_widget(current.pressure)
        setStr(current.wind_str);
        setDir(current.wind_dir);
        //update_wind_widget(current.wind_str,current.wind_dir)
        console.log(temp)
        change_wallPaper(current.state)
    }

    useEffect(()=>{
        console.log(var1)
        setTimeout(
            ()=>{
                console.log("Weather get")
                get_current_weather("Minsk",update_weather)
                setInterval(
                    ()=>{
                        get_current_weather("Minsk",update_weather)
                    }
                    , 3000 * 1000);
            }, );



    },[var1])
    if(isSignedIn && (per !== "" && state !== "" && press !== "" && wind_dir !== "" && wind_str !== "" && temp !=="")){
        return (
            <div data-cy="abcd">
                <section id="1234" className="wallpaper"></section>
                <section className="wrapper-main">
                    <section className="upper">
                        <section className="temperature-w">
                            <C_temp temp={temp} state={state}/>
                        </section>

                        <section className="find">
                            <C_find />
                        </section>
                    </section>
                    <section className="lower">
                        <section className="humidity">
                            <C_humid per={per}/>
                        </section>

                        <section className="pressure">
                            <C_press press={press}/>
                        </section>

                        <section className="wind">
                            <C_wind str={wind_str} dir={wind_dir}/>
                        </section>
                    </section>

                </section>
            </div>
        );}
    else {
        return <Load />
    }

}

export default Main;