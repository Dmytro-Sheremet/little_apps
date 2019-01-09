//----------------------------------------------------------------------------
let spreader = (nums) => {
	let arr = nums.sort((a, b) => a - b);
	let num1 = arr[0];
	let num2 = arr[1];
	let spreadNums = [];

	for (num1; num1 <= num2; num1++) {
		spreadNums.push(num1);
	}

	return spreadNums;
}
//----------------------------------------------------------------------------
let primes = (limit) => {
	let primes = [];
	for (let i = 2; i <= limit; i++) {
		let tempArr = primes.slice();
		tempArr.splice(primes.indexOf(i), 1);
		(tempArr.every(number => i % number !== 0)) ?
		primes.push(i): false
	}
	return primes
}
//----------------------------------------------------------------------------
let simpleDigits = (num) => {
	/* on return we must receive an array of simple numbers multipliers of num*/

	let primeNums = primes(num);
	let multipliers = [];
	for (let i = 0; i < primeNums.length; i++) {
		if (num % primeNums[i] === 0) {
			multipliers.push(primeNums[i]);
			num /= primeNums[i];
			i--
		}
	}
	return multipliers
}
//----------------------------------------------------------------------------
let hartmanEqualizer = (arr) => {
	let arrCheck = (arr) => {
		return Array.isArray(arr)
	};
	let reduceDummyArr = [];
	let equalizer = (target) => {
		target.reduce((flatArr, value) => {
			return flatArr.concat(value)
		}, []).forEach((item) => {
			arrCheck(item) ? equalizer(item) : reduceDummyArr.push(item)
		})
	}
	equalizer(arr);
	return reduceDummyArr;
}
//----------------------------------------------------------------------------
let merger = (arr1, arr2) => {
	arr1.forEach(num => {
		if (arr2.includes(num)) {
			arr2.splice(arr2.indexOf(num), 1)
		}
	})
	return arr1.concat(arr2);
}
//----------------------------------------------------------------------------
let offExcessiveNumsLCM = (XYZ) => {
	return XYZ.slice().reduce((bucket, array) => {
		return merger(bucket, array)
	}).sort((a, b) => a - b);
}
//----------------------------------------------------------------------------


let smallestCommons = (nums) => {
	console.log(nums);
	let numsSpreadedArr = spreader(nums);
	console.log(numsSpreadedArr);

	let numMultipliers = numsSpreadedArr.map(num => simpleDigits(num));
	console.log('numMultipliers', numMultipliers);
	let LCMmultipliers = offExcessiveNumsLCM(numMultipliers);
	console.log('LCMmultipliers', LCMmultipliers);
	return LCMmultipliers.reduce((product, num) => product * num);
}


let res = smallestCommons([23,18]);
console.log(res)
