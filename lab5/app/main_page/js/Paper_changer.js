phenomenons = {'day_clear':"<div class=\"sun\" id=\"sun_id\"></div>\n" +
                           "    <div class=\"grass\"></div>",
    'cloudy':"<canvas id='canvas_cl' class='canvas_clouds'></canvas>",
    'day_rainy':"<canvas id='canvas_rain' width='1900' height='820' onresize='_pexresize()'></canvas>",
    'night_clear':"<canvas id=\"canvas_night\" class='canvas_night'></canvas>"}

function change_wallPaper(state)
{
    //console.log("WALLPAPER CHANGER START")
    for (let i=0; i<document.styleSheets.length; i++) {

        if (i >= 9)
        {void(document.styleSheets.item(i).disabled=true);}}
    var myDdte = new Date()
    let hours = myDdte.getHours()
    //console.log("Works")
    if (hours > 6 && hours < 22)
    {
        if (state === 'Clouds')
        {
            //console.log("Works clouds")
              //phenomenons['cloudy']
            for (let i=0; i<document.styleSheets.length; i++) {
                if (i === 9)
                {void(document.styleSheets.item(i).disabled=false);}
            }
            document.getElementById('1234').innerHTML ="<canvas id='canvas_cl' class='canvas_clouds'></canvas>";
            setTimeout(make_clouds, 100);
        }
        else if (state === 'Clear')
        {
            //console.log("Works clear")
            //console.log("DAY")
            document.getElementById('1234').innerHTML =  phenomenons['day_clear']
            for (let i=0; i<document.styleSheets.length; i++) {
                if (i === 10)
                {void(document.styleSheets.item(i).disabled=false);}
            }
            setTimeout(from_sun_to_heart, 1000);
        }
        else if (state === 'Rain')
        {
            document.getElementById('1234').innerHTML =  phenomenons['day_rainy']
            for (let i=0; i<document.styleSheets.length; i++) {
                if (i === 12)
                {void(document.styleSheets.item(i).disabled=false);}
            }
            setTimeout(setup_rain, 1000);
        }
    }
    else
    {
        if (state === 'Clear') {
            //console.log("NIGHT")
            document.getElementById('1234').innerHTML = phenomenons['night_clear']
            for (let i = 0; i < document.styleSheets.length; i++) {
                if (i === 11) {
                    void (document.styleSheets.item(i).disabled = false);
                }
            }
            setTimeout(night, 1000);
        }
    }
}

