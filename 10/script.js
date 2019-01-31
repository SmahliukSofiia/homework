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

function MyConstructor(title, description, currentTime, timeForTask) {
    this.title = title;
    this.description = description;
    this.currentTime = Math.floor(currentTime.getTime() / 1000);
    this.timeForTask = Math.floor(timeForTask / 1000);
}

MyConstructor.prototype.getTask = function() {
    if (this.currentTime === this.timeForTask) {
        console.log(task)
    }
}

var task = new MyConstructor('Task 1', 'Desc 1', new Date(), new Date().setHours(15, 48, 30))

console.log(task)

task.getTask()
