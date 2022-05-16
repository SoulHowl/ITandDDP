import{make_clouds} from "./phenomenon/clouds";
import {from_sun_to_heart} from "./phenomenon/sunny";
import {night} from "./phenomenon/night";
import {setup_rain} from "./phenomenon/rain";

let phenomenons = {'day_clear':"<div class=\"sun\" id=\"sun_id\"></div>\n" +
                           "    <div class=\"grass\"></div>",
    'cloudy':"<canvas id='canvas_cl' class='canvas_clouds'></canvas>",
    'day_rainy':"<canvas id='canvas_rain' width='1900' height='820' onresize='_pexresize()'></canvas>",
    'night_clear':"<canvas id=\"canvas_night\" class='canvas_night'></canvas>"}

function change_wallPaper(state)
{
    var myDdte = new Date()
    let hours = myDdte.getHours()
    if (hours > 6 && hours < 23)
    {
        if (state === 'Clouds')
        {
            document.getElementById('1234').innerHTML ="<canvas id='canvas_cl' class='canvas_clouds'></canvas>";
            setTimeout(make_clouds, 100);
        }
        else if (state === 'Clear')
        {
            document.getElementById('1234').innerHTML =  phenomenons['day_clear']
            setTimeout(from_sun_to_heart, 1000);
        }
        else if (state === 'Rain')
        {
            document.getElementById('1234').innerHTML =  phenomenons['day_rainy']
            setTimeout(setup_rain, 1000);
        }
    }
    else
    {
        if (state === 'Clear') {
            document.getElementById('1234').innerHTML = phenomenons['night_clear']
            setTimeout(night, 1000);
        }
    }
}

export {phenomenons, change_wallPaper}
