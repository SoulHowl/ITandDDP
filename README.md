# ITandDDP
Барсукевич Сергей 953504
<h1> lab1 </h1> :
Var 3
![alt text](https://github.com/SoulHowl/ITandDDP/blob/checkbranch/2022-02-28%20(4).png "working prog #1")
![alt text](https://github.com/SoulHowl/ITandDDP/blob/checkbranch/2022-02-28%20(5).png "working prog #2")

<h1> lab2 </h1>:
link to mockup:
https://www.figma.com/file/Y4YdSwhD6LzGJ6L5mZlpw9/Weather-Forecast-ws?node-id=0%3A1
<h3>Description</h3>

This project is a weather forecast website, which uses opensource api for gathering weather data and makes 
forecast predictions. You can check weather forecast (like temperature, wind dirextion and strength, humidity and etc.) 
for current time , for a day or for some days. If you passed authorisation, you might posting weather phenomenon pictures with a comment
below them. 

<h3>Main Functions</h3>

1)live wallpaper 
2)changing the wallpaper depending on  weather state
3)displaying current weather state
4)forecast for week
5)automatic detection of users ip and selection of region 
6)choosing of region
7-10)dashboards:
a) wind
b) humidity
c) temperature
d) pressure

<h3>Models Description</h3>

simple weather forecast model
- temp
- humidity
- pressure
- wind
- time
- state

users model
- mail
- pass
- region

API, which could be used:
- openweather
- windy
<h1> lab3 </h1>:
Main pages of weather website,
some designes of dashboards have been slightly changed
link: https://soulhowl.github.io


<h1> lab4 </h1>:
expected functions

![alt text](https://github.com/SoulHowl/ITandDDP/blob/checkbranch/lab4tasks.png "functions")

small review:
- added functions which fill weather widgets with input data (function - show current weather state) - folder widgets
- added function which setups current time
- added code of some live wallpaper(for exaple: there were added wallpaper for rainy,sunny,cloudy weather and day state - day and night) - (function - live wallppaper) Note: each walppaer code was wrapped with function body , so they won't conflict with each other - folder phenomenon
- added function of wind dashboard - drawing wind rose (function - wind dashboard) - files rose,.js and draw_rose.js
Next time (lab5) i will add authorising with firebase API and gather weather data with openweathermap API

link: https://soulhowl.github.io
