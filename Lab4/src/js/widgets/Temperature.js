function update_widget_temp(temp,state)
{
    document.getElementById('temperature').innerHTML = temp.toString() + '&deg;';
    document.getElementById('weather_state').innerHTML = state
    let first = '<img src="src/img/svg/'
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

//update_widget_temp()