setInterval(() => {
    const date = new Date();

const getSecond = date.getSeconds()
const getMinute = date.getMinutes()
const getHour = date.getHours()

const sec_rotation = 6 * getSecond;
const minute_rotation = 6 * getMinute;
const hour_rotation = 30 * getHour + getMinute / 2;

document.getElementById("second").style.transform = `rotate(${sec_rotation}deg)`
document.getElementById("minute").style.transform = `rotate(${minute_rotation}deg)`
document.getElementById("hour").style.transform = `rotate(${hour_rotation}deg)`



document.getElementById("container").innerHTML = `Todays is ${date}`
}, 1000);