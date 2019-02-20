function MyConstructor(title, timeForTask) {
    this.title = title;
    this.timeForTask = timeForTask;
}

MyConstructor.prototype.getTask = function(time) {
    var currentTime = new Date().getTime();
    if (Math.floor(currentTime / 1000) === Math.floor(this.timeForTask / 1000)) {
        var parent = document.getElementById('block');
        var div = document.createElement('div');
        div.innerHTML = this.title + "<br>" + time;
        parent.appendChild(div);
        div.setAttribute('class', 'task')
    }
}

var tasks = [];

for (var i = 1; i < 6; i++) {
    tasks.push(new MyConstructor('Task ' + i, (new Date().getTime() + 2000 * i)))
}

function clock() {
    var date = new Date(),
        hours = checkTime(date.getHours()),
        minutes = checkTime(date.getMinutes()),
        seconds = checkTime(date.getSeconds());

    var showTime = hours + ':' + minutes + ':' + seconds;

    document.getElementById('clock').innerText = showTime;

    for (var i = 0; i < tasks.length; i++) {
        tasks[i].getTask(showTime)
    }

    setTimeout(clock, 1000);
}

clock()

function checkTime(i) {
    return (i < 10) ? ('0' + i) : i;
}
