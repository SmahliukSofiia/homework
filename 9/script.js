function clock() {
    var date = new Date(),
        hours = checkTime(date.getHours()),
        minutes = checkTime(date.getMinutes()),
        seconds = checkTime(date.getSeconds());

    document.getElementById('clock').innerText = hours + ':' + minutes + ':' + seconds;

    setTimeout(clock, 1000);

    var currentTime = Math.floor(date.getTime() / 1000);

    return currentTime;
}

clock()


function checkTime(i) {
    return (i < 10) ? ('0' + i) : i;
}

function compare() {
    var currentDate = new Date(),
        dateForTask1 = new Date(),
        dateForTask2 = new Date(),
        dateForTask3 = new Date();
        dateForTask1.setHours(19, 4, 0);
        dateForTask2.setHours(19, 4, 30);
        dateForTask3.setHours(18, 52, 0);

    if (Math.floor(currentDate.getTime() / 1000) === Math.floor(dateForTask1.getTime() / 1000)) {
        document.getElementById('task').innerText = 'Hello ☺️';
    } if (Math.floor(currentDate.getTime() / 1000) === Math.floor(dateForTask2.getTime() / 1000)){
        document.getElementById('task').innerText = 'Have a nice day ✨';
    } if (Math.floor(currentDate.getTime() / 1000) === Math.floor(dateForTask3.getTime() / 1000)) {
        document.getElementById('task').innerText = '❄️ ❄️ ❄️ ❄️ ❄️ ❄️ ❄️ ❄️ ';
    }
    setTimeout(compare, 1000);
}

compare()

/*function timer1() {
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

compare() */
