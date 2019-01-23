var arr = [1, -1, 2, -2, 3];

var newArr = arr.filter(function(number) {
  return number > 0;
});

console.log(newArr);




function newFilter(arr, cb) {
  var newArr = [];
  for (var i = 0; i < arr.length; i++) {
  	if (cb(arr[i])) {
    	newArr.push(arr[i]);
    }
  }
  return newArr;
}

newFilter([1, -1, 2, -2, 3], function(num){
	return num < 0;
})


var arr = [1, -1, 2, -2, 3];

function isPositive(number) {
  return number > 0;
}

console.log(arr.some(isPositive));


function newSome(arr, cb) {
	for (var i = 0; i < arr.length; i++) {
		if (!i in arr) { continue }
		if (cb(arr[i])) {
			return true;
		} return false;
	}
}

newSome([1, -1, 2, -2, 3], function(num) {
	return num < 0;
})
false
