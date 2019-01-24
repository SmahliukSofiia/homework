/* Самостоятельно переписать функционал: forEach, map, filter, some, every */

var arr = [1, 2, 3];

arr.forEach(function(num) {
    console.log(num)
})


function forEach(arr, cb) {
	for (var i = 0; i < arr.length; i++) {
		cb(arr[i]);
	}
}

forEach([1, 2, 3], function(num) {
	console.log(num);
})

/* ------------------------------------------------------ */

var arr = [1, 2, 3];

var newArray = arr.map(function (num) {
    return num * num;
});

console.log(arr, newArray);


function map(arr, cb) {
	var newArr = [];
	for (var i = 0; i < arr.length; i++) {
		newArr[newArr.length] = cb(arr[i]);
	}
	return newArr;
}

var newMap = map(arr, function(num) {
	return num * num;
})

console.log(arr, newMap)

/* ------------------------------------------------------ */

var arr = [1, -1, 2, -2, 3];

var positiveArr = arr.filter(function(number) {
	return number > 0;
});

console.log(positiveArr);


function filter(arr, cb) {
	var newArr = [];
	for (var i = 0; i < arr.length; i++) {
		if (cb(arr[i])) {
			newArr.push(arr[i]);
    }
  }
  return newArr;
}

var newFilter = filter([1, -1, 2, -2, 3], function(num){
	return num > 0;
})

console.log(newFilter)

/* ------------------------------------------------------ */

var arr = [1, -1, 2, -2, 3];

function isPositive(number) {
  return number > 0;
}

console.log(arr.some(isPositive));


function some(arr, cb) {
	for (var i = 0; i < arr.length; i++) {
		if (cb(arr[i])) 
			return true; 
	}
	return false;
}

var newSome = some([1, -1, 2, -2, 3], function(num) {
	return num > 0;
})

console.log(newSome)

/* ------------------------------------------------------ */

var arr = [1, -1, 2, -2, 3];

function isPositive(number) {
  return number > 0;
}

console.log(arr.every(isPositive)); 


function every(arr, cb) {
	for (var i = 0; i < arr.length; i++) {
		if (!cb(arr[i])) 
			return false; 
	}
	return true;
}

var newEvery = every([1, -1, 2, -2, 3], function(num) {
	return num > 0;
})

console.log(newEvery)

/* ------------------------------------------------------ */

var arr = [1, 2, 3, 4, 5]

var result = arr.reduce(function(sum, current) {
  return sum + current;
}, 0);

console.log(result);


function reduce(arr, cb, startValue) {
	var sum = startValue || arr[0];
	for (var i = 1; i < arr.length; i++) {
		sum += cb(arr[i]);
	}
	return sum;
}

var newReduce = reduce([1, 2, 3, 4, 5], function(num) {
	return num;
})

console.log(newReduce)