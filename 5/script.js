/* 1. Запросить у пользователя значение, кратное которому будут выводиться числа - вывести их в консоль. */

var value = +prompt('Enter value');
    max = +prompt('Enter max number');

for (var i = 1; i <= max; i++) {
    if (i % value !== 0) continue;
    console.log(i);
} 

/* var i = 1;

while (i < max) {
    i++;
    if (i % value !== 0) continue;
    console.log(i);
} */


/* 2. Кроме кратного запросить количество чисел, которые следует вывести */

var value = +prompt('Enter value');
    maxNumber = +prompt('How many numbers to output?');
    number = 1;

for (var i = 1; ; i++) {
    if (i % value !== 0) continue;
    console.log(i, number);
    if (number === maxNumber) break;
    number++;
}

/* var i = 1;

while (i < Number.MAX_SAFE_INTEGER) {
    i++;
    if (i % value !== 0) continue;
    console.log(i, number);
    if (number === maxNumber) break;
    number++;
} */


/* 3. Переписать примеры с итерацией числа и прерыванием цикла с помощью while и do/while */

var i = 1;

while (i < 10) {
    i++; 
    if((i%2)) continue;
    console.log(i);
}

/* do {
    i++; 
    if((i%2)) continue;
    console.log(i);
} while (i < 10); */

var i = 1;

while (i < 10) {
    console.log(i);
    i++;
    if (!(i%2)) break;
}

/* do {
    console.log(i);
    i++;
    if (!(i%2)) break;
} while (i < 10); */


/* 4. Скрипт о запросе на угадывание сгенерированного числа так, чтобы человек мог отменить игру, либо угадывать, пока число не станет соответствовать */

alert('Do you want to guess the number?');

var number = Math.round(Math.random() * 10);
var numberRight;

while ((number !== Number(numberRight)) && (numberRight !== null)) {
    numberRight = prompt('Enter your number');
}

alert('Сongratulations! You guessed the number )');

console.log(number, numberRight);