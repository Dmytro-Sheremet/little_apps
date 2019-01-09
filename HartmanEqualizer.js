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

let a = 
hartmanEqualizer([1, {}, [3, [[4]]]])
console.log(a);


