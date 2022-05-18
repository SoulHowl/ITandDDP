import React, {useEffect,useState, useMemo} from 'react';
import {get_current_weather} from "../all/api/openweatherapi";


const Humid=()=> {
    const [pers, setPer] = useState("0%");
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
    const var1 = useMemo(()=>"some",[]);
    function update_weather(current)
    {
        update_widget_humidity( current.humidity)
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

    return (
        <div className="container">
            <div className="circular-progress">
                <div className="value-container">{pers}</div>
            </div>
        </div>
    );

}

export default Humid;