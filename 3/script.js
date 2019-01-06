/*  1. Запросить у пользователя год рождения. Если возраст больше 18 лет - сообщить о доступе к сервису,
    в противном случае - о запрете. Если пользователь меньше 12 - посоветовать другой сервис. Если 
    пользователь ввел не число - сообщить ему об этом. Записать при помощи if/else. */

var year = +prompt('Enter year of birth');
    age = (2018 - year);

if (age <= 0 || isNaN(year)) {
    alert('Enter the correct number');
} else if (age > 18) {
    alert('Service is available');
} else if (age < 12) {
    alert('Choose another service');
} else {
    alert('Service is unavailable');
}

console.log('age : ' + age);

Записать при помощи тернарного оператора.   

var message = (age <= 0 || isNaN(year)) ? 'Enter the correct number' :
    (age > 18) ? 'Service is available' :
    (age < 12) ? 'Choose another service' :
    'Service is unavailable';

alert(message);


/*  2.  Написать опросник для поступления на работу. К примеру, захардоженные условия требуют, чтобы
    человек был не младше 30 лет, имел опыт в данной области больше 3-х лет и т.п. Выдать 
    результат: подходит человек на должность, или нет.  */

var age = +prompt('Enter your age');
    experience = +prompt('Experience in this field (how many years)');
    language = prompt('Your level of English is higher than intermediate? (yes or no)');
    time = prompt('Does it suit you full time? (yes or no)');
    city = prompt('What city do you live in?');
    

if (age >= 30 && experience > 3 && language === 'yes' && time === 'yes' && city === 'Odessa') {
    alert('Congratulations! You are accepted')
} else {
    alert('You are not suitable for this position');
}

console.log(age, experience, language, time, city);

/*  3. Модифицировать скрипт конвертации валюты. Выбрать валюту, в которую будут конвертироваться 
    деньги. После чего спросить пользователя, в какую валюту будет производиться перевод. В 
    соответствии с выбором конвертировать значение. */

var USD_UPPERCASE = 'USD';
    USD_LOWERCASE = 'usd';
    EUR_UPPERCASE = 'EUR';
    EUR_LOWERCASE = 'eur';
    RUB_UPPERCASE = 'RUB';
    RUB_LOWERCASE = 'rub';
    PLN_UPPERCASE = 'PLN';
    PLN_LOWERCASE = 'pln';
    value = +prompt('Enter value in UAH');

if (isNaN(value) || value === 0) {
    alert('Enter the correct value!');
} else {
    var currency = prompt('Select the currency to convert: \n USD (usd) \n EUR (eur) \n RUB (rub) \n PLN (pln)');
}

switch (currency) {
    case USD_UPPERCASE:
    case USD_LOWERCASE: 
        alert(value + ' UAH equals ' + (Math.round((value * 0.037) * 100) / 100) + ' USD');
        break;
    case EUR_UPPERCASE:
    case EUR_LOWERCASE:
        alert(value + ' UAH equals ' + (Math.round((value * 0.032) * 100) / 100) + ' EUR');
        break;
    case RUB_UPPERCASE:
    case RUB_LOWERCASE:
        alert(value + ' UAH equals ' + (Math.round((value * 2.54) * 100) / 100) + ' RUB');
        break;
    case PLN_UPPERCASE:
    case PLN_LOWERCASE: 
        alert(value + ' UAH equals ' + (Math.round((value * 0.14) * 100) / 100) + ' PLN');
        break;
    case undefined:
        break;
    default:
        alert('Enter the correct value!');
        break;
}