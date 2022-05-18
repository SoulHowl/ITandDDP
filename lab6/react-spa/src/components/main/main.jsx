import React, {useEffect, useMemo, useState} from 'react';
import {useAuth} from "../all/api/useAuth";
import Load from "../loading/loading";
import {get_current_weather} from "../all/api/openweatherapi";
import {change_wallPaper, phenomenons} from "./Paper_changer";
import Temp from "../widgets/Temp";
import Humid from "../widgets/Humid";
import Press from "../widgets/Press";
import Wind from "../widgets/Wind";
import Find from "../widgets/Find";

const Main = ()=> {
    const { isSignedIn} = useAuth();
    const var1 = useMemo(()=>"some",[]);
    function update_weather(current)
    {
        change_wallPaper(current.state);
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
                    , 3600 * 1000);
            }, );
    },[var1])
    if(isSignedIn){
        return (
            <div data-cy="abcd">
                <section id="1234" className="wallpaper"></section>
                <section className="wrapper-main">
                    <section className="upper">
                        <section className="temperature-w">
                            <Temp />
                        </section>

                        <section className="find">
                            <Find />
                        </section>
                    </section>
                    <section className="lower">
                        <section className="humidity">
                            <Humid />
                        </section>

                        <section className="pressure">
                            <Press />
                        </section>

                        <section className="wind">
                            <Wind />
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