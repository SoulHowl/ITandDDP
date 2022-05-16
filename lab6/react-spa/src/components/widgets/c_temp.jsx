import React, {useEffect,useState} from 'react';


function C_temp(props) {
    const [date, setDate] = useState("");
    const [month, setMonth] = useState("");
    const [day, setDay] = useState("");
    let months = ["January", "February", "March", "April", "May", "June",
        "July", "Augest", "September", "October", "November", "December"];
    function update_widget_temp(temp,state)
    {
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
    useEffect(()=>{
        update_widget_temp(props.temp,props.state)
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
    },[])


        return (
            <article className="widget">

                <div id="weather_icon" className="weatherIcon">
                    <div id="w_icon" className="temperature_icon"></div>
                </div>
                <div className="weatherData">
                    <p id="temperature" className="temperature-1">{props.temp}&deg;</p>
                    <p id="weather_state" className="description">{props.state}</p>
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
        );

}

export default C_temp;