// const needle = document.getElementById('needle');
// console.log(needle)
// let progressVal1 = 1
// let progressEndVal1 = 120
// let pressure = 22.5
//
//
// let progress1 = setInterval(() => {
//     progressVal1++;
//     animate1()
//     if (progressVal1 === progressEndVal1) {
//         clearInterval(progress1);
//     }
// }, 50);
//
// function animate1() {
//         needle.style.transform = `rotate(${progressVal1 % 360}deg)`;
//     requestAnimationFrame(animate1);
// }
//
//
// document.getElementById('number').innerHTML = pressure.toString()

function update_pressure_widget(press)
{
    const needle = document.getElementById('needle');
    console.log(needle)
    let progressVal1 = 1
    let progressEndVal1 = Math.round(press * 180 / 42)
    let pressure = press


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


    document.getElementById('number').innerHTML = pressure.toString()
}