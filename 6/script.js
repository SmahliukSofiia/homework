var letters = 'abcdefghijklmnopqrstuvwxyz';
    userNumber = +prompt('How many values ​​need to create?');
    minNumber = +prompt('Minimum number of characters');
    maxNumber = +prompt('Maximum number of characters');
    arr = [];

for (var number = 0; number < userNumber; number++) {
    var text = '';
    for (var i = 0; i < Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber; i++) {
        text += letters.charAt(Math.floor(Math.random() * letters.length));
    }  
    arr.push(text);
}
console.log(arr);


