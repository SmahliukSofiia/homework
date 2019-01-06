var a = +prompt('Enter the first number');
var b = +prompt('Enter the second number');
var c = +prompt('Enter the third number');
var d = +prompt('Enter the fourth number');
var arr = [a, b, c, d];
var sum = 0;

for (var i = 0; i < arr.length; i++) {
    sum +=arr[i];
}

var result = Math.round(sum / arr.length);

alert('Arithmetical mean = ' + result);

console.log(arr, result);




var numbers = prompt('Enter numbers separated by commas');
var arr = numbers.split(',').map(Number);
var sum = 0;

for (var i = 0; i < arr.length; i++) {
    sum += arr[i];
}

var result = Math.round(sum / arr.length);

alert('Arithmetical mean = ' + result);

console.log(numbers, arr, arr.length, result);




var a = +prompt('Enter value in UAH');

alert('UAH to USD conversion');

var result = Math.round((a * 0.0362107143) * 100) / 100;

alert(a + ' UAH equals ' + result + ' USD');

console.log(a, result);



var a = prompt('Enter first value');
var b = prompt('Enter second value');

if (a === b) {
    alert('Values ​​match');
} else {
    alert("Values ​​don't match!");
}

console.log(a, b, a === b);



alert('Do you want to guess the number?');

var number = Math.round(Math.random() * 10);
var numberRight = +prompt('Enter your number');

if (number === numberRight) {
    alert('Сongratulations! You guessed the number )');
} else {
    alert("You didn't guess the number (");
}

console.log(number, numberRight, number === numberRight);