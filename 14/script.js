function MyConstructor(title, timeForTask) {
    this.title = title;
    this.timeForTask = timeForTask;
}

MyConstructor.prototype.getTask = function(time, index) {
    var currentTime = new Date().getTime();
    if (Math.floor(currentTime / 1000) === Math.floor(this.timeForTask / 1000)) {
        createTag('block', 'div', this.title + "\r\n" + time, 'task', 'task' + index);
        createTag('task' + index, 'button', 'X', 'button', '', 'onclick');
    }
}

function createTag(parentTag, tagName, content, classValue, id, eventName, func) {
    var parent = document.getElementById(parentTag);
    var tag = document.createElement(tagName);
    tag.textContent = content;
    parent.appendChild(tag);
    tag.className = classValue;
    tag.id = id;
    tag.addEventListener(eventName, func);
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
        tasks[i].getTask(showTime, i)
    }

    setTimeout(clock, 1000);
}

clock()

function checkTime(i) {
    return (i < 10) ? ('0' + i) : i;
}
