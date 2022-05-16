import React from 'react';
import {useAuth} from "../all/api/useAuth";
import Load from "../loading/loading";

function Map() {
    const { pending, isSignedIn, user, auth} = useAuth()
    if(isSignedIn){
        console.log("First")
    return (
        <div className="map-page">
            <section className="interactive-map">
                <iframe width="1400" height="550"
                        src="https://embed.windy.com/embed2.html?lat=53.901&lon=27.571&detailLat=53.901&detailLon=27.571&width=650&height=450&zoom=5&level=surface&overlay=wind&product=ecmwf&menu=&message=&marker=&calendar=now&pressure=&type=map&location=coordinates&detail=&metricWind=default&metricTemp=default&radarRange=-1"
                        frameBorder="0"></iframe>
            </section>
        </div>
    );}
    else {
        console.log("Second")

        return <Load />

    }
}

export default Map;