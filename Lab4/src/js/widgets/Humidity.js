// let progressBar = document.querySelector(".circular-progress");
// let valueContainer = document.querySelector(".value-container");
//
// let progressValue = 0;
// let progressEndValue = 39;
// let speed = 50;
//
// let progress = setInterval(() => {
//     progressValue++;
//     valueContainer.textContent = `${progressValue}%`;
//     progressBar.style.background = `conic-gradient(
//       #4d5bf9 ${progressValue * 3.6}deg,
//       #cadcff ${progressValue * 3.6}deg
//   )`;
//     if (progressValue == progressEndValue) {
//         clearInterval(progress);
//     }
// }, speed);

function update_widget_humidity(percentage)
{
    let progressBar = document.querySelector(".circular-progress");
    let valueContainer = document.querySelector(".value-container");

    let progressValue = 0;
    let progressEndValue = percentage;
    let speed = 50;

    let progress = setInterval(() => {
        progressValue++;
        valueContainer.textContent = `Humid ${progressValue}%`;
        progressBar.style.background = `conic-gradient(
      #4d5bf9 ${progressValue * 3.6}deg,
      #cadcff ${progressValue * 3.6}deg
  )`;
        if (progressValue == progressEndValue) {
            clearInterval(progress);
        }
    }, speed);
}