
let WEATHER_STATE_GLOBAL = "None"
let appid = "4f808e5799b99bd7746b1c9d8eba6898"


let res = new Map
function get_wind_direction(deg) {
    l = ['N ', 'NE', ' E', 'SE', 'S ', 'SW', 'W', 'NW']
    let res = ""
    for (let i = 0; i < l.length;i++){
        let step = 45.
        let min = i * step - 45 / 2.
        let max = i * step + 45 / 2.
        if (i === 0 && deg > 360 - 45 / 2.)
        {
            deg = deg - 360
        }

        if (deg >= min && deg <= max)
        {
            res = l[i]
            break
        }
    }
    return res
}

function weatherBalloon( cityID ) {

    var key = appid
    fetch('https://api.openweathermap.org/data/2.5/weather?id=' + cityID+ '&appid=' + key)
        .then(function(resp) { return resp.json() }) // Convert data to json
        .then(function(data) {
            console.log(data);
            let current1 = {"temperature": 0,"state": "","humidity":0,"pressure": 0, "wind_dir": "", "wind_str": 0}
            parse_data(data, current1);
            update_weather(current1)
            //console.log(res)
        })
        .catch(function() {
            // catch any errors
        });
}

function parse_data(data, current1){

    current1.temperature = Math.round(parseFloat(data.main.temp)-273.15);
    current1.pressure = Math.floor(parseFloat(data.main.pressure) *0.03937 * 100) / 100
    current1.humidity = Math.round(parseFloat(data.main.humidity))
    current1.state = data.weather[0].main
    current1.wind_dir = get_wind_direction(parseInt(data.wind.deg))
    current1.wind_str = Math.round(parseFloat(data.wind.speed))
    console.log(current1.temperature)
}


function update_weather(current)
{
    console.log(current);
    update_widget_temp(current.temperature,current.state)
    update_widget_humidity(current.humidity)
    update_pressure_widget(current.pressure)
    update_wind_widget(current.wind_str,current.wind_dir)
    //change_wallPaper(current.state)
    change_wallPaper("Clear")
    console.log("DATA START")
}

//weatherBalloon( 625144 );//Minsk

setTimeout(
    ()=>{
        weatherBalloon( 625144 );
    setInterval(
        ()=>{
            weatherBalloon( 625144 );
    }
    , 300 * 1000);
}, 0);