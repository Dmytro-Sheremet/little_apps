function sumFibs(num) {

  let fibonacci = (num) => {
    let arr = [0, 1]

    for (let i = arr.length; arr.slice().pop() <= num; i++) {
      arr.push(arr[i - 2] + arr[i - 1])

      if (arr[i] > num) {
        arr.pop()
        break
      }
    }
    return arr;
  }
  // console.log(fibonacci(num))
  // console.log(fibonacci(num).filter(item => item % 2 !== 0))
  return fibonacci(num).filter(item => item % 2 !== 0).reduce((a, b) => a + b)
}


let a = sumFibs(75025);
console.log(a);


/*

sumFibs(1) should return a number.
sumFibs(1000) should return 1785.
sumFibs(4000000) should return 4613732.
sumFibs(4) should return 5.
sumFibs(75024) should return 60696.
sumFibs(75025) should return 135721.
 */