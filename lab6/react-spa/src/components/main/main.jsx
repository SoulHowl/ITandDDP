import React, {useEffect, useMemo, useState} from 'react';
import {useAuth} from "../all/api/useAuth";
import Load from "../loading/loading";
import {get_current_weather} from "../all/api/openweatherapi";
import {change_wallPaper, phenomenons} from "./Paper_changer";

const Main = ()=> {
    const { isSignedIn} = useAuth();
    const var1 = useMemo(()=>"some",[]);
    const [date, setDate] = useState("");
    const [month, setMonth] = useState("");
    const [day, setDay] = useState("");
    const [per, setPer] = useState("0%");
    const [pres, setPres] = useState("23");
    const [wind_str, setWstr] = useState("0MPS");
    const [state, setState] = useState('None');
    const [temp, setTemp] = useState('0' +  '&deg;');
    let months = ["January", "February", "March", "April", "May", "June",
        "July", "Augest", "September", "October", "November", "December"];
//###########################################################
    function update_weather(current)
    {
        update_widget_temp(current.temperature,current.state)
        update_widget_humidity(current.humidity)
        update_pressure_widget(current.pressure)
        update_wind_widget(current.wind_str,current.wind_dir)
        change_wallPaper(current.state)
    }

    function update_widget_humidity(percentage)
    {
        let progressBar = document.querySelector(".circular-progress");
        let valueContainer = document.querySelector(".value-container");

        let progressValue = 0;
        let progressEndValue = percentage;
        let speed = 50;

        let progress = setInterval(() => {
            progressValue++;
            //valueContainer.textContent = `Humid ${progressValue}%`;
            setPer(`Humid ${progressValue}%`);
            progressBar.style.background = `conic-gradient(
      #4d5bf9 ${progressValue * 3.6}deg,
      #cadcff ${progressValue * 3.6}deg
  )`;
            if (progressValue === progressEndValue) {
                clearInterval(progress);
            }
        }, speed);
    }
    function update_pressure_widget(press)
    {
        const needle = document.getElementById('needle');
        //console.log(needle)
        let progressVal1 = 1
        let progressEndVal1 = Math.round(press * 180 / 42)
        let pressure = press
        setPres(pressure.toString())

        let progress1 = setInterval(() => {
            progressVal1++;
            animate1()
            if (progressVal1 === progressEndVal1) {
                clearInterval(progress1);
            }
        }, 50);

        function animate1() {
            needle.style.transform = `rotate(${progressVal1 % 360}deg)`;
            requestAnimationFrame(animate1);
        }


        //document.getElementById('number').innerHTML = pressure.toString()
    }
    function update_widget_temp(temp,state)
    {
        setTemp(temp.toString());
        setState(state);
        let first = '<img src="svg/'
        let name = 'Error'
        switch (state) {
            case "Clouds":
                name = 'wi-cloudy.svg';
                break;
            case "Clear":
                var myDate = new Date();
                let h = myDate.getHours()
                if (h > 6 && h < 22){
                    name = 'wi-day-sunny.svg';
                }
                else{
                    name = 'wi-moon-full.svg';
                }
                break;
            case "Rain":
                name = 'wi-rain.svg';
                break;
            default:
                name = 'wi-na.svg';
                break;
        }
        let second = '">'
        document.getElementById('weather_icon').innerHTML = first + name + second

    }
    function update_time()
    {
        let myDate = new Date();
        let h = ""
        let m = ""
        if(myDate.getMinutes() < 10) {
            m = "0" + myDate.getMinutes().toString();
        }
        else {
            m = myDate.getMinutes().toString();
        }
        if(myDate.getHours() < 10) {
            h = "0" + myDate.getHours().toString();
        }
        else {
            h = myDate.getHours().toString();
        }
        setDate(h + ':' + m);
        setMonth(months[myDate.getMonth()]);
        setDay((myDate.getDate()).toString());
    }
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
                }, 1000);
            update_time()
            let date = new Date();
            let sec = date.getSeconds();
            setTimeout(()=>{
                setInterval(()=>{
                    try{
                        update_time()
                    }
                    catch (e) {
                    }
                }, 60 * 1000);
            }, (60 - sec) * 1000);


    },[var1])
    if(isSignedIn){ return (
        <div data-cy="abcd">
            <section id="1234" className="wallpaper"></section>
            <section className="wrapper-main">
                <section className="upper">
                    <section className="temperature-w">
                        <article className="widget">

                            <div id="weather_icon" className="weatherIcon">
                                <div id="w_icon" className="temperature_icon"></div>
                            </div>
                            <div className="weatherData">
                                <p id="temperature" className="temperature-1">{temp}&deg;</p>
                                <p id="weather_state" className="description">{state}</p>
                                <p id="city" className="city">Minsk, Belarus</p>
                            </div>
                            <div className="date-w">
                                <p className="month" id="month">{month}</p>
                                <p className="day" id="day">{day}</p>
                            </div>
                            <time>
                                <p id="date">{date}</p>
                            </time>
                        </article>
                    </section>

                    <section className="find">
                        <section className="top-banner">
                            <div className="container-find">
                                <form className="find-form">
                                    <input  type="text" placeholder="Search for a city" autoFocus/>
                                    <button className="button-find" type="submit">SUBMIT</button>
                                    <span className="msg"></span>
                                </form>
                            </div>
                        </section>

                    </section>
                </section>
                <section className="lower">
                    <section className="humidity">
                        <div className="container">
                            <div className="circular-progress">
                                <div className="value-container">{per}</div>
                            </div>
                        </div>
                    </section>

                    <section className="pressure">
                        <div className="with-digits">
                            <div className="upper-digit">
                                <p className="upper-d">21</p>
                            </div>
                            <div className="gauge-wrapper">
                                <div className="gauge four rischio3">
                                    <div className="slice-colors">
                                        <div className="st slice-item"></div>
                                        <div className="st slice-item"></div>
                                        <div className="st slice-item"></div>
                                        <div className="st slice-item"></div>
                                    </div>
                                    <div id="needle" className="needle"></div>
                                    <div className="gauge-center">
                                        <div className="label">inHg</div>
                                        <div id="number" className="number">{pres}</div>
                                    </div>
                                </div>
                                <small><a className="NameP">Pressure</a></small>
                            </div>
                            <div className="lower-digit"><h3 className="left-d">0</h3> <h3 className="right-d">42</h3>
                            </div>
                        </div>
                    </section>

                    <section className="wind">
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