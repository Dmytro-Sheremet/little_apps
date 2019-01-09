function sumPrimes(num) {
  let i = 2; /* begin of prime numbers row*/
  let numArr = []
  do {
    numArr.push(i)
    i++;
  }
  while (i <= num);

  let primes = []
  numArr.forEach(item => {
    let tempArr = numArr.slice();
    tempArr.splice(numArr.indexOf(item), 1);
    (tempArr.every(number => item % number !== 0)) ?
    primes.push(item): false
  })
  return primes.reduce((sum, item) => {
    return sum + item
  })

}

let a = sumPrimes(10000);
console.log(a);