function frankenSplice(arr1, arr2, n) {
    let arrTwo = arr2.slice();
    let tempArr = arrTwo.splice(n)
    let finita = arrTwo.concat(arr1.concat(tempArr))
    console.log(finita);
}

let a = frankenSplice([1, 2, 3], [4, 5], 1);
// console.log(a)q