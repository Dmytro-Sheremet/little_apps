function dropElements(arr, func) {
	if (arr.findIndex(func) !== -1) {
		let index = arr.findIndex(func)
		arr.splice(0, index)
		return arr
	} else {
		return []
	}
}

let a =
	dropElements([0, 1, 0, 1], function (n) {
		return n === 1;
	})
console.log(a);


/*
dropElements([1, 2, 3, 4], function(n) {return n >= 3;}) should return [3, 4].
dropElements([0, 1, 0, 1], function(n) {return n === 1;}) should return [1, 0, 1].
dropElements([1, 2, 3], function(n) {return n > 0;}) should return [1, 2, 3].
dropElements([1, 2, 3, 4], function(n) {return n > 5;}) should return [].
dropElements([1, 2, 3, 7, 4], function(n) {return n > 3;}) should return [7, 4].
dropElements([1, 2, 3, 9, 2], function(n) {return n > 2;}) should return [3, 9, 2].
 */