import {get_current_weather} from "./openweatherapi.js";

function update_weather(current)
{
    console.log(current);
    update_widget_temp(current.temperature,current.state)
    update_widget_humidity(current.humidity)
    update_pressure_widget(current.pressure)
    update_wind_widget(current.wind_str,current.wind_dir)
    change_wallPaper(current.state)
    //change_wallPaper("Clear")
    console.log("DATA START")
}


//weatherBalloon( 625144 );//Minsk
//Timer for update

setTimeout(
    ()=>{
        //weatherBalloon( 625144 );
        get_current_weather("Minsk",update_weather)
        setInterval(
            ()=>{
                get_current_weather("Minsk",update_weather)
                //weatherBalloon( 625144 );
            }
            , 300 * 1000);
    }, 0);

