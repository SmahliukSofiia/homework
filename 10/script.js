function MyConstructor(title, description, timeForTask) {
    this.title = title;
    this.description = description;
    this.timeForTask = timeForTask;
}

MyConstructor.prototype.getTask = function() {
    var currentTime = new Date().getTime();
    if (Math.floor(currentTime / 1000) === Math.floor(this.timeForTask / 1000)) {
        console.log(this.title, this.description)
    }
}

var tasks = [];

for (var i = 1; i < 6; i++) {
    tasks.push(new MyConstructor('Task' + i, 'Desc' + i, new Date().setHours(18, 57, 0 + i)))
}

function clock() {
    var date = new Date(),
        hours = checkTime(date.getHours()),
        minutes = checkTime(date.getMinutes()),
        seconds = checkTime(date.getSeconds());

    document.getElementById('clock').innerText = hours + ':' + minutes + ':' + seconds;

    for (var i = 0; i < tasks.length; i++) {
        tasks[i].getTask();
    }
    
    setTimeout(clock, 1000);
}

clock()

function checkTime(i) {
    return (i < 10) ? ('0' + i) : i;
}
