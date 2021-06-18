setInterval(() => {
    date = new Date();
    calHr = date.getHours();
    calMin = date.getMinutes();
    calSec = date.getSeconds();
    hRotate = 30*calHr + calMin/2;
    mRotate= 6*calMin + calSec/12;
    sRotate = 6*calSec;

    hour.style.transform = `rotate(${hRotate}deg)`;
    minute.style.transform = `rotate(${mRotate}deg)`;
    second.style.transform = `rotate(${sRotate}deg)`;
}, 1000);
