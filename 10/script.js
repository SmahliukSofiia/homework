function clock() {
    var date = new Date(),
        hours = checkTime(date.getHours()),
        minutes = checkTime(date.getMinutes()),
        seconds = checkTime(date.getSeconds());

    document.getElementById('clock').innerText = hours + ':' + minutes + ':' + seconds;

    setTimeout(clock, 1000);
}

clock()

function checkTime(i) {
    return (i < 10) ? ('0' + i) : i;
}

function MyConstructor(title, description, timeForTask) {
    this.title = title;
    this.description = description;
    this.timeForTask = timeForTask;
}

MyConstructor.prototype.getTask = function() {
    var currentTime = new Date().getTime();
    if (Math.floor(currentTime / 1000) === Math.floor(this.timeForTask / 1000)) {
        console.log(task)
    }
}

var task = new MyConstructor('Task 1', 'Desc 1', new Date().setHours(17, 33, 10))

var timerId = setInterval(function () {
    task.getTask()
}, 1000)
