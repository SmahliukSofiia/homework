var task = [
    {
        time: new Date().setHours(12, 24, 30),
        name: 'Hello ☺️'
    }, {
        time: new Date().setHours(12, 24, 40),
        name: 'Have a nice day ✨'
    }, {
        time: new Date().setHours(12, 24, 50),
        name: '❄️ ❄️ ❄️ ❄️ ❄️ ❄️ ❄️ ❄️ '
    }
]

var taskElement = document.getElementById('task');

function clock() {
    var date = new Date(),
        hours = checkTime(date.getHours()),
        minutes = checkTime(date.getMinutes()),
        seconds = checkTime(date.getSeconds());

    document.getElementById('clock').innerText = hours + ':' + minutes + ':' + seconds;

    setTimeout(clock, 1000);

    var currentTime = Math.floor(date.getTime() / 1000);

    compare(currentTime);
}

clock()


function checkTime(i) {
    return (i < 10) ? ('0' + i) : i;
}

function compare(currentTime) {
    for (var j = 0; j < task.length; j++) {
        if (currentTime === Math.floor(task[j].time / 1000)) {
            taskElement.innerText = task[j].name;
        }
    }
}
