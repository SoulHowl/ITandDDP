import React, {useEffect, useState} from 'react';
import {draw} from "./rose_draw";
import {useAuth} from "../all/api/useAuth";
import {get_three_days_wind, get_wind_data} from "../all/api/openweatherapi";
import Forecast from "./c_forecast";


const C_dialog = ()=>{
    const [not_close, setClose] = useState(true);
    function CloseModal(){
        setClose(!not_close)
    }
    useEffect(()=>{
            (function () {
                try{
                    const svgns = "http://www.w3.org/2000/svg";
                    const svg = document.querySelector("svg");
                    draw()}
                catch (e){
                }})();
    },[])
    if(not_close)
    {
        return (
            <div className="modal modal__show" id="fuck">
                <div className="modal__backdrop"  data-dismiss="modal">
                    <div className="modal__content">
                        <div className="modal__header">
                            <div className="modal__title" data-modal="title">Simple Wind rose, according to latest
                                data
                            </div >
                            <span className="modal__btn-close" data-dismiss="modal" title="Close" onClick={CloseModal}>×</span></div>
                        <div className="modal__body" data-modal="content">
                            <svg xmlns="http://www.w3.org/2000/svg" width="600" height="600" viewBox="0 0 600 600">

                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    else{

        return <Forecast />
    }
}

export default C_dialog;