var months = ["January", "February", "March", "April", "May", "June",
    "July", "Augest", "September", "October", "November", "December"];
function update_time()
{
    var myDate = new Date();
    let h = ""
    let m = ""
    if(myDate.getMinutes() < 10)
    {
        m = "0" + myDate.getMinutes().toString();
    }
    else
    {
        m = myDate.getMinutes().toString();
    }
    if(myDate.getHours() < 10)
    {
        h = "0" + myDate.getHours().toString();
    }
    else
    {
        h = myDate.getHours().toString();
    }
    document.getElementById('date').innerHTML = h + ':' + m;
    document.getElementById('month').innerHTML = months[myDate.getMonth()];
    document.getElementById('day').innerHTML = (myDate.getDay() + 1).toString();

}
update_time()
let date = new Date();
let sec = date.getSeconds();
setTimeout(()=>{
    setInterval(()=>{
        update_time()
    }, 60 * 1000);
}, (60 - sec) * 1000);
