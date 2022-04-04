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

<h3>Main Functions(what is it?)</h3>

1)interactive map
2)live wallpaper
3)picture posting
4)displaying current weather state
5)forecast for week
6)automatic detection of users ip and selection of region 
7)choosing of region
8-11)dashboards:
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

post model
- picture
- comment
- authour
- time

weather state model
- type
- logo
- wallpaper

users model
- mail
- pass
- nick
- region
API, which could be used:
- openweather
- windy
