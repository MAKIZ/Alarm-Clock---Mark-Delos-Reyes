var hours = document.getElementById('hour');//this is for time
var mins = document.getElementById('mins');

var alarmHr = document.getElementById('alarmHr');//this is for alarm
var alarmMin = document.getElementById('alarmMin');
var alert = document.getElementById('alarmBtn')

var alarm = document.getElementById('alarm');

function displayTime () {
    var time = new Date();
    var timeHr = (time.getHours()%12).toString();
    var timeMin = time.getMinutes().toString();

    if (timeHr.length < 2) {
        timeHr = "0" + timeHr;
    }

    if (timeMin.length < 2) {
        timeMin = "0" + timeMin;
    }

    hours.textContent = timeHr;
    mins.textContent = timeMin;

    setTimeout(Time, 1000);
}

function alarmDisplay() {
    var alarmHr = document.getElementById('alarmHr');//this is for alarm
    var alarmMin = document.getElementById('alarmMin');
}

function alarmSound() {
    if(displayTime >= alarmDisplay.value) {
        var sound = document.getElementById('audio1').autoplay;
        document.getElementById("alarmBtn").innerHTML = sound;
    } else {
        document.getElementById('alarmBtn')
    }
}

displayTime();
alarmDisplay();
alarmSound();