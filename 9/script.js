function clock() {
    var date = new Date(),
        hours = date.getHours(),
        minutes = date.getMinutes(),
        seconds = date.getSeconds();
        hours = checkTime(hours),
        minutes = checkTime(minutes),
        seconds = checkTime(seconds);

    document.getElementById('clock').innerText = hours + ':' + minutes + ':' + seconds;

    setTimeout(clock, 1000);

    var currentTime = Math.floor(date.getTime() / 1000);

    return currentTime;
}

clock()


function checkTime(i) {
    return (i < 10) ? ('0' + i) : i;
}


function timer1() {
    var timeForTask = new Date(),
        hoursForTask = timeForTask.setHours(16),
        minutesForTask = timeForTask.setMinutes(7),
        secondsForTask = timeForTask.setSeconds(0);

    var presetTime = Math.floor(timeForTask.getTime(hoursForTask, minutesForTask, secondsForTask) / 1000);

    return presetTime;
}

timer1()

function timer2() {
    var timeForTask2 = timer1() + 5;

    return timeForTask2;
}

timer2()

function timer3() {
    var timeForTask2 = timer1() + 10;

    return timeForTask2;
}

timer3()

function compare() {
    if (clock() === timer1()) {
        document.getElementById('task').innerText = 'Hello ☺️';
    } if (clock() === timer2()){
        document.getElementById('task').innerText = 'Have a nice day ✨';
    } if (clock() === timer3()) {
        document.getElementById('task').innerText = '❄️ ❄️ ❄️ ❄️ ❄️ ❄️ ❄️ ❄️ ';
    }
    setTimeout(compare, 1000);
}

compare()