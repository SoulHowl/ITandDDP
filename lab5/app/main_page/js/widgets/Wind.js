// const arrow = document.getElementById('arrrow');
// let inner = document.getElementById('direction').innerHTML;
// document.getElementById('direction').innerHTML = 'W' + '\n' +inner.substring(inner.indexOf("<"))
// inner = document.getElementById('direction').innerHTML;
// const arr = ["S","N","E","W","NNE",  "NNE","NE","ENE","ESE","SE",  "SSE","SSW","SW","WSW","WNW","SW","NW","NNW"]
// for (let i = 0; i < arr.length; i++) {
//     if (inner.indexOf(arr[i]) !== -1) {
//         switch (arr[i]) {
//             case "NNE" :
//                 arrow.style.transform = `rotate(${22.5}deg)`;
//                 break;
//             case "NE" :
//                 arrow.style.transform = `rotate(${45}deg)`;
//                 break;
//             case "ENE" :
//                 arrow.style.transform = `rotate(${67.5}deg)`;
//                 break;
//             case "E" :
//                 arrow.style.transform = `rotate(${90}deg)`;
//                 break;
//             case "ESE" :
//                 arrow.style.transform = `rotate(${112.5}deg)`;
//                 break;
//             case "SE" :
//                 arrow.style.transform = `rotate(${135}deg)`;
//                 break;
//             case "SSE" :
//                 arrow.style.transform = `rotate(${157.5}deg)`;
//                 break;
//             case "S" :
//                 arrow.style.transform = `rotate(${180}deg)`;
//                 break;
//             case "SSW" :
//                 arrow.style.transform = `rotate(${202.5}deg)`;
//                 break;
//             case "SW" :
//                 arrow.style.transform = `rotate(${-135}deg)`;
//                 break;
//             case "WSW" :
//                 arrow.style.transform = `rotate(${-114.5}deg)`;
//                 break;
//             case "W" :
//                 arrow.style.transform = `rotate(${-90}deg)`;
//                 break;
//             case "WNW" :
//                 arrow.style.transform = `rotate(${-69.5}deg)`;
//                 break;
//             case "NW" :
//                 arrow.style.transform = `rotate(${-45}deg)`;
//                 break;
//             case "NNW" :
//                 arrow.style.transform = `rotate(${-24.5}deg)`;
//                 break;
//         }
//         break;
//     }
// }
//
// document.getElementById('w_strength').innerHTML = '20mph';

function update_wind_widget(strength, dir)
{
    const arrow = document.getElementById('arrrow');
    let inner = document.getElementById('direction').innerHTML;
    document.getElementById('direction').innerHTML = dir + '\n' +inner.substring(inner.indexOf("<"))
    inner = document.getElementById('direction').innerHTML;
    const arr = ["S","N","E","W","NNE",  "NNE","NE","ENE","ESE","SE",  "SSE","SSW","SW","WSW","WNW","SW","NW","NNW"]
    // for (let i = 0; i < arr.length; i++) {
    //     if (inner.indexOf(arr[i]) !== -1) {
            switch (/*arr[i]*/dir){
                case "NNE" :
                    arrow.style.transform = `rotate(${22.5}deg)`;
                    break;
                case "NE" :
                    arrow.style.transform = `rotate(${45}deg)`;
                    break;
                case "ENE" :
                    arrow.style.transform = `rotate(${67.5}deg)`;
                    break;
                case "E" :
                    arrow.style.transform = `rotate(${90}deg)`;
                    break;
                case "ESE" :
                    arrow.style.transform = `rotate(${112.5}deg)`;
                    break;
                case "SE" :
                    arrow.style.transform = `rotate(${135}deg)`;
                    break;
                case "SSE" :
                    arrow.style.transform = `rotate(${157.5}deg)`;
                    break;
                case "S" :
                    arrow.style.transform = `rotate(${180}deg)`;
                    break;
                case "SSW" :
                    arrow.style.transform = `rotate(${202.5}deg)`;
                    break;
                case "SW" :
                    arrow.style.transform = `rotate(${-135}deg)`;
                    break;
                case "WSW" :
                    arrow.style.transform = `rotate(${-114.5}deg)`;
                    break;
                case "W" :
                    arrow.style.transform = `rotate(${-90}deg)`;
                    break;
                case "WNW" :
                    arrow.style.transform = `rotate(${-69.5}deg)`;
                    break;
                case "NW" :
                    arrow.style.transform = `rotate(${-45}deg)`;
                    break;
                case "NNW" :
                    arrow.style.transform = `rotate(${-24.5}deg)`;
                    break;
            }
    //         break;
    //     }
    // }

    document.getElementById('w_strength').innerHTML = strength.toString() + 'mps';
}










