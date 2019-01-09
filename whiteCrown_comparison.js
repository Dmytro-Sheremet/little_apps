function diffArray(arr1, arr2) {
  let whiteCrown = [];
  arr1.concat(arr2).map(item => {
    (!arr1.includes(item) || !arr2.includes(item) ? whiteCrown.push(item) : false)
  })
  return whiteCrown;
}
let a = diffArray([1, 2, 3, 5, 4, 13], [1, 2, 3, 4, 5]);
console.log(a);