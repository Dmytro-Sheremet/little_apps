function destroyer(arr) {
  let args = [...arguments].slice(1)
  return arr.filter(item => !args.includes(item))
}

let result = destroyer([1, 2, 3, 1, 2, 3], 3, 1);
console.log(result);