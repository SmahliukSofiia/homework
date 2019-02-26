function MyConstructor(title, timeForTask) {
    this.title = title;
    this.timeForTask = timeForTask;
}

MyConstructor.prototype.getTask = function(time, index) {
    var currentTime = new Date().getTime();
    if (Math.floor(currentTime / 1000) === Math.floor(this.timeForTask / 1000)) {
        var element = document.getElementById('task' + index);
        if (element) {
            second_block.removeChild(element);
            first_block.appendChild(element);
        }
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

for (var i = 1; i < 7; i++) {
    tasks.push(new MyConstructor('Task ' + i, new Date().getTime() + 2000 * i))
}

for (var i = 0; i < tasks.length; i++) {
    createTag('second_block', 'div', tasks[i].title + "\r\n" + new Date(tasks[i].timeForTask).toLocaleTimeString(), 'task', 'task' + i);
    createTag('task' + i, 'button', 'X', 'button', '', 'click', function remove() {
        this.parentElement.remove();
    });
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
