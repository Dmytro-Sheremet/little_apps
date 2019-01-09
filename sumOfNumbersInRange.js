function sumAll(arr) {
  let min = Math.min(...arr)
  let tempItem = min
  let max = Math.max(...arr)
  let rangeArr = [];
  do {
    rangeArr.push(tempItem++)
  }
  while (tempItem <= max);
  let sumOfRange = rangeArr.reduce((sumRange, itemInRange) => {
    return sumRange + itemInRange
  })
  console.log(`sum of numbers in range from ${min} to ${max} is ${sumOfRange} `)
  return sumOfRange;
}

let a = sumAll([-13, 13]);