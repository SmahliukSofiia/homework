var letters = 'abcdefghijklmnopqrstuvwxyz',
    userNumber = +prompt('How many values ​​need to create?'),
    minNumber = +prompt('Minimum number of characters'),
    maxNumber = +prompt('Maximum number of characters'),
    arr = [],
    obj = {};

for (var number = 0; number < userNumber; number++) {
    var text = '';
    for (var i = 0; i < Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber; i++) {
        text += letters.charAt(Math.floor(Math.random() * letters.length));
    }  
    obj[text.length] = obj[text.length] ? obj[text.length].concat([text]) : [text];
}
console.log(obj);

/* Вариант 1. Сообщить пользователю какое количество слов какой длины было добавлено */

for (var key in obj) {
    alert(obj[key].length + ' words with ' + key + ' characters'); 
    console.log(obj[key].length + ' words with ' + key + ' characters');
}

/* Вариант 2. Сообщить пользователю какое количество слов какой длины было добавлено */

for (var i = 0; i < Object.keys(obj).length; i++) {
    alert(obj[Object.keys(obj)[i]].length + ' words with ' + Object.keys(obj)[i] + ' characters');
    console.log(obj[Object.keys(obj)[i]].length + ' words with ' + Object.keys(obj)[i] + ' characters');
}

