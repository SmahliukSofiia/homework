function random(min, max) {
    return Math.round(Math.random() * (max - min) + min)
}

function randomString(number, letters) {
    var currentLetters = letters || 'abcdefghijklmnopqrstuvwxyz';
        text = '';
    for (var j = 0; j < number; j++) {
        text += currentLetters[random(0, currentLetters.length - 1)];
    } 
    return text;
}

function createString(userNumber, minNumber, maxNumber, letters) {
    var currentLetters = letters || 'abcdefghijklmnopqrstuvwxyz';
        min = minNumber || 1,
        max = maxNumber ? maxNumber : min + 9;
        obj = {};

    for (var i = 0; i < userNumber; i++) {
        var number = random(min, max);
        var text = randomString(number, currentLetters);
        
        obj[number] = obj[number] ? obj[number].concat([text]) : [text];
    }
    return obj;
}

const newString = createString(10);

console.log(newString)

