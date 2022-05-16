import React, {useEffect,useState} from 'react';


function C_humid(props1) {
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
            //valueContainer.textContent = `C_humid ${progressValue}%`;
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

    useEffect(()=>{
        update_widget_humidity(props1.per)
    },[]);


    return (
        <div className="container">
            <div className="circular-progress">
                <div className="value-container">{pers}</div>
            </div>
        </div>
    );

}

export default C_humid;