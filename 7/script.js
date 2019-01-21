/* 1. Переписать/написать функцию обмена валют. Выполнение функции должно быть следующего вида: exchange(from, to). 
    Результатом ее выполнения должно быть число. */

var USD = 'usd';
    EUR = 'eur';
    RUB = 'rub';
    PLN = 'pln';
    
function exchange(from, to) {
    switch (to) {
        case USD:
            console.log(Math.round((from * 0.037) * 100) / 100);
            break;
        case EUR:
            console.log(Math.round((from * 0.032) * 100) / 100);
            break;
        case RUB:
            console.log(Math.round((from * 2.54) * 100) / 100);
            break;
        case PLN:
            console.log(Math.round((from * 0.14) * 100) / 100);
            break;
        default:
            console.log('Enter the correct value!');
            break;
    }
}

exchange(+prompt('Enter value in UAH'), prompt('Select the currency to convert: \n usd \n eur \n rub \n pln'))


/* 2. Поместить предыдущее задание в ф-ю. Функция не должна обращаться к данным за своими пределами - только через аргументы. */

function createString(userNumber, minNumber, maxNumber) {
    var letters = 'abcdefghijklmnopqrstuvwxyz';
        arr = [];
        obj = {}; 

    for (var number = 0; number < userNumber; number++) {
        var text = '';
        for (var i = 0; i < Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber; i++) {
            text += letters.charAt(Math.floor(Math.random() * letters.length));
        }  
        obj[text.length] = obj[text.length] ? obj[text.length].concat([text]) : [text];
    }

    console.log(obj);

    for (var key in obj) {
        alert(obj[key].length + ' words with ' + key + ' characters'); 
        console.log(obj[key].length + ' words with ' + key + ' characters');
    }
}

createString(+prompt('How many values ​​need to create?'), +prompt('Minimum number of characters'), +prompt('Maximum number of characters'))


/* 3. Из второго задания разбить все возможные логически несвязанные блоки на отдельные функции. */

function createString(userNumber, minNumber, maxNumber) {
    var letters = 'abcdefghijklmnopqrstuvwxyz';
        arr = [];
        obj = {}; 

    for (var number = 0; number < userNumber; number++) {
        var text = '';
        for (var i = 0; i < Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber; i++) {
            text += letters.charAt(Math.floor(Math.random() * letters.length));
        }  
        obj[text.length] = obj[text.length] ? obj[text.length].concat([text]) : [text];
    }

    console.log(obj);
}

function createAnswer() {
    for (var key in obj) {
        console.log(obj[key].length + ' words with ' + key + ' characters');
    }
}

createString(+prompt('How many values ​​need to create?'), +prompt('Minimum number of characters'), +prompt('Maximum number of characters'));
createAnswer()  

/* 4. Написать функцию, повторяющую функционал метода forEach массива. 
    Вызов должен выглядеть следующим образом: fEach([1,2,3,4], function(num) { }) */

function fEach(arr, cb) {
    for (var i = 0; i < arr.length; i++) {
        var element = arr[i];
        cb(element);
    }
}

fEach([1,2,3,4], function(num) {
    console.log(num);
 }); 
