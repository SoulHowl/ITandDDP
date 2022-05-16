import React, {useEffect,useState} from 'react';


function C_press(props2) {
    const [pres, setPres] = useState("23");
    function update_pressure_widget(pres)
    {
        const needle = document.getElementById('needle');
        let progressVal1 = 1
        let progressEndVal1 = Math.round(pres * 180 / 42)
        let pressure = pres
        setPres(pressure.toString())

        let progress1 = setInterval(() => {
            progressVal1++;
            animate1()
            if (progressVal1 === progressEndVal1) {
                clearInterval(progress1);
            }
        }, 50);

        function animate1() {
            needle.style.transform = `rotate(${progressVal1 % 360}deg)`;
            requestAnimationFrame(animate1);
        }


        //document.getElementById('number').innerHTML = pressure.toString()
    }
    useEffect(()=>{
       update_pressure_widget(props2.press)
    },[]);

    return (
        <div className="with-digits">
            <div className="upper-digit">
                <p className="upper-d">21</p>
            </div>
            <div className="gauge-wrapper">
                <div className="gauge four rischio3">
                    <div className="slice-colors">
                        <div className="st slice-item"></div>
                        <div className="st slice-item"></div>
                        <div className="st slice-item"></div>
                        <div className="st slice-item"></div>
                    </div>
                    <div id="needle" className="needle"></div>
                    <div className="gauge-center">
                        <div className="label">inHg</div>
                        <div id="number" className="number">{pres}</div>
                    </div>
                </div>
                <small><a className="NameP">Pressure</a></small>
            </div>
            <div className="lower-digit"><h3 className="left-d">0</h3> <h3 className="right-d">42</h3>
            </div>
        </div>
    );

}

export default C_press;