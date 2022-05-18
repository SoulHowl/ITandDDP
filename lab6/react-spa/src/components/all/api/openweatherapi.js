// Api key
let appid = "4f808e5799b99bd7746b1c9d8eba6898"

//#################################################################################################

function city_parser(data){
    console.log(data)
    let coords = {"id":99999,"lat":23,lon:12}
    console.log(data.list[0])
    coords.id = parseInt(data.list[0].id);
    coords.lon = Math.floor(parseFloat(data.list[0].coord.lon.toString())).toString();
    coords.lat = Math.floor(parseFloat(data.list[0].coord.lat.toString())).toString();
    console.log("parsed", coords)
    return coords;
}

function get_wind_direction(deg) {
    let l = ['N ', 'NE', ' E', 'SE', 'S ', 'SW', 'W', 'NW']
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

//#################################################################################################
function get_current_weather(city_name, w_out){
    fetch(`https://api.openweathermap.org/data/2.5/find?q=${city_name}&appid=${appid}`
    )
        .then(function(resp) {
            return resp.json()})
        .then(function(data) {
            //console.log(data);
            let coords =city_parser(data);
            setup_current_weather(coords.id, w_out)
        })
        .catch(function() {
            // catch any errors
        });}

function parse_data(data, current1){
    current1.temperature = Math.round(parseFloat(data.main.temp)-273.15);
    current1.pressure = Math.floor(parseFloat(data.main.pressure) *0.03937 * 100) / 100
    current1.humidity = Math.round(parseFloat(data.main.humidity))
    current1.state = data.weather[0].main
    current1.wind_dir = get_wind_direction(parseInt(data.wind.deg))
    current1.wind_str = Math.round(parseFloat(data.wind.speed))
    //console.log(current1.temperature)
}

function setup_current_weather(cityID, todo ) {
    fetch('https://api.openweathermap.org/data/2.5/weather?id=' + cityID+ '&appid=' + appid)
        .then(function(resp) { return resp.json() })
        .then(function(data) {
            //console.log(data);
            let current1 = {"temperature": 0,"state": "","humidity":0,"pressure": 0, "wind_dir": "", "wind_str": 0}
            parse_data(data, current1);
            //update_weather(current1)
            todo(current1)
        })
        .catch(function() {
            // catch any errors
        });
}

//get_current_weather("Minsk", loglog)

//###########################################################

function get_three_days_weather(city_name, w_out){
    fetch(`https://api.openweathermap.org/data/2.5/find?q=${city_name}&appid=${appid}`
    )
        .then(function(resp) {
            return resp.json()})
        .then(function(data) {
            //console.log(data);
            let coords =city_parser(data);
            setup_three_weather(coords, w_out)
        })
        .catch(function() {
            // catch any errors
        });}

function setup_three_weather(coords, todo){
    fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${coords.lat}&lon=${coords.lon}&appid=${appid}`)
        .then(function(resp)
        {
            return resp.json()})
        .then(function(data) {
            //console.log(data);
            let result = week_parser(data)
            todo(result)
        })
        .catch(function() {
            // catch any errors
        });
}

function week_parser(data){
    let three_days = []
    for (let value of data.list){
        if (value.dt_txt.includes("03:00:00") || value.dt_txt.includes("09:00:00") ||
            value.dt_txt.includes("15:00:00") || value.dt_txt.includes("21:00:00")){
            let stamp = {"temperature": 0,"state": "","humidity":0,"pressure": 0,
                "wind_dir": "", "wind_str": 0, day:"23.03.2002", time:"12.00"};
            stamp.temperature = Math.round(parseFloat(value.main.temp)-273.15);
            stamp.pressure = Math.floor(parseFloat(value.main.pressure) *0.03937 * 100) / 100;
            stamp.humidity = Math.round(parseFloat(value.main.humidity));
            stamp.state = value.weather[0].main;
            stamp.wind_dir = get_wind_direction(parseInt(value.wind.deg));
            stamp.wind_str = Math.round(parseFloat(value.wind.speed));
            let arr = value.dt_txt.split(" ");
            stamp.day = arr[0];
            stamp.time = arr[1];
            three_days.push(stamp);
        }
        if (three_days.length === 12){
            break;
        }
    }
    return three_days;
}

//get_three_days_weather("Minsk", loglog)

//###########################################################
function get_three_days_wind(city_name, w_out, handler){
    fetch(`https://api.openweathermap.org/data/2.5/find?q=${city_name}&appid=${appid}`
    )
        .then(function(resp) {
            return resp.json()})
        .then(function(data) {
            //console.log(data);
            let coords =city_parser(data);
            setup_three_wind(coords, w_out, handler)
        })
        .catch(function() {
            // catch any errors
        });}

function setup_three_wind(coords, todo, handler){
    fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${coords.lat}&lon=${coords.lon}&appid=${appid}`)
        .then(function(resp)
        {
            return resp.json()})
        .then(function(data) {
            //console.log(data);
            let result = week_parser(data)
            todo(result, handler)
        })
        .catch(function() {
            // catch any errors
        });
}
function get_wind_data(data, handler) {
    let winds = []
    for (let val of data){
        winds.push([val.wind_dir, val.wind_str])
    }
    //console.log(winds)
    handler(winds)
}

//get_three_days_wind("Minsk", get_wind_data, loglog)

export {get_wind_data, get_three_days_wind, get_current_weather, appid}