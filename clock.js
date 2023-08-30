let pause = false;

function updateClock() {
    var now = new Date();
    var seconds = now.getSeconds() + (now.getMilliseconds() / 1000);
    var minute = now.getMinutes();
    var hour = now.getHours();

    // Adjust the rotation calculation to fit 58.5 seconds
    var secondAngle = (seconds / 58.5) * 360;
    
    // When seconds reach 58.5, pause for 1.5 seconds
    if (seconds >= 58.5 && !pause) {
        pause = true;
        setTimeout(() => {
            pause = false;
        }, 1500);
    }

    if (!pause) {
        document.getElementById('second-hand').setAttribute('transform', 'rotate(' + secondAngle + ', 100, 100)');
    }

    var minuteAngle = minute * 6 + seconds * 0.1;
    var hourAngle = hour * 30 + minute * 0.5;

    document.getElementById('minute-hand').setAttribute('transform', 'rotate(' + minuteAngle + ', 100, 100)');
    document.getElementById('hour-hand').setAttribute('transform', 'rotate(' + hourAngle + ', 100, 100)');
}

setInterval(updateClock, 10);  // Update every 10ms for smoother rotation
updateClock();
