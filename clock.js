function updateClock() {
    var now = new Date();
    var second = now.getSeconds();
    var minute = now.getMinutes();
    var hour = now.getHours();

    var secondAngle = second * 6;
    var minuteAngle = minute * 6 + second * 0.1;
    var hourAngle = hour * 30 + minute * 0.5;

    document.getElementById('second-hand').setAttribute('transform', 'rotate(' + secondAngle + ', 100, 100)');
    document.getElementById('minute-hand').setAttribute('transform', 'rotate(' + minuteAngle + ', 100, 100)');
    document.getElementById('hour-hand').setAttribute('transform', 'rotate(' + hourAngle + ', 100, 100)');
}
setInterval(updateClock, 1000);
updateClock();